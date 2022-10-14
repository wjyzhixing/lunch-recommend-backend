// app/controller/test.js
'use strict';

const Controller = require('egg').Controller;

class TestController extends Controller {
  async testSendMail() {
    let { ctx, app } = this;
    console.log(123)
    ctx.body= await this.service.mail.sendMail();
  }
}

module.exports = TestController;
