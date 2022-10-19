// app/controller/test.js
'use strict';

const Controller = require('egg').Controller;
/**
 * @controller 邮件操作 邮件相关接口，定时任务
 */
class TestController extends Controller {
    /**  
   * @summary 向所有注册用户发邮件
   * @description 向所有注册用户发邮件
   * @router get /testSendMail
   * @Request query 
   * @response 200 JsonBody 返回结果。
   */
  async testSendMail() {
    let { ctx, app } = this;
    console.log(123)
    ctx.body= await this.service.mail.sendMail();
  }
}

module.exports = TestController;
