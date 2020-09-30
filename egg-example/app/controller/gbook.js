const Controller = require('egg').Controller;

/**
 * @controller GbookController
 */
class GbookController extends Controller {
    /**
     * @summary 新增反馈
     * @description 新增反馈
     * @router post /gbook/addGbook
     * @request body addGbookRequset *body
     * @request header string *token
     * @response 200 baseResponse 新增成功
     */
    async addGbook(){
        let { ctx , app , service} = this;
        let body = ctx.request.body;
        const result = await service.gbook._addGbook(body);
        this.JsonBody(result);
    }

    /**
     * @summary 获取反馈列表
     * @description 获取反馈列表
     * @router post /gbook/gbookList
     * @request body gbookListRequest *body
     * @request header string *token
     * @response 200 getGbookListResponse 获取成功
     */
    async gbookList(){
        let { ctx , app , service} = this;
        let body = ctx.request.body;
        const result = await service.gbook._gbookList(body);
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

module.exports = GbookController
