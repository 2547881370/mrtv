'use strict';

module.exports = {
    addGbookRequset : {
        user_id : { type: 'number', required: true, description: '用户id' },
        gbook_name : { type: 'number', required: true, description: '用户name' },
        gbook_content : { type: 'number', required: true, description: '用户评论内容' },
    },
    gbookListRequest : {
        limit : { type: 'number', required: true, description: '' },
        page : { type: 'number', required: true, description: '' },
    }
}
