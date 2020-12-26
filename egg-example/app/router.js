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
  router.post('/user/getUserInfo',  controller.user.getUserInfo);

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

  //goldCoin
  router.post('/goldCoin/getUserGoldCoin',controller.goldCoin.getUserGoldCoin);
  router.post('/goldCoin/addGoldCoinUser',controller.goldCoin.addGoldCoinUserModel);
  router.post('/goldCoin/removeGoldCoinUser',controller.goldCoin.removeGoldCoinUserModel);
  router.post('/goldCoin/setGoldCoinUser',controller.goldCoin.setGoldCoinUserModel);

  //code
  router.post('/code/addCodeUser',controller.code.addCodeUser);
  router.post('/code/sendUserCode',controller.code.sendUserCode);
  router.post('/code/sendUserCodeAge',controller.code.sendUserCodeAge);

  //video
  router.post('/video/getVideoTypeList',controller.video.getVideoTypeList);
  router.post('/video/getVideoList',controller.video.getVideoList);
  router.post('/video/getVideoInfo',controller.video.getVideoInfo);
  router.post('/video/getVideoLog',controller.video.getVideoLog);
  router.post('/video/getVideoLogList',controller.video.getVideoLogList);

  //comment
  router.post('/comment/addComment',controller.comment.addComment);
  router.post('/comment/removeComment',controller.comment.removeComment);
  router.post('/comment/upComment',controller.comment.upComment);
  router.post('/comment/downComment',controller.comment.downComment);
  router.post('/comment/reportComment',controller.comment.reportComment);
  router.post('/comment/videoCommentList',controller.comment.videoCommentList);

  //advertisement
  router.post('/advertisement/getAdvertisementRequest',controller.advertisement.getAdvertisement);

  //gbook
  router.post('/gbook/addGbook',controller.gbook.addGbook);
  router.post('/gbook/gbookList',controller.gbook.gbookList);

  //fav
  router.post('/fav/addFav',controller.fav.addFav);
  router.post('/fav/removeFav',controller.fav.removeFav);
  router.post('/fav/getFavList',controller.fav.getFavList);

  //notice
  router.post('/notice/getNotice',controller.notice.getNotice);

  //fl
  router.post('/fl/getFlList',controller.fl.getFlList);
  router.post('/zt/getZtList',controller.zt.getZtList);
  router.post('/zt/getZtInfo',controller.zt.getZtInfo);

};
