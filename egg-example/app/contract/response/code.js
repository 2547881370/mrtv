'use strict';

module.exports = {
    codeResponse : {
        code_id : { type: 'integer', required: true, description: '用户推广码' },
        user_name : { type : 'integer' , required: true , description: '用户昵称'},
        id : { type : 'integer' , required: true },
    },
    sendUserCodeAgeResponse :  {
        user_name : { type : 'integer' , required: true , description: '用户昵称'},
        id : { type : 'integer' , required: true , description: 'ID'},
        date : { type : 'integer' , required: true , description: '注册时间'}
    }
}
