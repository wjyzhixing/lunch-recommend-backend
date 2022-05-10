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
};
