"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const egg_1 = require("egg");
/**
 * Test Service
 */
class User extends egg_1.Service {
    /**
     * 登录
     */
    async login(params) {
        const { ctx, app } = this;
        // console.log(app.mongoose.Types);
        try {
            const results = await ctx.model.User.find({
                username: params === null || params === void 0 ? void 0 : params.username,
                password: params === null || params === void 0 ? void 0 : params.password,
            });
            if ((results === null || results === void 0 ? void 0 : results.length) !== 0) {
                const token = app.jwt.sign({
                    username: params.username,
                }, app.config.jwt.secret);
                return ctx.helper.json({ token: token }, 0, 'success');
            }
            return ctx.helper.json('登录失败', 1, '登录失败，请检查您的信息');
        }
        catch (err) {
            return ctx.helper.json(JSON.stringify(err));
        }
    }
    /**
     * 注册
     */
    async registry(params) {
        const { ctx } = this;
        // console.log(app.mongoose.Types);
        try {
            const results = await ctx.model.User.find({
                username: params === null || params === void 0 ? void 0 : params.username,
            });
            console.log(results, 'results');
            if ((results === null || results === void 0 ? void 0 : results.length) !== 0) {
                return ctx.helper.json('用户名已注册', 1, 'error');
            }
            else {
                try {
                    await ctx.model.User.create({
                        username: params === null || params === void 0 ? void 0 : params.username,
                        password: params === null || params === void 0 ? void 0 : params.password,
                        email: params === null || params === void 0 ? void 0 : params.email,
                    });
                    return ctx.helper.json('注册成功', 0);
                }
                catch (err) {
                    return ctx.helper.json(JSON.stringify(err));
                }
            }
        }
        catch (err) {
            console.log(err);
            return ctx.helper.json(JSON.stringify(err));
        }
    }
}
exports.default = User;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVXNlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIlVzZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSw2QkFBOEI7QUFFOUI7O0dBRUc7QUFDSCxNQUFxQixJQUFLLFNBQVEsYUFBTztJQUN2Qzs7T0FFRztJQUNJLEtBQUssQ0FBQyxLQUFLLENBQUMsTUFBTTtRQUN2QixNQUFNLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLElBQUksQ0FBQztRQUMxQixtQ0FBbUM7UUFDbkMsSUFBSTtZQUNGLE1BQU0sT0FBTyxHQUFHLE1BQU0sR0FBRyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDO2dCQUN4QyxRQUFRLEVBQUUsTUFBTSxhQUFOLE1BQU0sdUJBQU4sTUFBTSxDQUFFLFFBQVE7Z0JBQzFCLFFBQVEsRUFBRSxNQUFNLGFBQU4sTUFBTSx1QkFBTixNQUFNLENBQUUsUUFBUTthQUkzQixDQUFDLENBQUM7WUFDSCxJQUFJLENBQUEsT0FBTyxhQUFQLE9BQU8sdUJBQVAsT0FBTyxDQUFFLE1BQU0sTUFBSyxDQUFDLEVBQUU7Z0JBQ3pCLE1BQU0sS0FBSyxHQUFHLEdBQUcsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUN4QjtvQkFDRSxRQUFRLEVBQUUsTUFBTSxDQUFDLFFBQVE7aUJBQzFCLEVBQ0QsR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUN0QixDQUFDO2dCQUNGLE9BQU8sR0FBRyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEVBQUUsQ0FBQyxFQUFFLFNBQVMsQ0FBQyxDQUFDO2FBQ3hEO1lBQ0QsT0FBTyxHQUFHLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLGNBQWMsQ0FBQyxDQUFDO1NBQ25EO1FBQUMsT0FBTyxHQUFHLEVBQUU7WUFDWixPQUFPLEdBQUcsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztTQUM3QztJQUNILENBQUM7SUFFRDs7T0FFRztJQUNJLEtBQUssQ0FBQyxRQUFRLENBQUMsTUFBTTtRQUMxQixNQUFNLEVBQUUsR0FBRyxFQUFFLEdBQUcsSUFBSSxDQUFDO1FBQ3JCLG1DQUFtQztRQUNuQyxJQUFJO1lBQ0YsTUFBTSxPQUFPLEdBQUcsTUFBTSxHQUFHLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUM7Z0JBQ3hDLFFBQVEsRUFBRSxNQUFNLGFBQU4sTUFBTSx1QkFBTixNQUFNLENBQUUsUUFBUTthQUkzQixDQUFDLENBQUM7WUFDSCxPQUFPLENBQUMsR0FBRyxDQUFDLE9BQU8sRUFBQyxTQUFTLENBQUMsQ0FBQTtZQUM5QixJQUFJLENBQUEsT0FBTyxhQUFQLE9BQU8sdUJBQVAsT0FBTyxDQUFFLE1BQU0sTUFBSyxDQUFDLEVBQUU7Z0JBQ3pCLE9BQU8sR0FBRyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUMsRUFBRSxPQUFPLENBQUMsQ0FBQzthQUM5QztpQkFBTTtnQkFDTCxJQUFJO29CQUNGLE1BQU0sR0FBRyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDO3dCQUMxQixRQUFRLEVBQUUsTUFBTSxhQUFOLE1BQU0sdUJBQU4sTUFBTSxDQUFFLFFBQVE7d0JBQzFCLFFBQVEsRUFBRSxNQUFNLGFBQU4sTUFBTSx1QkFBTixNQUFNLENBQUUsUUFBUTt3QkFDMUIsS0FBSyxFQUFFLE1BQU0sYUFBTixNQUFNLHVCQUFOLE1BQU0sQ0FBRSxLQUFLO3FCQUlyQixDQUFDLENBQUM7b0JBQ0gsT0FBTyxHQUFHLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDLENBQUM7aUJBQ25DO2dCQUFDLE9BQU8sR0FBRyxFQUFFO29CQUNaLE9BQU8sR0FBRyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO2lCQUM3QzthQUNGO1NBQ0Y7UUFBQyxPQUFPLEdBQUcsRUFBRTtZQUNaLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUE7WUFDaEIsT0FBTyxHQUFHLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7U0FDN0M7SUFDSCxDQUFDO0NBQ0Y7QUFsRUQsdUJBa0VDIn0=