// import { EggPlugin } from 'egg';

const plugin = {
  // static: true,
  // nunjucks: {
  //   enable: true,
  //   package: 'egg-view-nunjucks',
  // },
  mongoose: {
    enable: true,
    package: 'egg-mongoose',
  },

  cors: {
    enable: true,
    package: 'egg-cors',
  },

  jwt: {
    enable: true,
    package: 'egg-jwt',
  },
};

export default plugin;
