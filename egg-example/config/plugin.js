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
  }
};

