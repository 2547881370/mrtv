const Controller = require('egg').Controller;

/**
 * @controller GoldCoinController
 */
class GoldCoinController extends Controller {
    /**
     * @summary 用户金币查询
     * @description 用户金币查询
     * @router post /goldCoin/getUserGoldCoin
     * @request header string *token
     * @response 200 getUserGoldCoin 查询成功
     */
    async getUserGoldCoin(){
        let { ctx , app } = this;
        let data = await ctx.service.goldCoin._getUserGoldCoin();
        this.JsonBody(data);
    }

    /**
     * @summary 增加用户金币
     * @description 增加用户金币
     * @router post /goldCoin/addGoldCoinUser
     * @request body addGoldCoinUserModelRequest *body
     * @request header string *token
     * @response 200 baseResponse 增加成功
     */
    async addGoldCoinUserModel(){
        let { ctx , app } = this;
        const data = ctx.request.body;
        let res = await ctx.service.goldCoin._addGoldCoinUserModel(data);
        this.JsonBody(res);
    }

    /**
     * @summary 减少用户金币
     * @description 减少用户金币
     * @router post /goldCoin/removeGoldCoinUser
     * @request body addGoldCoinUserModelRequest *body
     * @request header string *token
     * @response 200 baseResponse 删除成功
     */
    async removeGoldCoinUserModel(){
        let { ctx , app } = this;
        const data = ctx.request.body;
        let res = await ctx.service.goldCoin._removeGoldCoinUserModel(data);
        this.JsonBody(res);
    }

    /**
     * @summary 更改用户金币
     * @description 更改用户金币
     * @router post /goldCoin/setGoldCoinUser
     * @request body addGoldCoinUserModelRequest *body
     * @request header string *token
     * @response 200 baseResponse 更改成功
     */
    async setGoldCoinUserModel(){
        let { ctx , app } = this;
        const data = ctx.request.body;
        let res = await ctx.service.goldCoin._setGoldCoinUserModel(data);
        this.JsonBody(res);
    }


    /*
     * 对返回的数据结果进行封装。
     */
    JsonBody (data) {
        let { ctx } = this;
        ctx.helper.JsonBody(data)
    }
}


module.exports = GoldCoinController;
