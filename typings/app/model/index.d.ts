// This file is created by egg-ts-helper@1.33.0
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportArticle = require('../../../app/model/article');
import ExportFood = require('../../../app/model/food');
import ExportRandomType = require('../../../app/model/randomType');

declare module 'egg' {
  interface IModel {
    Article: ReturnType<typeof ExportArticle>;
    Food: ReturnType<typeof ExportFood>;
    RandomType: ReturnType<typeof ExportRandomType>;
  }
}
