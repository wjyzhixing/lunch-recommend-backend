'use strict';

const Controller = require('egg').Controller;
const fs = require('fs');
const path = require('path');

class UserController extends Controller {
  // 用户登录
  async login() {
    const { ctx } = this;
    const params = {
        username: ctx.request.body?.username || '',
        password: ctx.request.body?.password || 0,
    };
    ctx.body = await ctx.service.user.login(params);
  }

  // 用户注册
  async registry() {
    const { ctx } = this;
    const params = {
        username: ctx.request.body?.username || '',
        password: ctx.request.body?.password || '',
    };
    ctx.body = await ctx.service.user.registry(params);
  }

}

module.exports = UserController;
