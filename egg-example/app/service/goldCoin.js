'use strict';

const Service = require('egg').Service;
const TABLE_NAME = 'mac_user';

class GoldCoinServer extends Service {
    /**
     * 查询用户剩余金币
     */
    async _getUserGoldCoin(){
        let { ctx , app } = this;
        let { data } = await ctx.helper.getUserInformation();
        let res = await app.mysql.get(TABLE_NAME , {user_name : data});
        return {
            msg : "查询成功",
            code :　"000000",
            data : res
        }
    }

    /**
     * 新增用户金币
     */
    async _addGoldCoinUserModel(query){
        let { ctx , app } = this;
        let {
            user_points
        } = query;
        let { data } = await ctx.helper.getUserInformation();
        let res = await app.mysql.get(TABLE_NAME , {user_name : data});
        const row = {
            user_points: res.user_points + user_points, // `now()` on db server
        };
        const options = {
            where: {
                user_name : data,
            }
        };
        let result = await app.mysql.update(TABLE_NAME, row , options);
        if(result.affectedRows === 1){
            return {
                msg : "新增成功",
                code : "000000"
            }
        }else{
            return {
                msg : "新增失败",
                code : "000000"
            }
        }
    }

    /**
     * 减少用户金币
     */
    async _removeGoldCoinUserModel(query){
        let { ctx , app } = this;
        let {
            user_points
        } = query;
        let { data } = await ctx.helper.getUserInformation();
        let res = await app.mysql.get(TABLE_NAME , {user_name : data});
        const row = {
            user_points: res.user_points - user_points > 0 ? res.user_points - user_points : 0, // `now()` on db server
        };
        const options = {
            where: {
                user_name : data,
            }
        };
        let result = await app.mysql.update(TABLE_NAME, row , options);
        if(result.affectedRows === 1){
            return {
                msg : "金币减少成功",
                code : "000000"
            }
        }else{
            return {
                msg : "金币减少失败",
                code : "000000"
            }
        }
    }

    /**
     * 更改用户金币
     */
    async _setGoldCoinUserModel(query){
        let { ctx , app } = this;
        let {
            user_points
        } = query;
        let { data } = await ctx.helper.getUserInformation();
        let res = await app.mysql.get(TABLE_NAME , {user_name : data});
        const row = {
            user_points:  user_points, // `now()` on db server
        };
        const options = {
            where: {
                user_name : data,
            }
        };
        let result = await app.mysql.update(TABLE_NAME, row , options);
        if(result.affectedRows === 1){
            return {
                msg : "更改成功",
                code : "000000"
            }
        }else{
            return {
                msg : "更改失败",
                code : "000000"
            }
        }
    }
};

module.exports = GoldCoinServer;
