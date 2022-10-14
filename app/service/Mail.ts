// app/service/tool.js

'use strict';
import { computedValue, rand } from '../utils';

const Service = require('egg').Service;
// 引入nodemailer
const nodemailer = require('nodemailer');
const user_email = '845064182@qq.com'; // 账号
const auth_code = 'buidblrjfmltbcba'; // 授权码
// 封装发送者信息
const transporter = nodemailer.createTransport({
  host: 'ip',
  service: 'qq', // 调用qq服务器
  secureConnection: true, // 启动SSL
  port: 465, // 端口就是465
  tls: { rejectUnauthorized: false },
  auth: {
    user: user_email, // 账号
    pass: auth_code, // 授权码
  },
});

class ToolService extends Service {
  async sendMail() {
    const { ctx } = this;
    try {
      const results = await ctx.model.User.find({});
      const resultFilt = results.filter((i) => i.email);
      console.log(resultFilt);
      let rrr: any = [];
      resultFilt.map(async (it) => {
        const results = await ctx.model.Food.find({
          user: it?.username,
        });
        console.log(results);
        const res = results
          ?.map((item) => {
            return {
              food: item?.food,
              value: computedValue(item?.times, item?.love),
            };
          })
          .sort((a, b) => b.value - a.value);
        const resTrue =
          res?.filter((item) => item.value === res[0]?.value) || '鸡腿';
        console.log({
          food: resTrue.map((i) => i.food)[rand(0, resTrue?.length)],
          email: it.email,
          user: it.username,
        });

        const email = it.email; // 接收者的邮箱
        const subject = '今天吃什么！！'; // 标题
        const html = `<div><h2>要不要试试今天吃${
          resTrue.map((i) => i.food)[rand(0, resTrue?.length)] || '鸡腿'
        }</h2><div>不想吃这个？试试进入网址 http://43.143.38.230:8000/#/</div><div>`;
        // 邮件参数及内容
        const mailOptions = {
          from: user_email, // 发送者,与上面的user一致
          to: email, // 接收者,可以同时发送多个,以逗号隔开
          subject, // 标题
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
