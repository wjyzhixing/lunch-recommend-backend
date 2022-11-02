// app/service/tool.js
'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
const Service = require('egg').Service;
const method = require('../utils/index');
// 引入nodemailer
const nodemailer = require('nodemailer');
const user_email = '845064182@qq.com'; // 账号
const auth_code = 'buidblrjfmltbcba'; // 授权码
// 封装发送者信息
const transporter = nodemailer.createTransport({
  host: 'ip',
  service: 'qq',
  secureConnection: true,
  port: 465,
  tls: { rejectUnauthorized: false },
  auth: {
    user: user_email,
    pass: auth_code,
  },
});
const { computedValue, rand, judgeTime } = method;

// const computedValue = (time, love) => {
//   return Math.pow(2, love) / (1 + time);
// };

// const rand = (min, max) => {
//   return Math.floor(Math.random() * (max - min)) + min;
// };

class ToolService extends Service {
  async sendMail() {
    const { ctx } = this;
    try {
      const results = await ctx.model.User.find({});
      const resultFilt = results.filter((i) => i.email);
      //   console.log(resultFilt);
      let rrr = [];
      resultFilt.map(async (it) => {
        const results = await ctx.model.Food.find({
          user: it === null || it === void 0 ? void 0 : it.username,
          whichTime: { $in: judgeTime() },
        });
        // console.log(results);
        const res =
          results === null || results === void 0
            ? void 0
            : results
                .map((item) => {
                  return {
                    food: item === null || item === void 0 ? void 0 : item.food,
                    value: computedValue(
                      item === null || item === void 0 ? void 0 : item.times,
                      item === null || item === void 0 ? void 0 : item.love,
                    ),
                  };
                })
                .sort((a, b) => b.value - a.value);
        const resTrue =
          (res === null || res === void 0
            ? void 0
            : res.filter((item) => {
                var _a;
                return (
                  item.value ===
                  ((_a = res[0]) === null || _a === void 0 ? void 0 : _a.value)
                );
              })) || '鸡腿';
        const email = it.email; // 接收者的邮箱
        const subject = '今天吃什么！！'; // 标题
        const html = `<div><h2>工作再忙也要记得吃饭！推荐您今天吃${
          resTrue.map((i) => i.food)[
            rand(
              0,
              resTrue === null || resTrue === void 0 ? void 0 : resTrue.length,
            )
          ] || '鸡腿'
        }</h2><h2>不相信推荐？随机的菜品是${
          results.map((i) => i.food)[
            rand(
              0,
              results === null || results === void 0 ? void 0 : results.length,
            )
          ]
        }</h2><div>不想吃这个？试试进入网址 http://43.143.38.230:8000/#/</div><div>`;
        // 邮件参数及内容
        const mailOptions = {
          from: user_email,
          to: email,
          subject,
          html,
        };
        try {
          // 调用函数，发送邮件
          await transporter.sendMail(mailOptions);
          return ctx.helper.json('发送成功');
        } catch (err) {
          return ctx.helper.json([], 1, '邮件发送失败');
        }
      });
      return ctx.helper.json(rrr);
    } catch (err) {
      return ctx.helper.json([], 1, 'false');
    }
  }
}
module.exports = ToolService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTWFpbC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIk1haWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsc0JBQXNCO0FBRXRCLFlBQVksQ0FBQzs7QUFDYixvQ0FBK0M7QUFFL0MsTUFBTSxPQUFPLEdBQUcsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDLE9BQU8sQ0FBQztBQUN2QyxlQUFlO0FBQ2YsTUFBTSxVQUFVLEdBQUcsT0FBTyxDQUFDLFlBQVksQ0FBQyxDQUFDO0FBQ3pDLE1BQU0sVUFBVSxHQUFHLGtCQUFrQixDQUFDLENBQUMsS0FBSztBQUM1QyxNQUFNLFNBQVMsR0FBRyxrQkFBa0IsQ0FBQyxDQUFDLE1BQU07QUFDNUMsVUFBVTtBQUNWLE1BQU0sV0FBVyxHQUFHLFVBQVUsQ0FBQyxlQUFlLENBQUM7SUFDN0MsSUFBSSxFQUFFLElBQUk7SUFDVixPQUFPLEVBQUUsSUFBSTtJQUNiLGdCQUFnQixFQUFFLElBQUk7SUFDdEIsSUFBSSxFQUFFLEdBQUc7SUFDVCxHQUFHLEVBQUUsRUFBRSxrQkFBa0IsRUFBRSxLQUFLLEVBQUU7SUFDbEMsSUFBSSxFQUFFO1FBQ0osSUFBSSxFQUFFLFVBQVU7UUFDaEIsSUFBSSxFQUFFLFNBQVM7S0FDaEI7Q0FDRixDQUFDLENBQUM7QUFFSCxNQUFNLFdBQVksU0FBUSxPQUFPO0lBQy9CLEtBQUssQ0FBQyxRQUFRO1FBQ1osTUFBTSxFQUFFLEdBQUcsRUFBRSxHQUFHLElBQUksQ0FBQztRQUNyQixJQUFJO1lBQ0YsTUFBTSxPQUFPLEdBQUcsTUFBTSxHQUFHLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7WUFDOUMsTUFBTSxVQUFVLEdBQUcsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ2xELDZCQUE2QjtZQUM3QixJQUFJLEdBQUcsR0FBUSxFQUFFLENBQUM7WUFD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
