/*
 * @Description: 文件描述：
 * @Autor: hwf
 * @Date: 2021-04-22 11:36:59
 * @LastEditors: Seven
 * @LastEditTime: 2021-04-22 14:47:31
 */
 
// 接口先去header判断是否存在token，存在就验证，不存在就返回信息。
module.exports = (options, app) => {
    return async function jwtErr(ctx, next) {
        const token = ctx.request.header.token;
        if (token) {
            try {
                ctx.app.jwt.verify(token, options.secret); // 验证token 
                await next();
            } catch (error) {
                ctx.status = 401;
                ctx.body = {
                    massage: 'token已过期，请重新登录',
                    code: -1,
                }
                return;
            }
        } else {
            ctx.status = 401;
            ctx.body = {
                message: 'token不存在',
            };
            return;
        }
    }
}