'use strict';

module.exports = {
    getAdvertisementResponse : {
        id : { type: 'number', required: true, description: '广告id' },
        url_img : { type: 'string', required: true, description: '展示图片地址' },
        url : { type: 'string', required: true, description: '跳转广告地址' },
        status : { type: 'string', required: true, description: '广告是否显示 0不显示 1显示' },
        jump : { type: 'string', required: true, description: '点击广告图片是否跳转广告地址 0不跳转 1跳转' },
        title : { type: 'string', required: true, description: '广告位名称' },
    }
}
