'use strict';

module.exports = {
  getUserSingInAgeResponse: {
    user_name: { type: 'boolean', required: true ,  description: '用户昵称'},
    date_month: { type: 'string' , required: true ,description: '系统时间' },
    mask: { type: 'string' , required: true ,description: '用户签到时间' },
  },
};
