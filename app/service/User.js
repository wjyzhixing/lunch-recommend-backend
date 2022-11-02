'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
const egg = require('egg');
/**
 * Test Service
 */
class User extends egg.Service {
  /**
   * 登录
   */
  async login(params) {
    const { ctx, app } = this;
    // console.log(app.mongoose.Types);
    try {
      const results = await ctx.model.User.find({
        username: params?.username,
        password: params?.password,
      });
      if (results?.length !== 0) {
        const token = app.jwt.sign(
          {
            username: params.username,
          },
          app.config.jwt.secret,
        );
        return ctx.helper.json({ token: token }, 0, 'success');
      }
      return ctx.helper.json('登录失败', 1, '登录失败，请检查您的信息');
    } catch (err) {
      return ctx.helper.json(JSON.stringify(err));
    }
  }
  /**
   * 注册
   */
  async registry(params) {
    const { ctx } = this;
    // console.log(app.mongoose.Types);
    try {
      const results = await ctx.model.User.find({
        username: params?.username,
      });
      console.log(results, 'results');
      if (results?.length !== 0) {
        return ctx.helper.json('用户名已注册', 1, 'error');
      } else {
        try {
          await ctx.model.User.create({
            username: params?.username,
            password: params?.password,
            email: params?.email,
          });
          return ctx.helper.json('注册成功', 0);
        } catch (err) {
          return ctx.helper.json(JSON.stringify(err));
        }
      }
    } catch (err) {
      console.log(err);
      return ctx.helper.json(JSON.stringify(err));
    }
  }
}
exports.default = User;
