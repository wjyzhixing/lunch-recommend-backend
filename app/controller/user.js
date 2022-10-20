'use strict';

const Controller = require('egg').Controller;
const fs = require('fs');
const path = require('path');
/**
* @controller User 注册登录接口
*/
class UserController extends Controller {
  // 用户登录
  /**  （ 注释必写，swagger-doc是根据这段注释来生成接口详细信息的 ）。
   * @summary 用户登录。
   * @description 用户登录。
   * @router post /login 
   * @Request body login
   * @response 200 JsonBody 返回结果。（ 对应 contract 里面的验证属性，下面会提到 。）
   */
  async login() {
    const { ctx } = this;
    const params = {
        username: ctx.request.body?.username || '',
        password: ctx.request.body?.password || 0,
    };
    ctx.body = await ctx.service.user.login(params);
  }

  // 用户注册
    /**  （ 注释必写，swagger-doc是根据这段注释来生成接口详细信息的 ）。
   * @summary 用户注册。
   * @description 用户注册。
   * @router post /registry 
   * @Request body registry
   * @response 200 JsonBody 返回结果。（ 对应 contract 里面的验证属性，下面会提到 。）
   */
  async registry() {
    const { ctx } = this;
    const params = {
        username: ctx.request.body?.username || '',
        password: ctx.request.body?.password || '',
        email: ctx.request.body?.email || '',
    };
    ctx.body = await ctx.service.user.registry(params);
  }

}

module.exports = UserController;
