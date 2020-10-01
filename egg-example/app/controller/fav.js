const Controller = require('egg').Controller;

/**
 * @controller FavController
 */
class FavController extends Controller {
    /**
     * @summary 新增收藏
     * @description 新增收藏
     * @router post /fav/addFav
     * @request body addFavRequest *body
     * @request header string *token
     * @response 200 baseResponse 新增成功
     */
    async addFav(){
        let { ctx , app , service} = this;
        let body = ctx.request.body;
        const result = await service.fav._addFav(body);
        this.JsonBody(result);
    }

    /**
     * @summary 删除收藏
     * @description 删除收藏
     * @router post /fav/removeFav
     * @request body removeFavRequest *body
     * @request header string *token
     * @response 200 baseResponse 删除成功
     */
    async removeFav(){
        let { ctx , app , service} = this;
        let body = ctx.request.body;
        const result = await service.fav._removeFav(body);
        this.JsonBody(result);
    }

    /**
     * @summary 获取用户收藏列表
     * @description 获取用户收藏列表
     * @router post /fav/getFavList
     * @request body getFavListRequest *body
     * @request header string *token
     * @response 200 favListResponse 获取成功
     */
    async getFavList(){
        let { ctx , app , service} = this;
        let body = ctx.request.body;
        const result = await service.fav._getFavList(body);
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
module.exports = FavController;
