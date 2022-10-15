// import { Controller } from 'egg';
const Controller = require('egg').Controller;

class MyWifeController extends Controller {
  // 获取
  async getMyWifeFood() {
    const { ctx } = this;
    ctx.body = await ctx.service.myWife.getMyWifeFood({
      user: ctx?.request?.body?.username,
    });
  }
  //   增加
  async addMyWifeFood() {
    const { ctx } = this;
    const query = {
      food: ctx.request.body?.food,
      times: ctx.request.body?.times || 0,
      love: ctx.request.body?.love || 0,
      user: ctx.request.body?.user || '',
    };
    console.log(query);
    const res = await ctx.service.myWife.addMyWifeFood(query);
    ctx.body = res; // 返回值显示
  }
  // 删除
  async deleteMyWifeFood() {
    const { ctx } = this;
    const query = {
      id: ctx.request.body?.id,
    };
    console.log(query);
    const res = await ctx.service.myWife.deleteMyWifeFood(query.id);
    ctx.body = res; // 返回值显示
  }
  //   修改
  async updateMyWifeFood() {
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
  async recommendMyWifeFood() {
    const { ctx } = this;
    const res = await ctx.service.myWife.recommendMyWifeFood({
      user: ctx?.request?.body?.user,
    });
    ctx.body = res; // 返回值显示
  }

  //   手动输入随机食物列表
  async getRandomFoodList() {
    const { ctx } = this;
    ctx.body = await ctx.service.myWife.getRandomFoodList({
      user: ctx?.request?.body?.user,
    });
  }
  //   手动修改随机食物列表
  async updateRandomFoodList() {
    const { ctx } = this;
    const query = {
      food: ctx.request.body?.food,
      user: ctx?.request?.body?.user,
      //   id: ctx.request.body?.id,
    };
    console.log(query);
    const res = await ctx.service.myWife.updateRandomFoodList(query);
    ctx.body = res; // 返回值显示
  }
}

module.exports = MyWifeController