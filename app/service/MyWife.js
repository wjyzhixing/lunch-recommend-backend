'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
const egg_1 = require('egg');
const method = require('../utils/index');
const { computedValue, rand } = method;

// const computedValue = (time, love) => {
//   return Math.pow(2, love) / (1 + time);
// };

// const rand = (min, max) => {
//   return Math.floor(Math.random() * (max - min)) + min;
// };

/**
 * Test Service
 */
class Test extends egg_1.Service {
  /**
   * 获取类型
   */
  async getMyWifeFood(params) {
    const { ctx } = this;
    // console.log(app.mongoose.Types);
    // const token = ctx.request.header.authorization;
    try {
      const results = await ctx.model.Food.find({
        user: params === null || params === void 0 ? void 0 : params.user,
        food: params?.food || {$ne:null},
        love: params?.love || {$ne:null},
        times: params?.times || {$ne:null},
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
        food: values === null || values === void 0 ? void 0 : values.food,
      });
      if (
        (findResults === null || findResults === void 0
          ? void 0
          : findResults.length) === 0
      ) {
        const results = await ctx.model.Food.create({
          food: values === null || values === void 0 ? void 0 : values.food,
          times:
            Number(
              values === null || values === void 0 ? void 0 : values.times,
            ) || 0,
          love:
            Number(
              values === null || values === void 0 ? void 0 : values.love,
            ) || 5,
          user: String(
            values === null || values === void 0 ? void 0 : values.user,
          ),
          // Article为modal/article.js里面命名的名字
          // id: 2,
          // _id: app.mongoose.Types.ObjectId('6231b28691e2bcb857babb56'),
        });
        console.log(results, '111111');
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
          _id: app.mongoose.Types.ObjectId(
            values === null || values === void 0 ? void 0 : values.id,
          ),
        },
        {
          food: values === null || values === void 0 ? void 0 : values.food,
          times: values === null || values === void 0 ? void 0 : values.times,
          love: values === null || values === void 0 ? void 0 : values.love,
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
        user: params === null || params === void 0 ? void 0 : params.user,
      });
      const res =
        results === null || results === void 0
          ? void 0
          : results
              .map((item) => {
                return {
                  food: item === null || item === void 0 ? void 0 : item.food,
                  value: computedValue(
                    item === null || item === void 0 ? void 0 : item.times,
                    item === null || item === void 0 ? void 0 : item.love,
                  ),
                };
              })
              .sort((a, b) => b.value - a.value);
      const resTrue =
        res === null || res === void 0
          ? void 0
          : res.filter((item) => {
              var _a;
              return (
                item.value ===
                ((_a = res[0]) === null || _a === void 0 ? void 0 : _a.value)
              );
            });
      console.log(resTrue);
      return ctx.helper.json(
        resTrue.map((i) => i.food)[
          rand(
            0,
            resTrue === null || resTrue === void 0 ? void 0 : resTrue.length,
          )
        ],
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
        user: params === null || params === void 0 ? void 0 : params.user,
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
        user: values === null || values === void 0 ? void 0 : values.user,
      });
      if (
        (resValue === null || resValue === void 0
          ? void 0
          : resValue.length) === 0
      ) {
        const results = await ctx.model.RandomType.create({
          type: 'food',
          user: values === null || values === void 0 ? void 0 : values.user,
          value: values === null || values === void 0 ? void 0 : values.food,
        });
        return ctx.helper.json(results);
      } else {
        const results = await ctx.model.RandomType.updateOne(
          {
            type: 'food',
            user: values === null || values === void 0 ? void 0 : values.user,
          },
          {
            value: values === null || values === void 0 ? void 0 : values.food,
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTXlXaWZlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiTXlXaWZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsNkJBQThCO0FBQzlCLG9DQUErQztBQUMvQzs7R0FFRztBQUNILE1BQXFCLElBQUssU0FBUSxhQUFPO0lBQ3ZDOztPQUVHO0lBQ0ksS0FBSyxDQUFDLGFBQWEsQ0FBQyxNQUFNO1FBQy9CLE1BQU0sRUFBRSxHQUFHLEVBQUUsR0FBRyxJQUFJLENBQUM7UUFDckIsbUNBQW1DO1FBQ25DLGtEQUFrRDtRQUNsRCxJQUFJO1lBQ0YsTUFBTSxPQUFPLEdBQUcsTUFBTSxHQUFHLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUM7Z0JBQ3hDLElBQUksRUFBRSxNQUFNLGFBQU4sTUFBTSx1QkFBTixNQUFNLENBQUUsSUFBSTtnQkFDbEIsa0NBQWtDO2dCQUNsQyxTQUFTO2dCQUNULGdFQUFnRTthQUNqRSxDQUFDLENBQUM7WUFDSCxPQUFPLEdBQUcsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1NBQ2pDO1FBQUMsT0FBTyxHQUFHLEVBQUU7WUFDWixHQUFHLENBQUMsSUFBSSxHQUFHLEdBQUcsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztTQUNqRDtJQUNILENBQUM7SUFFRDs7T0FFRztJQUNJLEtBQUssQ0FBQyxhQUFhLENBQUMsTUFBTTtRQUMvQixNQUFNLEVBQUUsR0FBRyxFQUFFLEdBQUcsSUFBSSxDQUFDO1FBQ3JCLG1DQUFtQztRQUNuQyxJQUFJO1lBQ0YsTUFBTSxXQUFXLEdBQUcsTUFBTSxHQUFHLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUM7Z0JBQzVDLElBQUksRUFBRSxNQUFNLGFBQU4sTUFBTSx1QkFBTixNQUFNLENBQUUsSUFBSTthQUluQixDQUFDLENBQUM7WUFDSCxJQUFJLENBQUEs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
