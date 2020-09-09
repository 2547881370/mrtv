const Controller = require('egg').Controller;

/**
 * @controller level Controller
 */
class IntergralController extends Controller {
    /**
     * @summary 获取会员等级列表
     * @description 获取会员等级列表
     * @router post /level/getUserLevelList
     * @request header string *token
     * @response 200 intergralResponse 获取成功
     */
    async getUserLevelList() {
        const { ctx, app } = this;
        const data = await ctx.service.level._getUserLevelList();
        this.JsonBody({
            msg : "获取成功",
            code : "000000",
            data : data
        });
    }

    /**
     * @summary 设置用户等级期限
     * @description 设置用户等级
     * @router post /level/setUserLevel
     * @request body setUserleverRequest *body
     * @request header string *token
     * @response 200 baseResponse 设置成功
     *
     */
    async setUserLevel(){
        let { ctx , app } = this;
        const data = await ctx.service.level._setUserlever({...ctx.request.body});
        this.JsonBody(data);
    }

    /**
     * @summary 初始化用户等级
     * @description 初始化用户等级并清楚使用期限
     * @router post /level/initUserLevel
     * @request header string *token
     * @response 200 baseResponse 设置成功
     */
    async initUserLevel(){
        let { ctx , app } = this;
        const data = await ctx.service.level._initUserLever();
        this.JsonBody(data);
    }

    /*
    * 对返回的数据结果进行封装。
    */
    JsonBody(data) {
        this.ctx.body = {
            data,
        };
    }
}

module.exports = IntergralController;
