import { Service } from 'egg';

/**
 * Test Service
 */
export default class User extends Service {
  /**
   * 登录
   */
  public async login(params) {
    const { ctx, app } = this;
    // console.log(app.mongoose.Types);
    try {
      const results = await ctx.model.User.find({
        username: params?.username,
        password: params?.password,
        // Article为modal/article.js里面命名的名字
        // id: 2,
        // _id: app.mongoose.Types.ObjectId('6231b28691e2bcb857babb56'),
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
  public async registry(params) {
    const { ctx } = this;
    // console.log(app.mongoose.Types);
    try {
      const results = await ctx.model.User.find({
        username: params?.username,
        // Article为modal/article.js里面命名的名字
        // id: 2,
        // _id: app.mongoose.Types.ObjectId('6231b28691e2bcb857babb56'),
      });
      if (results?.length !== 0) {
        return ctx.helper.json('用户名已注册', 1, 'error');
      } else {
        try {
          await ctx.model.User.create({
            username: params?.username,
            password: params?.password,
            // Article为modal/article.js里面命名的名字
            // id: 2,
            // _id: app.mongoose.Types.ObjectId('6231b28691e2bcb857babb56'),
          });
          return ctx.helper.json('注册成功', 0);
        } catch (err) {
          return ctx.helper.json(JSON.stringify(err));
        }
      }
    } catch (err) {
      return ctx.helper.json(JSON.stringify(err));
    }
  }
}
