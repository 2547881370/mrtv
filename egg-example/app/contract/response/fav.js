'use strict';

module.exports = {
    favListResponse : {
        fav_ulog_id : { type: 'number', required: true, description: '收藏id' },
        fav_user_id : { type: 'number', required: true, description: '用户id' },
        fav_ulog_mid : { type: 'number', required: true, description: '' },
        fav_ulog_type : { type: 'number', required: true, description: '视频分类' },
        fav_ulog_rid : { type: 'number', required: true, description: '视频id' },
        fav_ulog_sid : { type: 'number', required: true, description: '' },
        fav_ulog_nid : { type: 'number', required: true, description: '' },
        fav_ulog_points : { type: 'number', required: true, description: '' },
        fav_ulog_time : { type: 'number', required: true, description: '视频收藏时间' },
    }
}
