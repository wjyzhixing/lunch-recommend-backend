'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
const egg = require('egg');
const { Configuration, OpenAIApi } = require('openai');
const configuration = new Configuration({
  apiKey: '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',
});
const openai = new OpenAIApi(configuration);

/**
 * Test Service
 */
class Chatgpt extends egg.Service {
  /**
   * chatgpt
   */
  async chat(params) {
    const { ctx, app } = this;
    try {
      const res = await openai.createCompletion({
        model: 'text-davinci-003',
        prompt: `Q:${params?.text}\nA:`,
        temperature: 0.9,
        max_tokens: 2000,
        top_p: 1,
        frequency_penalty: 0.0,
        presence_penalty: 0.0,
        stop: ['\n'],
      })
        console.log('res',res?.data)
        return ctx.helper.json(
          { msg: res?.data?.choices[0]?.text},
          0,
          'success',
        );
      // return ctx.helper.json('查询失败', 1, '查询失败');
    } catch (err) {
      console.log(1)
      return ctx.helper.json(JSON.stringify(err));
    }
  }
}
exports.default = Chatgpt;
