'use strict';

module.exports = (app) => {
  const mongoose = app.mongoose;
  const Schema = mongoose.Schema;
  // 下面得操作是连接数据库
  const RandomTypeSchema = new Schema(
    {
      // 修改和新增用到，规定字段得类型和其他条件等
      type: {
        type: String,
        required: true,
      },
      value: {
        type: String,
        required: true,
      },
    },
    { versionKey: false },
  );
 
  return mongoose.model('RandomType', RandomTypeSchema, 'randomType'); // 我的理解：Food是指定查找的入口，随便取；FoodSchema是参数；food是你数据集合表的名称
};
