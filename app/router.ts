import { Application } from 'egg';

export default (app: Application) => {
  const { controller, router } = app;

  router.get('/getExample', controller.home.getExample);
  router.post('/postExample', controller.home.postExample);
  router.put('/putExample', controller.home.putExample);
  router.head('/headExample', controller.home.headExample);
  router.delete('/deleteExample', controller.home.deleteExample);

  router.get('/getProjectById', controller.article.index);
  router.post('/addProject', controller.article.addProject);
  router.post('/deleteProject', controller.article.deleteProject);
  router.post('/updateProject', controller.article.updateProject);

  // 根据已有经验获取食物
  router.get('/getMyWifeFood', controller.mywife.getMyWifeFood);
  // 增加食物
  router.post('/addMyWifeFood', controller.mywife.addMyWifeFood);
  // 删除食物
  router.post('/deleteMyWifeFood', controller.mywife.deleteMyWifeFood);
  // 修改食物
  router.post('/updateMyWifeFood', controller.mywife.updateMyWifeFood);
  // 推荐食物接口
  router.post('/recommendMyWifeFood', controller.mywife.recommendMyWifeFood);
  // 随机食物列表接口
  router.get('/getRandomFoodList', controller.mywife.getRandomFoodList);
  // 修改随机食物列表接口
  router.post('/updateRandomFoodList', controller.mywife.updateRandomFoodList);
};
