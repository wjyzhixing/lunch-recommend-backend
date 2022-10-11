// This file is created by egg-ts-helper@1.33.0
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportArticle from '../../../app/controller/article';
import ExportHome from '../../../app/controller/home';
import ExportMywife from '../../../app/controller/mywife';

declare module 'egg' {
  interface IController {
    article: ExportArticle;
    home: ExportHome;
    mywife: ExportMywife;
  }
}
