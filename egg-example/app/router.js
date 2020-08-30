'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller  } = app;
  router.get('/', controller.home.index);
  router.post('/user/addUser', controller.user.addUser);
  router.post('/user/login',  controller.user.login);
  router.post('/user/setuserInfo',  controller.user.setuserInfo);
  router.post('/upload',controller.upload.saveAvatar);
};
