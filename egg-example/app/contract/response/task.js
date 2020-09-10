'use strict';

module.exports = {
    taskResponse : {
        type : { type: 'string', required: true ,  description: '任务类型 1签到 2评分 3弹幕 4评论 5观影30分钟 6分享'},
        typeName : { type : "string" , required: true , description: "类型翻译"},
        id : { type : "string" , required : true , description : "id"},
        integral : { type : "string" , required : true , description : "所需积分"}
    },
    getTaskResponse : {
        type : { type: 'string', required: true ,  description: '任务类型 1签到 2评分 3弹幕 4评论 5观影30分钟 6分享'},
        typeName : { type : "string" , required: true , description: "类型翻译"},
        id : { type : "string" , required : true , description : "id"},
        integral : { type : "string" , required : true , description : "所需积分"},
        date : { type : "string" , required : true , description : "任务执行时间"},
        status : { type : "string" , required : true , description : "今天是否执行了任务 1执行 2未执行"},
    }
}
