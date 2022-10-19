"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = (appInfo) => {
    const config = {};
    config.security = {
        csrf: {
            enable: false,
        },
        domainWhiteList: ['*']
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
    return Object.assign(Object.assign({}, config), bizConfig);
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlnLmRlZmF1bHQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJjb25maWcuZGVmYXVsdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUVBLGtCQUFlLENBQUMsT0FBbUIsRUFBRSxFQUFFO0lBQ3JDLE1BQU0sTUFBTSxHQUFHLEVBQWdDLENBQUM7SUFFaEQsTUFBTSxDQUFDLFFBQVEsR0FBRztRQUNoQixJQUFJLEVBQUU7WUFDSixNQUFNLEVBQUUsS0FBSztTQUNkO1FBQ0QsZUFBZSxFQUFFLENBQUUsR0FBRyxDQUFFO0tBQ3pCLENBQUM7SUFFRixNQUFNLENBQUMsR0FBRyxHQUFHO1FBQ1gsTUFBTSxFQUFFLFFBQVE7S0FDakIsQ0FBQztJQUVGLE1BQU0sQ0FBQyxNQUFNLEdBQUc7UUFDZCxNQUFNLEVBQUUsR0FBRztRQUNYLEdBQUcsRUFBRSxPQUFPLENBQUMsR0FBRyxFQUFFLEdBQUcsYUFBYTtLQUNuQyxDQUFDO0lBRUYsTUFBTSxDQUFDLFFBQVEsR0FBRztRQUNoQixNQUFNLEVBQUU7WUFDTixHQUFHLEVBQUUscUNBQXFDO1lBQzFDLE9BQU8sRUFBRTtnQkFDUCxVQUFVLEVBQUUsT0FBTztnQkFDbkIsZUFBZSxFQUFFLElBQUk7Z0JBQ3JCLGtCQUFrQixFQUFDLElBQUk7Z0JBQ3ZCLElBQUksRUFBRSxNQUFNO2dCQUNaLElBQUksRUFBRSxzQkFBc0I7YUFDN0I7U0FDRjtLQUNGLENBQUM7SUFFRixNQUFNLENBQUMsSUFBSSxHQUFHO1FBQ1osTUFBTSxFQUFFLHVCQUF1QjtRQUMvQixXQUFXLEVBQUUsSUFBSTtRQUNqQixZQUFZLEVBQUUsVUFBVTtLQUN6QixDQUFDO0lBRUYsMENBQTBDO0lBQzFDLHVFQUF1RTtJQUN2RSxNQUFNLENBQUMsSUFBSSxHQUFHLE9BQU8sQ0FBQyxJQUFJLEdBQUcscUJBQXFCLENBQUM7SUFFbkQsOEJBQThCO0lBQzlCLE1BQU0sQ0FBQyxVQUFVLEdBQUcsRUFBRSxDQUFDO0lBRXZCLE1BQU0sQ0FBQyxNQUFNLEdBQUcsT0FBTyxDQUFDLEdBQUcsRUFBRSxHQUFHLE1BQU0sQ0FBQztJQUV2QyxrQ0FBa0M7SUFDbEMsTUFBTSxTQUFTLEdBQUc7UUFDaEIsU0FBUyxFQUFFLGlEQUFpRCxPQUFPLENBQUMsSUFBSSxFQUFFO0tBQzNFLENBQUM7SUFFRixrREFBa0Q7SUFDbEQsdUNBQ0ssTUFBTSxHQUNOLFNBQVMsRUFDWjtBQUNKLENBQUMsQ0FBQyJ9