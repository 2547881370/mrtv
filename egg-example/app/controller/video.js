const Controller = require('egg').Controller;

/**
 * @controller VideoController
 */
class VideoController extends Controller {

    /**
     * @summary 获取视频分类列表
     * @description 获取视频分类列表
     * @router post /video/getVideoTypeList
     * @request header string *token
     * @response 200 videoTypeResponse 获取成功
     */
    async getVideoTypeList(){
        let { ctx , app , service} = this;
        let result = await service.video._getVideoTypeList();
        this.JsonBody(result);
    }

    /**
     * @summary 获取视频列表
     * @description 获取视频列表
     * @router post /video/getVideoList
     * @request body videoListRequest *body
     * @request header string *token
     * @response 200 videoListResponse 查询成功
     */
    async getVideoList(){
        let { ctx , app , service} = this;
        const body = ctx.request.body; // 获取请求参数。
        let result = await service.video._getVideoList(body);
        this.JsonBody(result);
    }

    /**
     * @summary 获取视频详情
     * @description 获取视频详情
     * @router post /video/getVideoInfo
     * @request body getVideoInfoRequest *body
     * @request header string *token
     * @response 200 videoListResponse 获取成功
     */
    async getVideoInfo(){
        let { ctx , app , service} = this;
        let body = ctx.request.body;
        let result = await service.video._getVideoInfo(body);
        this.JsonBody(result);

    }

    /**
     * @summary 存储播放记录
     * @description 存储播放记录日志
     * @router post /video/getVideoLog
     * @request header string *token
     * @request body getVideoLogRequest *body
     * @response 200 baseResponse 保存成功
     */
    async getVideoLog(){
        let { ctx , app , service} = this;
        let body = ctx.request.body;
        let result = await service.video._getVideoLog(body);
        this.JsonBody(result);
    }

    /**
     * @summary 获取用户播放记录日志
     * @description 获取用户播放记录日志
     * @router post /video/getVideoLogList
     * @request header string *token
     * @response 200 getVideoLogListResponse 获取成功
     */
    async getVideoLogList(){
        let { ctx , app , service} = this;
        let result = await service.video._getVideoLogList();
        this.JsonBody(result);
    }

    /**
     * @summary 获取影视分类榜单
     * @description 获取影视榜单
     * @router post /video/getVideoRanking
     * @request body getVideoRankingRequest *body
     * @request header string *token
     * @response 200 videoListResponse 获取成功
     */
    async getVideoRanking(){
        let { ctx , app , service} = this;
        let body = ctx.request.body;
        let result = await service.video._getVideoRanking(body);
        this.JsonBody(result);
    }

    /**
     * @summary 获取视频分类推荐
     * @description 获取视频分类推荐
     * @router post /video/getVideoRecommend
     * @request body getVideoRecommendRequest *body
     * @request header string *token
     * @response 200 videoListResponse 获取成功
     */
    async getVideoRecommend(){
        let { ctx , app , service} = this;
        let body = ctx.request.body;
        let result = await service.video._getVideoRecommend(body);
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

module.exports =  VideoController;
