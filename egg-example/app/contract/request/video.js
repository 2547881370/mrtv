'use strict';

module.exports = {
    videoListRequest : {
        t : { type: 'string', required: true, description: '类别id' },
        wd : { type: 'string', required: true, description: '关键词' },
        startDate : { type: 'string', required: true, description: '开始时间 YYYY-mm-dd HH:MM:SS' },
        endDate : { type: 'string', required: true, description: '结束时间 YYYY-mm-dd HH:MM:SS' },
        limit : { type: 'string', required: true, description: '每页多少条数据' },
        page : { type: 'string', required: true, description: '当前页' },
    },
    getVideoInfoRequest : {
        id: { type: 'string', required: true, description: '当前视频id' },
    },
    getVideoLogRequest : {
        user_id: { type: 'string', required: true, description: '用户id' },
        ulog_mid: { type: 'string', required: true, description: '所属模块 1视频' },
        ulog_type: { type: 'string', required: true, description: '观看类型 1浏览 4点播' },
        ulog_points: { type: 'string', required: false, description: '消耗积分' },
        ulog_rid: { type: 'string', required: true, description: '视频id' },
        ulog_sid: { type: 'string', required: true, description: '播放器id' },
        ulog_nid: { type: 'string', required: true, description: '播放集数' },
        ulog_time: { type: 'string', required: true, description: '日志时间' },
        ulog_date: { type: 'string', required: false, description: '播放进度' }
    },
    getVideoRankingRequest : {
        type_id: { type: 'string', required: true, description: '分类id 分类id枚举为主' },
        time: { type: 'string', required: true, description: '几天以内的排行' },
        limit : { type: 'string', required: true, description: '每页多少条数据' },
        page : { type: 'string', required: true, description: '当前页' },
    },
    getVideoRecommendRequest : {
        type_id: { type: 'string', required: true, description: '分类id 分类id枚举为主' },
        vod_level: { type: 'string', required: true, description: '推荐等级 默认为8的为推荐级别的视频' },
        limit : { type: 'string', required: true, description: '每页多少条数据' },
        page : { type: 'string', required: true, description: '当前页' },
    }
}
