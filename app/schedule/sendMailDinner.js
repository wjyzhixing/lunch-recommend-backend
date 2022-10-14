// app/schedule/SendMail.js
const Subscription = require('egg').Subscription;
class SendMail extends Subscription {
    // 通过 schedule 属性来设置定时任务的执行间隔等配置
    static get schedule() {
        return {
            // 执行时间间隔
            // interval: '50s',
            // 指定所有的worker（进程）都需要执行
            type: 'all',
            // 是否禁用
            disable: false,
            cron: '0 45 17 * * *', //每天的11点30分0秒更新
        }
    }
    // 定时执行的操作
    async subscribe() {
        const res = await this.ctx.curl('http://localhost:7001/testSendMail', {
            dataType: 'json',
        });
        this.ctx.app.cache = res.data;
    }
}
module.exports = SendMail;