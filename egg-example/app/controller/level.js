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