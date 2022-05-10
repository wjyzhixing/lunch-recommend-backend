import { Service } from 'egg';

/**
 * Test Service
 */
export default class Test extends Service {

  /**
   * sayHi to you
   * @param name - your name
   */
  public async getExample(name: string) {
    return `hi, ${name}`;
  }
  public async postExample(params: object) {
    const { ctx } = this;
    return ctx.helper.json(params);
  }
  public async putExample(params: object) {
    return params;
  }
  public async headExample(params: object) {
    return params;
  }
  public async deleteExample(params: object) {
    return params;
  }
}
