'use strict';
module.exports = {
  redis : {
    client: {
      port: 6379,          // Redis port
      host: '117.50.17.60',   // Redis host
      password: 'root',
      db: 0,
    },
  },
  mysql : {
    // 单数据库信息配置
    client: {
      // host
      host: '117.50.17.60',
      // 端口号
      port: '3306',
      // 用户名
      user: 'sql0_0_0_0',
      // 密码
      password: 'MmxAS7xZQy',
      // 数据库名
      database: 'sql0_0_0_0',
    },
    // 是否加载到 app 上，默认开启
    app: true,
    // 是否加载到 agent 上，默认关闭
    agent: false,
  },
  cors : {
    origin:'*',
    allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH'
  },
  security : {
    csrf: {
      enable: false,
      ignoreJSON: true
    },
  },
  jwt : {
    secret: "123456"//自定义 token 的加密条件字符串
  },
  multipart : {
    // mode: 'stream'
  },
  uploadDir : {
    url : "./app/public/images/"
  }
}
