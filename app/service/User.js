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
        return ctx.helper.json(
          { token: token, id: results[0]?._id },
          0,
          'success',
        );
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
  /**
   * 查看个人信息
   */
  async showUserInfo(params) {
    const { ctx, app } = this;
    // console.log(app.mongoose.Types);
    try {
      const results = await ctx.model.User.find({
        _id: app.mongoose.Types.ObjectId(params?.id),
      });
      if (results?.length !== 0) {
        return ctx.helper.json(results[0], 0, 'success');
      }
      return ctx.helper.json('查询失败', 1, '查询失败');
    } catch (err) {
      return ctx.helper.json(JSON.stringify(err));
    }
  }
    /**
   * 修改个人信息
   */
     async updateUserInfo(params) {
      const { ctx, app } = this;
      // console.log(app.mongoose.Types);
      try {
          await ctx.model.User.updateOne({
            _id: app.mongoose.Types.ObjectId(params?.id),
          }, {
            // username: params?.username,
            password: params?.password,
            email: params?.email,
            ifEmail: params?.ifEmail
          });
          return ctx.helper.json(results);
      } catch (err) {
        return ctx.helper.json(JSON.stringify(err));
      }
    }
}
exports.default = User;
