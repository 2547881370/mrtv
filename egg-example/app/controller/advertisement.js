const Controller = require('egg').Controller;

/**
 * @controller AdvertisementController
 */
class AdvertisementController extends Controller {
    /**
     * @summary 获取广告位
     * @description 获取广告位
     * @router post /advertisement/getAdvertisementRequest
     * @request body getAdvertisementRequest *body
     * @response 200 getAdvertisementResponse 获取成功
     */
    async getAdvertisement(){
        let { ctx , app , service} = this;
        const body = ctx.request.body; // 获取请求参数。
        const result = await service.advertisement._getAdvertisementRequest(body);
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

module.exports = AdvertisementController
