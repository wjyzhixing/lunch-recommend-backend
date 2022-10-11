import { Controller } from 'egg';
export default class HomeController extends Controller {
  // 获取
  public async getMyWifeFood() {
    const { ctx } = this;
    ctx.body = await ctx.service.myWife.getMyWifeFood();
  }
  //   增加
  public async addMyWifeFood() {
    const { ctx } = this;
    const query = {
      food: ctx.request.body?.food,
      times: ctx.request.body?.times || 0,
      love: ctx.request.body?.love || 0,
    };
    console.log(query);
    const res = await ctx.service.myWife.addMyWifeFood(query);
    ctx.body = res; // 返回值显示
  }
  // 删除
  public async deleteMyWifeFood() {
    const { ctx } = this;
    const query = {
      id: ctx.request.body?.id,
    };
    console.log(query);
    const res = await ctx.service.myWife.deleteMyWifeFood(query.id);
    ctx.body = res; // 返回值显示
  }
  //   修改
  public async updateMyWifeFood() {
    const { ctx } = this;
    const query = {
      food: ctx.request.body?.food,
      times: ctx.request.body?.times,
      love: ctx.request.body?.love,
      id: ctx.request.body?.id,
    };
    console.log(query);
    const res = await ctx.service.myWife.updateMyWifeFood(query);
    ctx.body = res; // 返回值显示
  }
  //   推荐食物
  public async recommendMyWifeFood() {
    const { ctx } = this;
    const res = await ctx.service.myWife.recommendMyWifeFood();
    ctx.body = res; // 返回值显示
  }

  //   手动输入随机食物列表
  public async getRandomFoodList() {
    const { ctx } = this;
    ctx.body = await ctx.service.myWife.getRandomFoodList();
  }
  //   手动修改随机食物列表
  public async updateRandomFoodList() {
    const { ctx } = this;
    const query = {
      food: ctx.request.body?.food,
    //   id: ctx.request.body?.id,
    };
    console.log(query);
    const res = await ctx.service.myWife.updateRandomFoodList(query);
    ctx.body = res; // 返回值显示
  }
}
