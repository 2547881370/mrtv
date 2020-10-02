'use strict';

const Service = require('egg').Service;

class NoticeService extends Service{
    constructor(ctx) {
        super(ctx); // 调用父对象上的函数。
        this.databaseMacNotice = this.ctx.model['MacNotice']; // 获取 model 下的表（ model 相当于数据库的表 ）。
    }
    /**
     * 获取公告通知列表
     * @param data
     * @private
     */
   async _getNotice(data){
        let { ctx , app } = this;
        let result , query , pg;
        let { level , status , limit , page } = data;
        query = {
            limit: limit,
            offset: page * limit - limit,
            where : {
                level,
                status
            }
        }
        pg = await this.databaseMacNotice.findAll(query);
        result = {
            msg : "获取成功",
            code : "000000",
            data : pg
        }
        return result;
    }
}
