'use strict';

module.exports = {
    getUserGoldCoin : {
        user_name : { type: 'integer', required: true, description: '用户昵称' },
        user_points : { type: 'integer', required: true, description: '剩余积分' },
    }
}
