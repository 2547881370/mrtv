'use strict';

module.exports = {
    getFlResponse : {
        mac_fl_id : { type: 'string', required: true, description: 'id' },
        mac_fl_img : { type: 'string', required: true, description: '缩略图' },
        mac_fl_url : { type: 'string', required: true, description: 'webView Url' },
        mac_fl_status : { type: 'string', required: true, description: '显示状态 1显示 0不显示' },
        mac_fl_title : { type: 'string', required: true, description: '标题' },
    }
}
