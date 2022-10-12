module.exports = (app) => {
  const { controller, router, middleware } = app;
  const jsonp = app.jsonp();
  console.log(middleware.jwtVerify,'middlewaremiddleware')
  const jwtVerify = middleware.jwtVerify(app.config.jwt)
  router.get('/getExample', controller.home.getExample);
  router.post('/postExample', controller.home.postExample);
  router.put('/putExample', controller.home.putExample);
  router.head('/headExample', controller.home.headExample);
  router.delete('/deleteExample', controller.home.deleteExample);

  router.get('/getProjectById', controller.article.index);
  router.post('/addProject', controller.article.addProject);
  router.post('/deleteProject', controller.article.deleteProject);
  router.post('/updateProject', controller.article.updateProject);

  // 注册
  router.post('/registry', jsonp, controller.user.registry);
  // 登录
  router.post('/login', jsonp, controller.user.login);

  // 根据已有经验获取食物
  router.post('/getMyWifeFood', jwtVerify, controller.mywife.getMyWifeFood);
  // 增加食物
  router.post('/addMyWifeFood', jwtVerify, controller.mywife.addMyWifeFood);
  // 删除食物
  router.post('/deleteMyWifeFood', jwtVerify, controller.mywife.deleteMyWifeFood);
  // 修改食物
  router.post('/updateMyWifeFood', jwtVerify, controller.mywife.updateMyWifeFood);
  // 推荐食物接口
  router.post('/recommendMyWifeFood', jwtVerify, controller.mywife.recommendMyWifeFood);
  // 随机食物列表接口
  router.post('/getRandomFoodList', jwtVerify, controller.mywife.getRandomFoodList);
  // 修改随机食物列表接口
  router.post('/updateRandomFoodList', jwtVerify, controller.mywife.updateRandomFoodList);
};
