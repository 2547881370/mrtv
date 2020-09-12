'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller  } = app;
  router.redirect('/swagger', '/swagger-ui.html' , 302); //重定向到swagger-ui.html
  router.get('/', controller.home.index);

  //user
  router.post('/user/addUser', controller.user.addUser);
  router.post('/user/login',  controller.user.login);
  router.post('/user/setuserInfo',  controller.user.setuserInfo);

  //upload
  router.post('/upload',controller.upload.saveAvatar);

  //singin
  router.post('/singin/addSingin',controller.singIn.addSingin);
  router.post('/singin/getUserSingInAge',controller.singIn.getUserSingInAge);

  //level
  router.post('/level/getUserLevelList',controller.level.getUserLevelList);
  router.post('/level/setUserLevel',controller.level.setUserLevel);
  router.post('/level/initUserLevel',controller.level.initUserLevel);

  //task
  router.post('/task/getTaskList',controller.task.getTaskList);
  router.post('/task/getUserTaskLisk',controller.task.getUserTaskLisk);
  router.post('/task/setTaskUserController',controller.task.setTaskUserController);
  router.post('/goldCoin/getUserGoldCoin',controller.goldCoin.getUserGoldCoin);
  router.post('/goldCoin/addGoldCoinUser',controller.goldCoin.addGoldCoinUserModel);
  router.post('/goldCoin/removeGoldCoinUser',controller.goldCoin.removeGoldCoinUserModel);
  router.post('/goldCoin/setGoldCoinUser',controller.goldCoin.setGoldCoinUserModel);
  router.post('/code/addCodeUser',controller.code.addCodeUser);
  router.post('/code/sendUserCode',controller.code.sendUserCode);
  router.post('/code/sendUserCodeAge',controller.code.sendUserCodeAge);

};
