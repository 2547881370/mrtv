'use strict';

module.exports = {
    getNoticeRequest : {
        level : { type: 'number', required: true, description: '级别 1:最高级别,可弹框显示可列表中展示 2:列表中显中显示' },
        status : { type: 'number', required: true, description: '状态  1:显示 2:不显示' },
        limit : { type: 'number', required: true, description: '' },
        page : { type: 'number', required: true, description: '' },    }
}
