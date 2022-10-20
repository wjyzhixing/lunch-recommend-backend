// This file is created by egg-ts-helper@1.33.0
// Do not modify this file!!!!!!!!!

import 'egg';
type AnyClass = new (...args: any[]) => any;
type AnyFunc<T = any> = (...args: any[]) => T;
type CanExportFunc = AnyFunc<Promise<any>> | AnyFunc<IterableIterator<any>>;
type AutoInstanceType<T, U = T extends CanExportFunc ? T : T extends AnyFunc ? ReturnType<T> : T> = U extends AnyClass ? InstanceType<U> : U;
import ExportArticle = require('../../../app/service/Article');
import ExportMail = require('../../../app/service/Mail');
import ExportMyWife = require('../../../app/service/MyWife');
import ExportTest = require('../../../app/service/Test');
import ExportUser = require('../../../app/service/User');

declare module 'egg' {
  interface IService {
    article: AutoInstanceType<typeof ExportArticle>;
    mail: AutoInstanceType<typeof ExportMail>;
    myWife: AutoInstanceType<typeof ExportMyWife>;
    test: AutoInstanceType<typeof ExportTest>;
    user: AutoInstanceType<typeof ExportUser>;
  }
}
