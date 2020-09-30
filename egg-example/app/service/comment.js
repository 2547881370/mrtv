'use strict';

const Service = require('egg').Service;

class CommentService extends Service {
    constructor(ctx) {
        super(ctx); // 调用父对象上的函数。
        this.databaseMacComment = this.ctx.model['MacComment']; // 获取 model 下的表（ model 相当于数据库的表 ）。
    }

    /**
     * 新增评论
     */
   async _addComment(data){
        let { ctx , app } = this;
        let result ;
        let { comment_mid , comment_rid , user_id , comment_name , comment_content} = data;
        let comment_ip = ctx.helper.ipToNumber(ctx.request.ip)
        let comment_time = ctx.helper.dateFormat("YYYY-mm-dd HH:MM:SS" , new Date())
        comment_time = ctx.helper.unix(comment_time);
        let comment_up = 0 , comment_down = 0 , comment_status = 0 , comment_report = 0;

        await this.databaseMacComment.create({
            comment_mid , comment_rid , user_id , comment_name , comment_content,
            comment_ip,comment_time,comment_up,comment_down,comment_status,comment_report,
            comment_up_user_name : "",
            comment_down_user_name : "",
            comment_report_user_name : "",
        })
        result = {
            msg : "保存成功",
            code : "000000"
        };
        return result
    }

    /**
     * 删除评论
      */
    async _removeComment(data){
        let { ctx , app } = this;
        let { comment_id } = data;
        const comment = await this.databaseMacComment.findByPk(comment_id);
        if(!comment){
            return {
                msg : "删除失败",
                code : "000000"
            }
        }
        await comment.destroy();
        return {
            msg : "删除成功",
            code : "000000"
        }
    }

    /**
     * 评论点赞
     */
    async _upComment(data){
        let { ctx , app } = this;
        let result , pg , query;
        let { comment_id , comment_up_user_name} = data;
        if(!comment_up_user_name){
            let { data } = await ctx.helper.getUserInformation();
            comment_up_user_name = data
        }
        const comment = await this.databaseMacComment.findByPk(comment_id);
        if(!comment){
            result = {
                msg : "点赞失败,该评论已不存在",
                code : "000000"
            }
        }else{
            query = {
                where: {comment_id : comment_id}
            };
            pg = await this.databaseMacComment.findOne(query)
            if(ctx.helper.flagBool(pg.comment_up_user_name)){
                pg.comment_up_user_name = pg.comment_up_user_name.split(",");
                let indexOf = pg.comment_up_user_name.findIndex((b)=>{
                    return b === comment_up_user_name
                })
                if(indexOf === -1){
                    pg.comment_up_user_name.push(comment_up_user_name);
                    comment_up_user_name = pg.comment_up_user_name.join(",")
                    pg.comment_up = pg.comment_up + 1;
                    await comment.update({
                        comment_up : pg.comment_up,
                        comment_up_user_name
                    });
                    result = {
                        msg : "点赞成功",
                        code : "000000"
                    }
                }else{
                    result = {
                        msg : "不可重复点赞",
                        code : "000000"
                    }
                }
            }else{
                let name = [];
                name.push(comment_up_user_name)
                comment_up_user_name = name.join(",")
                pg.comment_up = pg.comment_up + 1;
                await comment.update({
                    comment_up : pg.comment_up,
                    comment_up_user_name
                });
                result = {
                    msg : "点赞成功",
                    code : "000000"
                }
            }
        }
        return result
    }

    /**
     * 评论点踩
     */
    async _downComment(data){
        let { ctx , app } = this;
        let result , pg , query;
        let { comment_id , comment_down_user_name} = data;
        if(!comment_down_user_name){
            let { data } = await ctx.helper.getUserInformation();
            comment_down_user_name = data
        }
        const comment = await this.databaseMacComment.findByPk(comment_id);
        if(!comment){
            result = {
                msg : "点踩失败,该评论已不存在",
                code : "000000"
            }
        }else{
            query = {
                where: {comment_id : comment_id}
            };
            pg = await this.databaseMacComment.findOne(query)
            if(pg.comment_down_user_name){
                pg.comment_down_user_name = pg.comment_down_user_name.split(",");
                let indexOf = pg.comment_down_user_name.findIndex((b)=>{
                    return b === comment_down_user_name
                })
                if(indexOf === -1){
                    pg.comment_down_user_name.push(comment_down_user_name);
                    comment_down_user_name = pg.comment_down_user_name.join(",")
                    pg.comment_down = pg.comment_down + 1;
                    await comment.update({
                        comment_down : pg.comment_down,
                        comment_down_user_name
                    });
                    result = {
                        msg : "点踩成功",
                        code : "000000"
                    }
                }else{
                    result = {
                        msg : "不可重复点踩",
                        code : "000000"
                    }
                }
            }else{
                let name = [];
                name.push(comment_down_user_name)
                comment_down_user_name = name.join(",")
                pg.comment_down = pg.comment_down + 1;
                await comment.update({
                    comment_down : pg.comment_down,
                    comment_down_user_name
                });
                result = {
                    msg : "点踩成功",
                    code : "000000"
                }
            }
        }
        return result
    }

    /**
     * 评论举报
     */
   async _reportComment(data){
        let { ctx , app } = this;
        let result , pg , query;
        let { comment_id , comment_report_user_name} = data;
        if(!comment_report_user_name){
            let { data } = await ctx.helper.getUserInformation();
            comment_report_user_name = data
        }
        const comment = await this.databaseMacComment.findByPk(comment_id);
        if(!comment){
            result = {
                msg : "举报失败,该评论已不存在",
                code : "000000"
            }
        }else{
            query = {
                where: {comment_id : comment_id}
            };
            pg = await this.databaseMacComment.findOne(query)
            if(pg.comment_report_user_name){
                pg.comment_report_user_name = pg.comment_report_user_name.split(",");
                let indexOf = pg.comment_report_user_name.findIndex((b)=>{
                    return b === comment_report_user_name
                })
                if(indexOf === -1){
                    pg.comment_report_user_name.push(comment_report_user_name);
                    comment_report_user_name = pg.comment_report_user_name.join(",")
                    pg.comment_report = pg.comment_report + 1;
                    await comment.update({
                        comment_report : pg.comment_report,
                        comment_report_user_name
                    });
                    result = {
                        msg : "举报成功",
                        code : "000000"
                    }
                }else{
                    result = {
                        msg : "不可重复举报",
                        code : "000000"
                    }
                }
            }else{
                let name = [];
                name.push(comment_report_user_name)
                comment_report_user_name = name.join(",")
                pg.comment_report = pg.comment_report + 1;
                await comment.update({
                    comment_report : pg.comment_report,
                    comment_report_user_name
                });
                result = {
                    msg : "举报成功",
                    code : "000000"
                }
            }
        }
        return result
    }

    /**
     * 获取视频评论集合
     */
    async _videoCommentList(data){
        let { ctx , app } = this;
        let result , query , pg;
        let { comment_rid } = data;
        query = {
            where : {
                comment_rid : comment_rid
            }
        }
        pg = await this.databaseMacComment.findAll(query);
        return {
            msg : "获取成功",
            code : "000000",
            data : pg
        }
    }
}

module.exports = CommentService
