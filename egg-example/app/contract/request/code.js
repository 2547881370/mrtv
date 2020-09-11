'use strict';

module.exports = {
    codeRequest : {
        code_id : { type: 'integer', required: true, description: '用户推广码' }
    },
    sendUserCodeRequest : {
        code_id : { type: 'integer', required: true, description: '用户使用的推广码' },
        user_name : { type : 'integer' , required: true , description: '用户昵称'},
        user_pwd : { type : 'integer' , required: true , description: '用户密码'},
    }
}
