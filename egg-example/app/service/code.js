'use strict';

const Service = require('egg').Service;
const TABLE_NAME = 'user_code';
const userCodeRelation = 'user_code_relation';
const MAC_USER = 'mac_user';
const Op = require('sequelize').Op;
const userEnmu = require('../enums/user').user_video_level;

class CodeServer extends Service {
    constructor(ctx) {
        super(ctx); // 调用父对象上的函数。
        this.databaseUserCode = this.ctx.model['UserCode']; // 获取 model 下的表（ model 相当于数据库的表 ）。
        this.databaseMacUser = this.ctx.model['MacUser']; // 获取 model 下的表（ model 相当于数据库的表 ）。
    }
    /**
     * 生成用户code
     */
    async _addCodeUser() {
        let { ctx, app } = this;
        let { data } = await ctx.helper.getUserInformation();
        let res, code_id, row, options, uuid;
        uuid = ctx.helper.uuid()
        res = await app.mysql.get(TABLE_NAME, { user_name: data });
        if (res && Object.keys(res).length > 0) {
            code_id = res.code_id + "," + uuid;
            row = {
                code_id
            };
            options = {
                where: {
                    user_name: data,
                }
            };
            let result = await app.mysql.update(TABLE_NAME, row, options);
            res = await app.mysql.get(TABLE_NAME, { user_name: data });
            if (result.affectedRows === 1) {
                return {
                    msg: "邀请码生成成功",
                    code: "000000",
                    data: res
                }
            } else {
                return {
                    msg: "邀请码生成失败",
                    code: "000000"
                }
            }
        } else {
            let result = await this.app.mysql.insert(TABLE_NAME, {
                user_name: data, // 账号名称 *
                code_id: uuid,//邀请码
            });
            if (result.affectedRows === 1) {
                res = await app.mysql.get(TABLE_NAME, { user_name: data });
                return {
                    msg: "邀请码生成成功",
                    code: "000000",
                    data: res
                }
            } else {
                return {
                    msg: "邀请码生成失败",
                    code: "000000"
                }
            }
        }
    }

    /**
     * 用户使用邀请码注册
     */
    async _sendUserCode(query) {
        let { ctx, app } = this;
        let { code_id, user_name, user_pwd } = query;
        let res, date;
        date = ctx.helper.dateFormat('YYYY-mm-dd HH:MM', new Date());
        res = await app.mysql.get(MAC_USER, {
            user_name
        });
        if (res && Object.keys(res).length > 0) {
            return {
                msg: "注册失败,该用户名已重复",
                code: "000000"
            }
        } else {
            let result = await this.app.mysql.insert(userCodeRelation, {
                user_name, // 账号名称 *
                code_id,//邀请码
                user_pwd,//密码
                date,//注册时间
            });

            try {
                // 新用户使用邀请码注册,对应用户vip等级和观看次数更新
                await this.updateUserInfoVideoLevel(code_id)
            } catch (e) {
            }

            if (result.affectedRows === 1) {
                const user = await ctx.service.user._addUser({
                    user_name, // 账号名称 *
                    user_pwd, // 用户密码 *
                    group_id: 3, // 用户级别 1游客 2默认会员 3vip会员
                    user_nick_name: user_name, // 用户昵称
                    user_qq: "", // 用户qq
                    user_email: "", // 用户邮箱
                    user_phone: "", // 用户手机号码
                    user_status: 1, // 用户状态 1启用 0禁用
                    user_question: "", // 用户问题
                    user_answer: "", // 用户答案
                    user_points: 1000, // 用户积分
                });
                // await ctx.service.level._setUserlever({ id : 5});
                if (user.code = "000000") {
                    return {
                        msg: "注册成功",
                        code: "000000"
                    }
                } else {
                    return {
                        msg: "注册失败",
                        code: "000000"
                    }
                }
            } else {
                return {
                    msg: "注册失败",
                    code: "000000"
                }
            }
        }
    }

    /**
     * 查询用户邀请人注册列表
     */
    async _sendUserCodeAge(data) {
        let { ctx, app } = this;
        data = data || (await ctx.helper.getUserInformation()).data
        let res, list = [], msg, code, code_id, result, sql;
        res = await app.mysql.get(TABLE_NAME, {
            user_name: data
        });
        if (res && Object.keys(res).length > 0) {
            code_id = res.code_id;
            code_id = code_id.split(",");

            for (let i = 0; i < code_id.length; i++) {
                let b = code_id[i];
                sql = ` SELECT
                        user_code_relation.user_name,
                        user_code_relation.code_id,
                        user_code_relation.id,
                        user_code_relation.user_pwd,
                        user_code_relation.date
                        FROM
                        user_code_relation
                        WHERE
                        user_code_relation.code_id = "${b}"`;
                result = await app.mysql.query(sql);
                if (result && result.length > 0) {
                    list = [...list, ...result]
                }
            };
            msg = "查询成功";
            code = "000000"

        } else {
            console.log("____________")
            msg = "查询成功";
            list = [];
            code = "000000"
        };
        return {
            msg,
            code,
            data: list
        }
    }

    // 新用户使用邀请码注册,对应用户vip等级和观看次数更新
    async updateUserInfoVideoLevel(code_id) {
        // 获取邀请码是属于那个用户的,获取用户id.拿到用户信息
        let _query_ = {
            where: { code_id: { [Op.like]: `%${code_id}%` } }
        }
        let _result_ = await this.databaseUserCode.findAll(_query_);
        if (_result_ && _result_.length > 0) {
            let _user_name_ = _result_[0].user_name
            // 获取用户推广人数,得到对应的等级,等级翻译,当日观看次数,每日观看次数
            let leg = (await this._sendUserCodeAge(_user_name_)).data.length
            let _name_, _videoAge_, _level_
            for (let k in userEnmu) {
                let { minExtensionAge, maxExtensionAge, name, videoAge, level } = userEnmu[k]
                if (leg >= minExtensionAge && leg < maxExtensionAge) {
                    _name_ = name
                    _videoAge_ = videoAge
                    _level_ = level
                }
            }

            // 更新用户等级, 翻译, 每日观看次数,当日观看次数
            let userInfo = await this.databaseMacUser.findOne({ where: { user_name: _user_name_ } })
            let { user_video_day_age } = userInfo
            user_video_day_age = user_video_day_age + _videoAge_
            let _row_ = {
                user_video_age: _videoAge_,
                user_video_level: _level_,
                user_video_level_name: _name_,
                user_video_day_age: user_video_day_age,
            }
            let _options_ = {
                where: {
                    user_name: _user_name_
                }
            }
            this.databaseMacUser.update(_row_, _options_)
        }
    }
}

module.exports = CodeServer;
