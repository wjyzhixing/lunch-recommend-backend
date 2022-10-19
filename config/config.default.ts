import { EggAppConfig, EggAppInfo, PowerPartial } from 'egg';

export default (appInfo: EggAppInfo) => {
  const config = {} as PowerPartial<EggAppConfig>;

  config.security = {
    csrf: {
      enable: false,
    },
    domainWhiteList: [ '*' ]
  };

  config.jwt = {
    secret: '123456',
  };

  config.static = {
    prefix: '/',
    dir: process.cwd() + '/app/public',
  };

  config.mongoose = {
    client: {
      url: 'mongodb://127.0.0.1:27017/egg_article', // 你的数据库地址，egg_article是你数据库得名字
      options: {
        useNewUrlParser: true,
        useUnifiedTopology:true
      },
    },
  };

  config.cors = {
    origin: 'http://localhost:8000',
    credentials: true,
    allowMethods: 'GET,POST'
  };

  // override config from framework / plugin
  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1647410138077_6036';

  // add your egg config in here
  config.middleware = [];

  config.rundir = process.cwd() + '/run';

  // add your special config in here
  const bizConfig = {
    sourceUrl: `https://github.com/eggjs/examples/tree/master/${appInfo.name}`,
  };

  // the return config will combines to EggAppConfig
  return {
    ...config,
    ...bizConfig,
  };
};
