import { Controller } from 'egg';

export default class HomeController extends Controller {
  public async getExample() {
    const { ctx } = this;
    ctx.body = await ctx.service.test.getExample(ctx?.query?.name);
  }

  public async postExample() {
    const { ctx } = this;
    console.log(ctx.request.body);
    ctx.body = await ctx.service.test.postExample(ctx.request.body);
  }

  public async putExample() {
    const { ctx } = this;
    console.log(ctx.request.body);
    ctx.body = await ctx.service.test.putExample(ctx.request.body);
  }

  public async headExample() {
    const { ctx } = this;
    console.log(ctx.request.body, ctx.query);
    // 没啥用
    ctx.body = await ctx.service.test.headExample(ctx.request.body);
  }

  public async deleteExample() {
    const { ctx } = this;
    console.log(ctx.query);
    ctx.body = await ctx.service.test.deleteExample({ msg: 'success' });
  }
}
