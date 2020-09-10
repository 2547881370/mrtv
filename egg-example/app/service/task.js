'use strict';

const Service = require('egg').Service;
const TABLE_NAME = 'user_task';

class TaskServer extends Service {
    /**
     * 获取任务列表
     */
    async _getTaskList(){
        let { ctx , app } = this;
        let sql = "SELECT * FROM user_task";
        let list = await app.mysql.query(sql);
        return {
            msg : "获取成功",
            code : "000000",
            data : list
        }
    }

    /**
     * 获取用户当天所执行的任务状态
     */
    async _getUserTaskLisk(){
        const { ctx , app} = this;
        let { data } = await ctx.helper.getUserInformation();
        let date_month = ctx.helper.dateFormat('YYYY-mm-dd', new Date());
        let sql = `SELECT * FROM user_task_date WHERE user_task_date.user_name = "${data}" AND user_task_date.date = "${date_month}"`;
        let list = await app.mysql.query(sql);
        return (list && list.length > 0) ? list : [];
    }

    /**
     * 设置用户完成某个类型的任务
     */
    async _setTaskUserController(query){
        let { ctx , app } = this;
        let { type } = query;
        let { data } = await ctx.helper.getUserInformation();
        let date_month = ctx.helper.dateFormat('YYYY-mm-dd', new Date());
        let res = await app.mysql.get("user_task_date", { user_name: data, date : date_month , type});
        if(res && Object.keys(res).length > 0){
            return {
                msg : "今天已完成了该任务",
                code : "000000",
                data : null
            }
        }else{
            var result = await this.app.mysql.insert("user_task_date", {
                user_name: data, // 账号名称 *
                type,
                date : date_month,//当前系统时间
                status : 1
            });
            if (result.affectedRows === 1) {
                return {
                    msg : "完成",
                    code : "000000",
                    data : null
                }
            } else {
                return {
                    msg : "未知错误",
                    code : "000000",
                    data : null
                }
            }
        }
    }

}

module.exports = TaskServer;
