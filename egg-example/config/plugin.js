'use strict';

/** @type Egg.EggPlugin */
// module.exports = {

// };


module.exports = {
  mysql:  {
    enable: true,
    package: 'egg-mysql',
  },
  jwt: {
    enable: true,
    package: 'egg-jwt',
  },
  cors: {
    enable: true,
    package: 'egg-cors',
  },
  redis : {
    enable: true,
    package: 'egg-redis',
  },
  sequelize : {
    enable: true, // 是否启用。
    package: 'egg-sequelize', // 指定包名称。
  },
  swaggerdoc : {
    enable: true,   // 是否启用。
    package: 'egg-swagger-doc', // 指定包名称。
  },
};

