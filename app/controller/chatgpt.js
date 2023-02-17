'use strict';

const Controller = require('egg').Controller;
const fs = require('fs');
const path = require('path');
/**
 * @controller Chat gpt调用
 */
class ChatController extends Controller {
  // 用户登录
  /**  （ 注释必写，swagger-doc是根据这段注释来生成接口详细信息的 ）。
   * @summary 用户登录。
   * @description 用户登录。
   * @router post /login
   * @Request body login
   * @response 200 JsonBody 返回结果。（ 对应 contract 里面的验证属性，下面会提到 。）
   */
  async chat() {
    const { ctx } = this;
    const params = {
      text: ctx.request.body?.text || '',
    };
    ctx.body = await ctx.service.chatgpt.chat(params);
  }

}

module.exports = ChatController;
