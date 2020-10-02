const Controller = require('egg').Controller;

/**
 * @controller NoticeController
 */
class NoticeController extends Controller {
    /**
     * @summary 获取公告通知列表
     * @description 获取公告通知列表
     * @router post /notice/getNotice
     * @request body getNoticeRequest *body
     * @request header string *token
     * @response 200 getNoticeResponse 获取成功
     */
    async getNotice(){
        let { ctx , service} = this;
        const body = ctx.request.body; // 获取请求参数。
        const result = await service.notice._getNotice(body);
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

module.exports = NoticeController;
