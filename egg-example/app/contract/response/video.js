'use strict';

module.exports = {
    videoTypeResponse : {
        type_id : { type: 'string', required: true, description: 'id' },
        type_name : { type: 'string', required: true, description: '分类名称' },
        type_en : { type: 'string', required: true, description: '分类翻译' },
        type_sort : { type: 'string', required: true, description: '代码同一类型的排序顺序' },
        type_mid : { type: 'string', required: true, description: '代表属于同一类型' },
        type_pid : { type: 'string', required: true, description: '父级别id' },
    },
    videoListResponse : {
        vod_id : { type: 'string', required: true, description: 'id' },
        type_id : { type: 'string', required: true, description: '分类id' },
        vod_name : { type: 'string', required: true, description: '视频名称' },
        vod_en : { type: 'string', required: true, description: '视频翻译' },
        vod_status : { type: 'string', required: true, description: '视频状态' },
        vod_letter : { type: 'string', required: true, description: '视频首字母大写' },
        vod_class : { type: 'string', required: true, description: '视频分类翻译' },
        vod_pic : { type: 'string', required: true, description: '视频缩略图' },
        vod_actor : { type: 'string', required: true, description: '视频演员表' },
        vod_director : { type: 'string', required: true, description: '视频导演' },
        vod_blurb : { type: 'string', required: true, description: '视频简介' },
        vod_remarks : { type: 'string', required: true, description: '视频播放音质' },
        vod_area : { type: 'string', required: true, description: '视频地区' },
        vod_lang : { type: 'string', required: true, description: '视频语言' },
        vod_year : { type: 'string', required: true, description: '视频年份' },
        vod_time : { type: 'string', required: true, description: '视频入库时间' },
        vod_content : { type: 'string', required: true, description: '视频内容简介' },
        vod_play_url : { type: 'string', required: true, description: '视频播放地址' },
        vod_down_from : { type: 'string', required: true, description: '视频播放器别名' },
    },
    getVideoLogListResponse : {
        vod_id : { type: 'string', required: true, description: 'id' },
        type_id : { type: 'string', required: true, description: '分类id' },
        vod_name : { type: 'string', required: true, description: '视频名称' },
        vod_en : { type: 'string', required: true, description: '视频翻译' },
        vod_status : { type: 'string', required: true, description: '视频状态' },
        vod_letter : { type: 'string', required: true, description: '视频首字母大写' },
        vod_class : { type: 'string', required: true, description: '视频分类翻译' },
        vod_pic : { type: 'string', required: true, description: '视频缩略图' },
        vod_actor : { type: 'string', required: true, description: '视频演员表' },
        vod_director : { type: 'string', required: true, description: '视频导演' },
        vod_blurb : { type: 'string', required: true, description: '视频简介' },
        vod_remarks : { type: 'string', required: true, description: '视频播放音质' },
        vod_area : { type: 'string', required: true, description: '视频地区' },
        vod_lang : { type: 'string', required: true, description: '视频语言' },
        vod_year : { type: 'string', required: true, description: '视频年份' },
        vod_time : { type: 'string', required: true, description: '视频入库时间' },
        vod_content : { type: 'string', required: true, description: '视频内容简介' },
        vod_play_url : { type: 'string', required: true, description: '视频播放地址' },
        vod_down_from : { type: 'string', required: true, description: '视频播放器别名' },
        user_id: { type: 'string', required: true, description: '用户id' },
        ulog_mid: { type: 'string', required: true, description: '所属模块 1视频' },
        ulog_type: { type: 'string', required: true, description: '观看类型 1浏览 4点播' },
        ulog_points: { type: 'string', required: false, description: '消耗积分' },
        ulog_rid: { type: 'string', required: true, description: '视频id' },
        ulog_sid: { type: 'string', required: true, description: '播放器id' },
        ulog_nid: { type: 'string', required: true, description: '播放集数' },
        ulog_time: { type: 'string', required: true, description: '日志时间' },
        ulog_date: { type: 'string', required: false, description: '播放进度' }
    }
}