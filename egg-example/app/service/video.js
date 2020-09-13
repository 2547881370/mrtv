'use strict';

const Service = require('egg').Service;

class VideoServer extends Service {
    constructor(ctx) {
        super(ctx); // 调用父对象上的函数。
        this.databaseMacType = this.ctx.model['MacType']; // 获取 model 下的表（ model 相当于数据库的表 ）。
        this.databaseMacVod = this.ctx.model['MacVod']; // 获取 model 下的表（ model 相当于数据库的表 ）。
        this.databaseMacUlog = this.ctx.model['MacUlog']; // 获取 model 下的表（ model 相当于数据库的表 ）。
        this.databaseMacUser = this.ctx.model['MacUser']; // 获取 model 下的表（ model 相当于数据库的表 ）。
    }

    /**
     * 获取视频分类列表。
     * @param {*} id
     */
    async _getVideoTypeList(id) {
        const result = await this.databaseMacType.findAll();
        return {
            msg: "获取成功",
            code: "000000",
            data: result
        };
    }

    /**
     * 获取视频列表
     */
    async _getVideoList(body) {
        let {ctx, app} = this;
        let {t, wd, startDate, endDate, limit, page} = body;
        let query, result;
        if (ctx.helper.flagBool(startDate) && ctx.helper.flagBool(endDate) && ctx.helper.flagBool(t) && ctx.helper.flagBool(wd)) {
            startDate = ctx.helper.unix(startDate);
            endDate = ctx.helper.unix(endDate);
            query = {
                limit: limit,
                offset: page * limit - limit,
                where: {vod_time: {$lte: startDate, $gte: endDate}, type_id: t, vod_name: {$like: `%${wd}%`}}
            };
        } else if (ctx.helper.flagBool(startDate) && ctx.helper.flagBool(endDate) && ctx.helper.flagBool(t)) {
            startDate = ctx.helper.unix(startDate);
            endDate = ctx.helper.unix(endDate);
            query = {
                limit: limit,
                offset: page * limit - limit,
                where: {vod_time: {$lte: startDate, $gte: endDate}, type_id: t}
            };
        } else if (ctx.helper.flagBool(t)) {
            query = {limit: limit, offset: page * limit - limit, where: {type_id: t}};
        }
        result = await this.databaseMacVod.findAll(query);
        return result
    }

    /**
     * 获取视频详情
     */
    async _getVideoInfo(body){
        let { ctx , app } = this;
        let { id } = body;
        let query, result;
        query = {
            where: {vod_id: id}
        };
        result = await this.databaseMacVod.findAll(query);
        return {
            msg : "获取成功",
            code : "000000",
            data : result
        }
    }

    /**
     * 存储播放记录日志
     */
    async _getVideoLog(body){
        let { ctx , app } = this;
        let { user_id , ulog_mid , ulog_type , ulog_points , ulog_rid , ulog_sid ,ulog_nid  , ulog_date} = body;
        let query, result , ulog_time;
        ulog_time = ctx.helper.dateFormat("YYYY-mm-dd HH:MM:SS" , new Date());
        ulog_time = ctx.helper.unix(ulog_time);
        query = { where: {user_id , ulog_rid , ulog_sid , ulog_nid} }
        result = await this.databaseMacUlog.findOne(query);
        if( ctx.helper.flagBool(result)){
            if( result.ulog_date == ulog_date){
                result = {
                    msg : "已存在相同类型的记录,且时间一致",
                    code : "000000"
                }
            }else{
                result = await this.databaseMacUlog.findByPk(result.ulog_id);
                await result.update({ ulog_date , ulog_time });
                result = {
                    msg : "保存成功",
                    code : "000000"
                }
            }
        }else{
            await this.databaseMacUlog.create({user_id , ulog_mid , ulog_type , ulog_points , ulog_rid , ulog_sid ,ulog_nid  , ulog_date , ulog_time});
            result = {
                msg : "保存成功",
                code : "000000"
            }
        }
        return result;
    }

    /**
     * 获取用户播放记录日志
     */
    async _getVideoLogList(){
        let { ctx , app } = this;
        let { data } = await ctx.helper.getUserInformation();
        let query, result , list = [];
        query = {
            where: {user_name : data}
        };
        result = await this.databaseMacUser.findOne(query);
        if( ctx.helper.flagBool(result) ){
            let { user_id } = result;
            query = {
                where: { user_id }
            };
            result = await this.databaseMacUlog.findAll(query);
            if( ctx.helper.flagBool(result) ){
                for(let i = 0 ; i < result.length ; i++){
                    let item = result[i];
                    query = {
                        where: { vod_id : item.ulog_rid }
                    };
                    result = await this.databaseMacVod.findOne(query);
                    if( ctx.helper.flagBool(result) ){
                        list.push(Object.assign(item,result))
                    }
                }
                result = {
                    msg : "获取成功",
                    code : "000000",
                    data : list
                }
            }else{
                result = {
                    msg : "获取成功",
                    code : "000000",
                    data : []
                }
            }
        }else{
            result = {
                msg : "获取成功",
                code : "000000",
                data : []
            }
        }
        return result;
    }
}

module.exports = VideoServer;
