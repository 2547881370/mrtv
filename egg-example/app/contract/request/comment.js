'use strict';

module.exports = {
    addCommentRequest : {
        comment_mid : { type: 'string', required: true, description: '所属分类模块' },
        comment_rid : { type: 'string', required: true, description: '视频id' },
        user_id : { type: 'string', required: true, description: '用户id' },
        comment_name : { type: 'string', required: true, description: '用户姓名' },
        comment_content : { type: 'string', required: true, description: '用户评论内容' },
    },
    removeCommentRequest : {
        comment_id : { type: 'string', required: true ,  description: '编号'},
    },
    upCommentRequest : {
        comment_id : { type: 'string', required: true ,  description: '编号'},
        comment_up_user_name : {type : "string" , required : true , description  :"点赞人名称集合"},
    },
    downCommentRequest : {
        comment_id : { type: 'string', required: true ,  description: '编号'},
        comment_down_user_name : {type : "string" , required : true , description  :"点踩人名称集合"},
    },
    reportCommentRequest : {
        comment_id : { type: 'string', required: true ,  description: '编号'},
        comment_report_user_name : {type : "string" , required : true , description  :"举报人名称集合"},
    },
    videoCommentListRequest : {
        comment_rid : {type : "string" , required : true , description : "关联视频id"}
    }
}
