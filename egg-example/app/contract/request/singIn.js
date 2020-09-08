'use strict';

module.exports = {
  addSinginRequest: {
    mask: { type: 'integer', required: true, description: '用户签到时间' },
  },
  getUserSingInAgeRequest: {
    startDate: { type: 'integer', required: true, description: '开始事件' },
    endDate: { type: 'integer', required: true, description: '结束时间' },
  }
}
