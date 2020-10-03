const Controller = require('egg').Controller;

/**
 * @controller FlController
 */
class FlController extends Controller {


    /**
     * @summary 获取福利专栏列表
     * @description 获取福利专栏列表
     * @router post /fl/getFlList
     * @request header string *token
     * @response 200 getFlResponse 查询成功
     */
    async getFlList(){
        let { ctx , app , service} = this;
        let result = await service.fl._getFlList();
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

module.exports =  FlController;
