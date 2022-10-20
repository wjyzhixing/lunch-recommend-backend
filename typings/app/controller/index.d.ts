// This file is created by egg-ts-helper@1.33.0
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportArticle = require('../../../app/controller/article');
import ExportHome = require('../../../app/controller/home');
import ExportMail = require('../../../app/controller/mail');
import ExportMywife = require('../../../app/controller/mywife');
import ExportUser = require('../../../app/controller/user');

declare module 'egg' {
  interface IController {
    article: ExportArticle;
    home: ExportHome;
    mail: ExportMail;
    mywife: ExportMywife;
    user: ExportUser;
  }
}
