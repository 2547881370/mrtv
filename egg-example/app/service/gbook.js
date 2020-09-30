'use strict';

const Service = require('egg').Service;

class GbookService extends Service {
    constructor(ctx) {
        super(ctx); // 调用父对象上的函数。
        this.databaseMacGbook = this.ctx.model['MacGbook']; // 获取 model 下的表（ model 相当于数据库的表 ）。
    }
    /**
     * 新增反馈
     */
    async _addGbook(data){
        let { ctx , app } = this;
        let result
        let { user_id , gbook_name , gbook_content} = data;
        let gbook_status = 1 , gbook_rid = 0 , gbook_reply_time = 0;
        let gbook_ip = ctx.helper.ipToNumber(ctx.request.ip)
        let gbook_time = ctx.helper.dateFormat("YYYY-mm-dd HH:MM:SS" , new Date())
        gbook_time = ctx.helper.unix(gbook_time);
        await this.databaseMacGbook.create({
            user_id , gbook_name , gbook_content,
            gbook_status , gbook_rid , gbook_reply_time,
            gbook_ip , gbook_time
        });
        result = {
            msg : "新增成功",
            code : "000000"
        };
        return result
    }

    /**
     * 获取反馈列表
     */
    async _gbookList(data){
        let { ctx , app } = this;
        let result , query , list;
        let { limit , page } = data;
        query = {
            limit: limit,
            offset: page * limit - limit,
        }
        list = await this.databaseMacGbook.findAll(query);
        result = {
            msg : "获取成功",
            code : "000000",
            data : list
        };
        return result;
    }
}

module.exports = GbookService;
