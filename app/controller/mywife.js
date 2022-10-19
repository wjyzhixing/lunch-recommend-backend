// import { Controller } from 'egg';
const Controller = require('egg').Controller;
/**
 * @controller Food操作 食物相关接口
 */
class MyWifeController extends Controller {
  // 获取
  /**  （ 注释必写，swagger-doc是根据这段注释来生成接口详细信息的 ）。
   * @summary 获取食物列表
   * @description 获取食物列表
   * @router post /getMyWifeFood
   * @Request body getMyWifeFood
   * @response 200 JsonBody 返回结果。
   */
  async getMyWifeFood() {
    const { ctx } = this;
    ctx.body = await ctx.service.myWife.getMyWifeFood({
      user: ctx?.request?.body?.username,
      food: ctx.request.body?.food || undefined,
      times: ctx.request.body?.times || undefined,
      love: ctx.request.body?.love || undefined,
    });
  }
  //   增加食物列表
  /**  （ 注释必写，swagger-doc是根据这段注释来生成接口详细信息的 ）。
   * @summary 增加食物列表
   * @description 增加食物列表
   * @router post /addMyWifeFood
   * @Request body addMyWifeFood
   * @response 200 JsonBody 返回结果。
   */
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
  /**  （ 注释必写，swagger-doc是根据这段注释来生成接口详细信息的 ）。
   * @summary 删除食物列表
   * @description 删除食物列表
   * @router post /deleteMyWifeFood
   * @Request body deleteMyWifeFood
   * @response 200 JsonBody 返回结果。
   */
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
  /**  （ 注释必写，swagger-doc是根据这段注释来生成接口详细信息的 ）。
   * @summary 更新食物列表
   * @description 更新食物列表
   * @router post /updateMyWifeFood
   * @Request body updateMyWifeFood
   * @response 200 JsonBody 返回结果。
   */
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
  /**  （ 注释必写，swagger-doc是根据这段注释来生成接口详细信息的 ）。
   * @summary 推荐食物列表
   * @description 推荐食物列表
   * @router post /recommendMyWifeFood
   * @Request body recommendMyWifeFood
   * @response 200 JsonBody 返回结果。
   */
  async recommendMyWifeFood() {
    const { ctx } = this;
    const res = await ctx.service.myWife.recommendMyWifeFood({
      user: ctx?.request?.body?.user,
    });
    ctx.body = res; // 返回值显示
  }

  //   获取手动输入随机食物列表
  /**  （ 注释必写，swagger-doc是根据这段注释来生成接口详细信息的 ）。
   * @summary 获取手动输入随机食物列表
   * @description 获取手动输入随机食物列表
   * @router post /getRandomFoodList
   * @Request body getRandomFoodList
   * @response 200 JsonBody 返回结果。
   */
  async getRandomFoodList() {
    const { ctx } = this;
    ctx.body = await ctx.service.myWife.getRandomFoodList({
      user: ctx?.request?.body?.user,
    });
  }
  //   手动修改随机食物列表
  /**  （ 注释必写，swagger-doc是根据这段注释来生成接口详细信息的 ）。
   * @summary 手动修改随机食物列表
   * @description 手动修改随机食物列表
   * @router post /updateRandomFoodList
   * @Request body updateRandomFoodList
   * @response 200 JsonBody 返回结果。
   */
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

module.exports = MyWifeController;
