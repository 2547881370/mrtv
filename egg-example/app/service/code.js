'use strict';

const Service = require('egg').Service;
const TABLE_NAME = 'user_code';
const userCodeRelation = 'user_code_relation';
const MAC_USER = 'mac_user';

class CodeServer extends Service {
    /**
     * 生成用户code
     */
    async _addCodeUser(){
        let { ctx , app } = this;
        let { data } = await ctx.helper.getUserInformation();
        let res , code_id , row , options , uuid;
        uuid = ctx.helper.uuid()
        res = await app.mysql.get(TABLE_NAME , { user_name : data });
        if(res && Object.keys(res).length > 0){
            code_id = res.code_id + "," +  uuid;
            row = {
                code_id
            };
            options = {
               where: {
                   user_name : data,
               }
            };
            let result = await app.mysql.update(TABLE_NAME, row , options);
            res = await app.mysql.get(TABLE_NAME , { user_name : data });
            if(result.affectedRows === 1){
                return {
                    msg : "邀请码生成成功",
                    code : "000000",
                    data : res
                }
            }else{
                return {
                    msg : "邀请码生成失败",
                    code : "000000"
                }
            }
        }else{
            let result = await this.app.mysql.insert(TABLE_NAME, {
                user_name: data, // 账号名称 *
                code_id: uuid,//邀请码
            });
            if(result.affectedRows === 1){
                res = await app.mysql.get(TABLE_NAME , { user_name : data });
                return {
                    msg : "邀请码生成成功",
                    code : "000000",
                    data : res
                }
            }else{
                return {
                    msg : "邀请码生成失败",
                    code : "000000"
                }
            }
        }
    }

    /**
     * 用户使用邀请码注册
     */
    async _sendUserCode(query){
        let { ctx , app } = this;
        let { code_id , user_name , user_pwd } = query;
        let res ;
        res = await app.mysql.get(MAC_USER , {
            user_name
        });
        if (res && Object.keys(res).length > 0){
            return {
                msg : "注册失败,该用户名已重复",
                code : "000000"
            }
        }else{
            let result = await this.app.mysql.insert(userCodeRelation, {
                user_name, // 账号名称 *
                code_id,//邀请码
                user_pwd,//密码
            });

            if(result.affectedRows === 1){
                const user = await ctx.service.user._addUser({
                    user_name, // 账号名称 *
                    user_pwd, // 用户密码 *
                    group_id : 3, // 用户级别 1游客 2默认会员 3vip会员
                    user_nick_name : user_name, // 用户昵称
                    user_qq : "", // 用户qq
                    user_email : "", // 用户邮箱
                    user_phone : "", // 用户手机号码
                    user_status : 1, // 用户状态 1启用 0禁用
                    user_question : "", // 用户问题
                    user_answer : "", // 用户答案
                    user_points : 1000, // 用户积分
                });
                // await ctx.service.level._setUserlever({ id : 5});
                if(user.code = "000000"){
                    return {
                        msg : "注册成功",
                        code : "000000"
                    }
                }else{
                    return {
                        msg : "注册失败",
                        code : "000000"
                    }
                }
            }else{
                return {
                    msg : "注册失败",
                    code : "000000"
                }
            }
        }
    }
}

module.exports = CodeServer;
