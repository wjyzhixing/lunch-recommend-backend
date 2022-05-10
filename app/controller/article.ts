import { Controller } from 'egg';

export default class Article extends Controller {
  public async index() {
    const { ctx } = this;
    // const query = {
    //   limit: ctx.helper.parseInt(ctx.query.limit),
    //   offset: ctx.helper.parseInt(ctx.query.offset),
    // };
    // console.log(query);
    const res = await ctx.service.article.getProjectById();
    ctx.body = res; // 返回值显示
  }

  // 添加
  public async addProject() {
    const { ctx } = this;
    const query = {
      age: ctx.request.body?.age,
      name: ctx.request.body?.name,
    };
    console.log(query);
    const res = await ctx.service.article.addProject(query);
    ctx.body = res; // 返回值显示
  }

  // 删除
  public async deleteProject() {
    const { ctx } = this;
    const query = {
      id: ctx.request.body?.id,
    };
    console.log(query);
    const res = await ctx.service.article.deleteProject(query.id);
    ctx.body = res; // 返回值显示
  }

  // 修改
  public async updateProject() {
    const { ctx } = this;
    const query = {
      id: ctx.request.body?.id,
      age: ctx.request.body?.age,
      name: ctx.request.body?.name,
    };
    console.log(query);
    const res = await ctx.service.article.updateProject(query);
    ctx.body = res; // 返回值显示
  }
}
