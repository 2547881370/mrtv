'use strict';

module.exports = {
    getNoticeResponse : {
        id: {type: 'number', required: true, description: ''},
        level: {type: 'number', required: true, description: '级别 1:最高级别,可弹框显示可列表中展示 2:列表中显中显示'},
        status: {type: 'number', required: true, description: '状态  1:显示 2:不显示'},
        title: {type: 'number', required: true, description: ''},
        content: {type: 'number', required: true, description: ''},
        web_view_url: {type: 'number', required: true, description: 'webviewurl,有显示webview'},
    }
}
