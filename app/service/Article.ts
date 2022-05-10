import { Service } from 'egg';

/**
 * Test Service
 */
export default class Article extends Service {
  /**
   * 根据ID获取单个项目
   */
  public async getProjectById() {
    const { ctx } = this;
    // console.log(app.mongoose.Types);
    try {
      const results = await ctx.model.Article.find({
        // Article为modal/article.js里面命名的名字
        // id: 2,
        // _id: app.mongoose.Types.ObjectId('6231b28691e2bcb857babb56'),
      });
      return ctx.helper.json(results);
    } catch (err) {
      ctx.body = ctx.helper.json(JSON.stringify(err));
    }
  }

  /**
   * 增加单个项目
   */
  public async addProject(values) {
    const { ctx } = this;
    // console.log(app.mongoose.Types);
    try {
      const results = await ctx.model.Article.create({
        name: values?.name,
        age: values?.age,
        // Article为modal/article.js里面命名的名字
        // id: 2,
        // _id: app.mongoose.Types.ObjectId('6231b28691e2bcb857babb56'),
      });
      return ctx.helper.json(results);
    } catch (err) {
      ctx.body = ctx.helper.json(JSON.stringify(err));
    }
  }

  /**
   * 删除单个项目
   */
  public async deleteProject(values) {
    const { ctx, app } = this;
    // console.log(app.mongoose.Types);
    try {
      const results = await ctx.model.Article.deleteOne({
        _id: app.mongoose.Types.ObjectId(values),
      });
      return ctx.helper.json(results);
    } catch (err) {
      ctx.body = ctx.helper.json(JSON.stringify(err));
    }
  }

  /**
   * 修改单个项目
   */
  public async updateProject(values) {
    const { ctx, app } = this;
    // console.log(app.mongoose.Types);
    try {
      const results = await ctx.model.Article.updateOne(
        { _id: app.mongoose.Types.ObjectId(values?.id) },
        {
          age: values?.age,
          name: values?.name,
        },
      );
      return ctx.helper.json(results);
    } catch (err) {
      ctx.body = ctx.helper.json(JSON.stringify(err));
    }
  }
}
