const Controller = require('egg').Controller;

/**
 * @controller CommentController
 */
class CommentController extends Controller {
    /**
     * @summary 新增评论
     * @description 新增评论
     * @router post comment/addComment
     * @request header string *token
     * @request body addCommentRequest *body
     * @response 200 addCommentResponse 新增成功
     */
    async addComment(){
        let { ctx , app , service} = this;
        const body = ctx.request.body; // 获取请求参数。
        const result = await service.comment._addComment(body);
        this.JsonBody(result);
    }

    /**
     * @summary 删除评论
     * @description 删除评论
     * @router post comment/removeComment
     * @request header string *token
     * @request body removeCommentRequest *body
     * @response 200 baseResponse 删除成功
     */
    async removeComment(){
        let { ctx , app , service} = this;
        const body = ctx.request.body; // 获取请求参数。
        const result = await service.comment._removeComment(body);
        this.JsonBody(result);
    }

    /**
     * @summary 评论点赞
     * @description 评论点赞
     * @router post comment/upComment
     * @request header string *token
     * @request body upCommentRequest *body
     * @response 200 baseResponse 点赞成功
     */
    async upComment(){
        let { ctx , app , service} = this;
        const body = ctx.request.body; // 获取请求参数。
        const result = await service.comment._upComment(body);
        this.JsonBody(result);
    }

    /**
     * @summary 评论点踩
     * @description 评论点踩
     * @router post comment/downComment
     * @request header string *token
     * @request body downCommentRequest *body
     * @response 200 baseResponse 点赞成功
     */
    async downComment(){
        let { ctx , app , service} = this;
        const body = ctx.request.body; // 获取请求参数。
        const result = await service.comment._downComment(body);
        this.JsonBody(result);
    }

    /**
     * @summary 评论举报
     * @description 评论点赞
     * @router post comment/reportComment
     * @request header string *token
     * @request body reportCommentRequest *body
     * @response 200 baseResponse 点赞成功
     */
    async reportComment(){
        let { ctx , app , service} = this;
        const body = ctx.request.body; // 获取请求参数。
        const result = await service.comment._reportComment(body);
        this.JsonBody(result);
    }

    /**
     * @summary 获取视频评论集合
     * @description 获取视频评论集合
     * @router post comment/videoCommentList
     * @request header string *token
     * @request body videoCommentListRequest *body
     * @response 200 addCommentResponse 获取成功
     */
    async videoCommentList(){
        let { ctx , app , service} = this;
        const body = ctx.request.body; // 获取请求参数。
        const result = await service.comment._videoCommentList(body);
        this.JsonBody(result);
    }

    /*
     * 对返回的数据结果进行封装。
     */
    JsonBody (data) {
        let { ctx } = this;
        ctx.helper.JsonBody(data)
    }
}

module.exports =  CommentController;
