"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const egg_1 = require("egg");
/**
 * Test Service
 */
class Test extends egg_1.Service {
    /**
     * sayHi to you
     * @param name - your name
     */
    async getExample(name) {
        return `hi, ${name}`;
    }
    async postExample(params) {
        const { ctx } = this;
        return ctx.helper.json(params);
    }
    async putExample(params) {
        return params;
    }
    async headExample(params) {
        return params;
    }
    async deleteExample(params) {
        return params;
    }
}
exports.default = Test;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVGVzdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIlRlc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSw2QkFBOEI7QUFFOUI7O0dBRUc7QUFDSCxNQUFxQixJQUFLLFNBQVEsYUFBTztJQUV2Qzs7O09BR0c7SUFDSSxLQUFLLENBQUMsVUFBVSxDQUFDLElBQVk7UUFDbEMsT0FBTyxPQUFPLElBQUksRUFBRSxDQUFDO0lBQ3ZCLENBQUM7SUFDTSxLQUFLLENBQUMsV0FBVyxDQUFDLE1BQWM7UUFDckMsTUFBTSxFQUFFLEdBQUcsRUFBRSxHQUFHLElBQUksQ0FBQztRQUNyQixPQUFPLEdBQUcsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ2pDLENBQUM7SUFDTSxLQUFLLENBQUMsVUFBVSxDQUFDLE1BQWM7UUFDcEMsT0FBTyxNQUFNLENBQUM7SUFDaEIsQ0FBQztJQUNNLEtBQUssQ0FBQyxXQUFXLENBQUMsTUFBYztRQUNyQyxPQUFPLE1BQU0sQ0FBQztJQUNoQixDQUFDO0lBQ00sS0FBSyxDQUFDLGFBQWEsQ0FBQyxNQUFjO1FBQ3ZDLE9BQU8sTUFBTSxDQUFDO0lBQ2hCLENBQUM7Q0FDRjtBQXRCRCx1QkFzQkMifQ==