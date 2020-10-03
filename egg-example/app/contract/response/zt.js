'use strict';

module.exports = {
    getZtListResponse : {
        mac_zt_id : { type: 'string', required: true, description: '专题id' },
        mac_zt_img : { type: 'string', required: true, description: '专题图片' },
        mac_zt_content_img : { type: 'string', required: true, description: '专题详情' },
        mac_zt_video_id : { type: 'string', required: true, description: '专题视频id' },
    },
    getZtConfigResponse : {
        mac_zt_id : { type: 'string', required: true, description: '专题id' },
        mac_zt_img : { type: 'string', required: true, description: '专题图片' },
        mac_zt_content_img : { type: 'string', required: true, description: '专题详情' },
        mac_zt_video_id : { type: 'string', required: true, description: '专题视频id' },
        list : { type: 'string', required: true, description: '视频列表' },
    }
}
