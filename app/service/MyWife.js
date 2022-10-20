'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
const egg = require('egg');
const method = require('../utils/index');
const { computedValue, rand, judgeTime } = method;

// const computedValue = (time, love) => {
//   return Math.pow(2, love) / (1 + time);
// };

// const rand = (min, max) => {
//   return Math.floor(Math.random() * (max - min)) + min;
// };

/**
 * Test Service
 */
class Test extends egg.Service {
  /**
   * 获取类型
   */
  async getMyWifeFood(params) {
    const { ctx } = this;
    // console.log(app.mongoose.Types);
    // const token = ctx.request.header.authorization;
    try {
      const results = await ctx.model.Food.find({
        user: params?.user,
        food: params?.food || { $ne: null },
        love: params?.love || { $ne: null },
        times: params?.times || { $ne: null },
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
   * 增加单个食物
   */
  async addMyWifeFood(values) {
    const { ctx } = this;
    // console.log(app.mongoose.Types);
    try {
      const findResults = await ctx.model.Food.find({
        food: values?.food,
      });
      if (findResults?.length === 0) {
        const results = await ctx.model.Food.create({
          food: values?.food,
          times: Number(values?.times) || 0,
          love: Number(values?.love) || 5,
          user: String(values?.user),
          whichTime: String(values?.whichTime),
          // Article为modal/article.js里面命名的名字
          // id: 2,
          // _id: app.mongoose.Types.ObjectId('6231b28691e2bcb857babb56'),
        });
        return ctx.helper.json(results);
      }
      return ctx.helper.json([], 1, '这个食物门店已存在');
    } catch (err) {
      return ctx.helper.json(JSON.stringify(err));
    }
  }
  /**
   * 删除单个食物
   */
  async deleteMyWifeFood(values) {
    const { ctx, app } = this;
    try {
      const results = await ctx.model.Food.deleteOne({
        _id: app.mongoose.Types.ObjectId(values),
      });
      console.log(results, 'deleteMyWifeFood');
      return ctx.helper.json(results);
    } catch (err) {
      ctx.body = ctx.helper.json(JSON.stringify(err));
    }
  }
  /**
   * 修改单个食物
   */
  async updateMyWifeFood(values) {
    const { ctx, app } = this;
    try {
      const results = await ctx.model.Food.updateOne(
        {
          _id: app.mongoose.Types.ObjectId(values?.id),
        },
        {
          food: values?.food,
          times: values?.times,
          love: values?.love,
          whichTime: values?.whichTime,
        },
      );
      return ctx.helper.json(results);
    } catch (err) {
      ctx.body = ctx.helper.json(JSON.stringify(err));
    }
  }
  /**
   * 推荐单个食物
   */
  async recommendMyWifeFood(params) {
    const { ctx } = this;
    try {
      const results = await ctx.model.Food.find({
        user: params?.user,
        whichTime: { $in: judgeTime() },
      });
      console.log(results, 'res');
      const res = results
        ?.map((item) => {
          return {
            food: item?.food,
            value: computedValue(item?.times, item?.love),
          };
        })
        .sort((a, b) => b.value - a.value);
      const resTrue = res?.filter((item) => item.value === res[0]?.value);
      console.log(resTrue);
      return ctx.helper.json(
        resTrue.map((i) => i.food)[rand(0, resTrue?.length)],
      );
    } catch (err) {
      ctx.body = ctx.helper.json(JSON.stringify(err));
    }
  }
  /**
   * 获取随机食物
   */
  async getRandomFoodList(params) {
    const { ctx } = this;
    // console.log(app.mongoose.Types);
    try {
      const results = await ctx.model.RandomType.find({
        type: 'food',
        user: params?.user,
      });
      return ctx.helper.json(results[0] || { value: '' });
    } catch (err) {
      ctx.body = ctx.helper.json(JSON.stringify(err));
    }
  }
  /**
   * 修改随机食物
   */
  async updateRandomFoodList(values) {
    const { ctx } = this;
    try {
      const resValue = await ctx.model.RandomType.find({
        type: 'food',
        user: values?.user,
      });
      if (resValue?.length === 0) {
        const results = await ctx.model.RandomType.create({
          type: 'food',
          user: values?.user,
          value: values?.food,
        });
        return ctx.helper.json(results);
      } else {
        const results = await ctx.model.RandomType.updateOne(
          {
            type: 'food',
            user: values?.user,
          },
          {
            value: values?.food,
          },
        );
        return ctx.helper.json(results);
      }
    } catch (err) {
      ctx.body = ctx.helper.json(JSON.stringify(err));
    }
  }
}
exports.default = Test;
