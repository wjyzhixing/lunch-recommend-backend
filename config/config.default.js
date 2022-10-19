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
    config.swaggerdoc = {
        dirScanner: './app/controller', // 配置自动扫描的控制器路径。
        // 接口文档的标题，描述或其它。
        apiInfo: {
            title: 'NAPI',  // 接口文档的标题。
            description: 'swagger-ui for NAPI document.',   // 接口文档描述。
            version: '1.0.0',   // 接口文档版本。
        },
        schemes: ['http', 'https'], // 配置支持的协议。
        consumes: ['application/json'], // 指定处理请求的提交内容类型（Content-Type），例如application/json, text/html。
        produces: ['application/json'], // 指定返回的内容类型，仅当request请求头中的(Accept)类型中包含该指定类型才返回。
        securityDefinitions: {  // 配置接口安全授权方式。
            // apikey: {
            //   type: 'apiKey',
            //   name: 'clientkey',
            //   in: 'header',
            // },
            // oauth2: {
            //   type: 'oauth2',
            //   tokenUrl: 'http://petstore.swagger.io/oauth/dialog',
            //   flow: 'password',
            //   scopes: {
            //     'write:access_token': 'write access_token',
            //     'read:access_token': 'read access_token',
            //   },
            // },
        },
        enableSecurity: false,  // 是否启用授权，默认 false（不启用）。
        // enableValidate: true,    // 是否启用参数校验，默认 true（启用）。
        routerMap: true,    // 是否启用自动生成路由，默认 true (启用)。
        enable: true,   // 默认 true (启用)。
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