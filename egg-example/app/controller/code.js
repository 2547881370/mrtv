const Controller = require('egg').Controller;

/**
 * @controller CodeController
 */
class CodeController extends Controller {
    /**
     * @summary 生成用户code
     * @description 生成用户code , 返回最新推广码
     * @router post /code/addCodeUser
     * @request header string *token
     * @response 200 codeResponse 生成成功
     */
    async addCodeUser(){
        let { ctx , app } = this;
        let data = await ctx.service.code._addCodeUser();
        this.JsonBody(data);
    }

    /**
     * @summary 用户使用邀请码注册
     * @description 用户使用邀请码注册
     * @router post /code/sendUserCode
     * @request body sendUserCodeRequest *body
     * @response 200 baseResponse 注册成功
     */
    async sendUserCode(){
        let { ctx , app } = this;
        const data = ctx.request.body;
        let res = await ctx.service.code._sendUserCode(data);
        this.JsonBody(res);
    }

    /**
     * @summary 查询用户邀请人注册列表
     * @description 查询用户邀请人注册列表
     * @router post /code/sendUserCodeAge
     * @request header string *token
     * @response 200 sendUserCodeAgeResponse 查询成功
     */
    async sendUserCodeAge(){
        let { ctx , app } = this;
        let res = await ctx.service.code._sendUserCodeAge();
        this.JsonBody(res);
    }

    /*
     * 对返回的数据结果进行封装。
     */
    JsonBody (data) {
        this.ctx.body = {
            data,
        };
    }
}

module.exports = CodeController;
