const Controller = require('egg').Controller;

/**
 * @controller ZtController
 */
class ZtController extends Controller {


    /**
     * @summary 获取专题专栏列表
     * @description 获取专题专栏列表
     * @router post /zt/getZtList
     * @request header string *token
     * @response 200 getZtListResponse 查询成功
     */
    async getZtList(){
        let { ctx , app , service} = this;
        let result = await service.zt._getZtList();
        this.JsonBody(result);
    }


    /**
     * @summary 获取专题专栏详情
     * @description 获取专题专栏详情
     * @router post /zt/getZtInfo
     * @request body getZtInfoRequest *body
     * @request header string *token
     * @response 200 getZtConfigResponse 获取成功
     */
    async getZtInfo(){
        let { ctx , app , service} = this;
        let body = ctx.request.body;
        let result = await service.zt._getZtInfo(body);
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

module.exports =  ZtController;
