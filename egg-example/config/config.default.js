/* eslint valid-jsdoc: "off" */

'use strict';
const _config = require("../app/dbs/config");
const Op = require('sequelize').Op;

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};

  config.cluster = {
   listen : {
     path:'',
     port : 7001,
     hostname : '0.0.0.0'
   }
  }

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1598697514015_1239';

  // 💡💡💡 配置添加中间件 💡💡💡
  config.middleware = [ 'auth' , 'xtoken'];

  config.xtoken = {
    // 配置所有的前缀为 /access 或 /morepath 的 url 不经过该中间件
    ignore: [ '/user/addUser', '/user/login' , /^\/swagger/ , '/code/sendUserCode' ]
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

  //配置 sequelize 插件
  config.sequelize = {
    dialect: 'mysql',   // 数据库类型，支持 mysql,sqlite,mssql,pgsql,oracle
    host: "117.50.17.60",  // 数据库服务器地址
    port: 3306, // 数据库连接端口号
    database: "sql0_0_0_0", // 数据库名称
    username: "sql0_0_0_0",   // 数据库登录用户名
    password: "MmxAS7xZQy",   // 数据库登录密码
    define: {
      freezeTableName: true, // 阻止数据表名变为复数
      timestamps: false // 阻止model生成createAt和updateAt字段
    }
  };

  //配置 egg-swagger-doc
  config.swaggerdoc = {
    dirScanner: './app/controller',
    apiInfo: {
      title: 'mrtv RESTful APIs',
      description: 'swagger-ui for egg',
      version: '1.0.0',
    },
    schemes: ['http', 'https'],
    consumes: ['application/json'],
    produces: ['application/json'],
    securityDefinitions: {
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
    enableSecurity: false,
    // enableValidate: true,
    routerMap: false,
    enable: true,
      // 使用默认运算符别名
      operatorsAliases:{
          $eq: Op.eq,
          $ne: Op.ne,
          $gte: Op.gte,
          $gt: Op.gt,
          $lte: Op.lte,
          $lt: Op.lt,
          $not: Op.not,
          $in: Op.in,
          $notIn: Op.notIn,
          $is: Op.is,
          $like: Op.like,
          $notLike: Op.notLike,
          $iLike: Op.iLike,
          $notILike: Op.notILike,
          $regexp: Op.regexp,
          $notRegexp: Op.notRegexp,
          $iRegexp: Op.iRegexp,
          $notIRegexp: Op.notIRegexp,
          $between: Op.between,
          $notBetween: Op.notBetween,
          $overlap: Op.overlap,
          $contains: Op.contains,
          $contained: Op.contained,
          $adjacent: Op.adjacent,
          $strictLeft: Op.strictLeft,
          $strictRight: Op.strictRight,
          $noExtendRight: Op.noExtendRight,
          $noExtendLeft: Op.noExtendLeft,
          $and: Op.and,
          $or: Op.or,
          $any: Op.any,
          $all: Op.all,
          $values: Op.values,
          $col: Op.col
      },
  };

  return {
    ...config,
    ...userConfig,
  };
};


