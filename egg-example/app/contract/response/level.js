'use strict';

module.exports = {
  intergralResponse: {
    integral_age: { type: 'boolean', required: true ,  description: '积分'},
    time_day: { type: 'string' , required: true ,description: '天数' },
    time_name: { type: 'string' , required: true ,description: '天数翻译' },
    id: { type: 'string' , required: true },
  },
};
