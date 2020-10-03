'use strict';

const Service = require('egg').Service;

class ZtServer extends Service {
    constructor(ctx) {
        super(ctx); // 调用父对象上的函数。
        this.databaseMacZt = this.ctx.model['MacZt']; // 获取 model 下的表（ model 相当于数据库的表 ）。
        this.databaseMacVod = this.ctx.model['MacVod']; // 获取 model 下的表（ model 相当于数据库的表 ）。
    }

    /**
     * 获取专题专栏列表。
     */
    async _getZtList() {
        let result = await this.databaseMacZt.findAll();
        return {
            msg: "获取成功",
            code: "000000",
            data: result
        };
    }

    /**
     * 获取专题详情
     */
    async _getZtInfo(data){
        let { ctx , app } = this;
        let { mac_zt_id } = data;
        let query, result , pg , resPg  , mac_zt_video_id;
        query = {
            where :  {
                mac_zt_id
            }
        }
        pg = await this.databaseMacZt.findOne(query);
        if(ctx.helper.flagBool(pg)){
            mac_zt_video_id = pg.mac_zt_video_id
            mac_zt_video_id  = mac_zt_video_id.split(",")
            mac_zt_video_id = mac_zt_video_id.map((b) => {
                return {
                    vod_id : b
                }
            })
            query = `SELECT * FROM mac_vod WHERE mac_vod.vod_id = 1 OR mac_vod.vod_id = 2`
            resPg = await app.mysql.query(query);
            result = {
                msg : "获取成功",
                code : "000000",
                data : resPg
            }

        }else{
            result = {
                msg : "获取失败",
                code : "000000"
            }
        }
    return result;
    }
}

module.exports = ZtServer;
