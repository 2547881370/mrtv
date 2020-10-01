'use strict';

module.exports = {
    addFavRequest : {
        fav_ulog_rid : { type: 'number', required: true, description: '视频id' },
        fav_user_id : { type: 'number', required: true, description: '用户id' },
        fav_ulog_type : { type: 'number', required: true, description: '视频分类' },
    },
    removeFavRequest : {
        fav_ulog_id : { type: 'number', required: true, description: '收藏id' },
    },
    getFavListRequest : {
        fav_user_id : { type: 'number', required: true, description: '用户id' },
        limit : { type: 'number', required: true, description: '' },
        page : { type: 'number', required: true, description: '' },
    }
}
