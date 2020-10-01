'use strict';

const Service = require('egg').Service;

class FavService extends Service {
    constructor() {
        super();
        this.databaseMacFav = this.ctx.model['MacFav']; // 获取 model 下的表（ model 相当于数据库的表 ）。
    }

    /**
     * 新增收藏
     * @param data
     * @returns {Promise<{msg: string, code: string}>}
     * @private
     */
    async _addFav(data){
        let { ctx , app } = this;
        let result;
        let { fav_ulog_rid , fav_user_id , fav_ulog_type } = data;
        let fav_ulog_mid = 1 , fav_ulog_sid = 0 , fav_ulog_nid = 0 , fav_ulog_points = 0;
        let fav_ulog_time = ctx.helper.dateFormat("YYYY-mm-dd HH:MM:SS" , new Date());
        fav_ulog_time = ctx.helper.unix(fav_ulog_time);
        await this.databaseMacFav.create({
            fav_ulog_rid , fav_user_id , fav_ulog_type,
            fav_ulog_mid , fav_ulog_sid , fav_ulog_nid,
            fav_ulog_points , fav_ulog_time
        });
        result = {
            msg : "新增成功",
            code : "000000"
        };
        return result
    }

    /**
     * 删除收藏
     */
    async _removeFav(data){
        let { ctx , app } = this;
        let result , pg;
        let { fav_ulog_id } = data;
        pg = await this.databaseMacFav.findByPk(fav_ulog_id);
        if(pg){
            await pg.destroy();
            result = {
                msg : "删除成功",
                code : "000000"
            };
        }else{
            result = {
                msg : "删除失败",
                code : "000000"
            };
        }
        return result;
    }

    /**
     * 获取用户收藏列表
     */
    async _getFavList(data){
        let { ctx , app } = this;
        let result , query ,  pg;
        let { fav_user_id , limit , page} = data;
        query = {
            limit: limit,
            offset: page * limit - limit,
            where : {
                fav_user_id
            }
        }
        pg = await this.databaseMacFav(query);
        result = {
            msg : "获取成功",
            code : "000000",
            data : pg
        }
        return result;
    }
}

module.exports = FavService
