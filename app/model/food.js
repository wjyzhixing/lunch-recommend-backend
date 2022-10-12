'use strict';

module.exports = (app) => {
  const mongoose = app.mongoose;
  const Schema = mongoose.Schema;
  // 下面得操作是连接数据库
  const FoodSchema = new Schema(
    {
      // 修改和新增用到，规定字段得类型和其他条件等
      food: {
        type: String,
        required: true,
      },
      times: {
        type: Number,
        required: true,
      },
      love: {
        type: Number,
        required: true,
      },
      user: {
        type: String,
        required: true,
      }
    },
    { versionKey: false },
  );

  return mongoose.model('Food', FoodSchema, 'food'); // 我的理解：Food是指定查找的入口，随便取；FoodSchema是参数；food是你数据集合表的名称
};
