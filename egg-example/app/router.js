'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller  } = app;
  router.redirect('/swagger', '/swagger-ui.html' , 302); //重定向到swagger-ui.html
  router.get('/', controller.home.index);
  router.post('/user/addUser', controller.user.addUser);
  router.post('/user/login',  controller.user.login);
  router.post('/user/setuserInfo',  controller.user.setuserInfo);
  router.post('/upload',controller.upload.saveAvatar);
  router.post('/singin/addSingin',controller.singIn.addSingin);
};
