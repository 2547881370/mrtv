const Controller = require('egg').Controller;

/**
 * @controller TaskController Controller
 */
class TaskController extends Controller {
    /**
     * @summary 获取任务列表
     * @description 获取任务列表
     * @router post /task/getTaskList
     * @request header string *token
     * @response 200 taskResponse 获取成功
     */
    async getTaskList(){
        let { ctx , app } = this;
        let list = await ctx.service.task._getTaskList();
        this.JsonBody(list);
    }

    /**
     * @summary 获取用户当天所执行的任务状态
     * @description 可根据这个接口知道用户今天做了哪些任务,和哪些任务没有做
     * @router post /task/getUserTaskLisk
     * @request header string *token
     * @response 200 getTaskResponse
     */
    async getUserTaskLisk(){
        let { ctx , app } = this;
        let goodList = await ctx.service.task._getUserTaskLisk();
        let { data } = await ctx.service.task._getTaskList();
        data = data.map((b) => {
            let _flagData = goodList.find((item) => {
                return item.type == b.type;
            });
            if(_flagData && Object.keys(_flagData).length > 0){
                return Object.assign(b , {
                    date : _flagData.date,
                    status : _flagData.status
                });
            }else{
                return Object.assign(b , {
                    date : null,
                    status : 2
                });
            }
        });
        this.JsonBody({
            msg : "获取成功",
            code : "000000",
            data : data
        })
    }

    /**
     * @summary 设置用户完成某个类型的任务
     * @description 设置用户完成某个类型的任务
     * @router post /task/setTaskUserController
     * @request body setTaskUserRequest *body
     * @request header string *token
     * @response 200 baseResponse 设置成功
     */
    async setTaskUserController(){
        let { ctx , app } = this;
        const data = ctx.request.body;
        let res = await ctx.service.task._setTaskUserController(data);
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

module.exports = TaskController;
