/* eslint valid-jsdoc: "off" */

'use strict';
const _config = require("../app/dbs/config");
/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1598697514015_1239';

  // 💡💡💡 配置添加中间件 💡💡💡
  config.middleware = [ 'auth' , 'xtoken'];

  config.xtoken = {
    // 配置所有的前缀为 /access 或 /morepath 的 url 不经过该中间件
    ignore: [ '/user/addUser', '/user/login' ]
  };

  //配置jwt的密钥
  config.jwt = _config.jwt;

  //配置post请求时,禁止csrf安全策略
  config.security = _config.security;

  //允许跨域请求
  config.cors = _config.cors;
  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };

  //配置mysql配置
  config.mysql = _config.mysql;

  //配置redis配置
  config.redis = _config.redis;

  //配置文件上传file读取
  config.multipart = _config.multipart;

  //配置文件上传路径
  config.uploadDir = _config.uploadDir;

  return {
    ...config,
    ...userConfig,
  };
};


