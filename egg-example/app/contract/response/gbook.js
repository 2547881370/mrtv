'use strict';

module.exports = {
    getGbookListResponse : {
        gbook_id : { type: 'number', required: true, description: '评论id' },
        user_id : { type: 'number', required: true, description: '用户id' },
        gbook_status : { type: 'number', required: true, description: '评论是否展示 0隐藏 1展示' },
        gbook_name : { type: 'number', required: true, description: '用户name' },
        gbook_ip : { type: 'number', required: true, description: '用户ip' },
        gbook_time : { type: 'number', required: true, description: '用户评论时间' },
        gbook_content : { type: 'number', required: true, description: '用户评论内容' },
    }
}
