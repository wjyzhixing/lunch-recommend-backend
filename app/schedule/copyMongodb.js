// app/schedule/CopyMongodb.js
const Subscription = require('egg').Subscription;
const shell = require('shelljs');
class CopyMongodb extends Subscription {
  // 通过 schedule 属性来设置定时任务的执行间隔等配置
  static get schedule() {
    return {
      // 执行时间间隔
      // interval: '50s',
      // 指定所有的worker（进程）都需要执行
      type: 'all',
      // 是否禁用
      disable: false,
      cron: '0 00 23 * * *', //每天的23点00分0秒更新
      // cron: '0 30 11 * * *', //每天的11点30分0秒更新
    };
  }
  // 定时执行的操作
  async subscribe() {
    await shell.exec('mongodump  --port 27017 -d egg_article -o data/ ', function (code, stdout, stderr) {
      console.log('Exit code:', code);
      console.log('Program output:', stdout);
      console.log('Program stderr:', stderr);
      if (code === 0) {
        console.log('成功');
        // do something
      }
    });
  }
}
module.exports = CopyMongodb;
