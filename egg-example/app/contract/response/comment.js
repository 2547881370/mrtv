'use strict';
module.exports = {
    addCommentResponse : {
        comment_id : { type: 'string', required: true ,  description: '编号'},
        comment_mid : {type : "string" , required: true , description: "所属分类模块"},
        comment_rid : {type : "string" , required : true , description : "关联视频id"},
        user_id : {type : "string" , required : true , description : "用户id"},
        comment_status : {type : "string" , required : true , description : "审核状态 0未审核 1审核通过"},
        comment_name : {type : "string" , required : true , description  :"用户姓名"},
        comment_ip : {type : "string" , required : true , description  :"用户ip 10进制"},
        comment_time : {type : "string" , required : true , description  :"用户评论时间 10进制"},
        comment_content : {type : "string" , required : true , description  :"用户评论内容"},
        comment_up : {type : "string" , required : true , description  :"获赞数"},
        comment_down : {type : "string" , required : true , description  :"获踩数"},
        comment_report : {type : "string" , required : true , description  :"获举报数"},
        comment_up_user_name : {type : "string" , required : true , description  :"点赞人名称集合"},
        comment_down_user_name : {type : "string" , required : true , description  :"点踩人名称集合"},
        comment_report_user_name : {type : "string" , required : true , description  :"举报人名称集合"},
    }
}
