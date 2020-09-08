const Controller = require('egg').Controller;

/**
 * @controller SingIn
 */
class SingInController extends Controller {
  /**
   * @summary 用户签到
   * @description 用户签到
   * @router post /singin/addSingin
   * @request body addSinginRequest *body
   * @request header string *token
   * @response 200 baseResponse 修改成功
   */
  async addSingin(){
    const { ctx, app } = this;
    const data = ctx.request.body;
    const user = await ctx.service.signIn.userSingIn({...data});
    this.JsonBody(user);
  }

  /**
   * @summary 获取用户在某个时间段的所有签到记录
   * @description 获取用户在某个时间段的所有签到记录
   * @router post /singin/getUserSingInAge
   * @request body getUserSingInAgeRequest &body
   * @request header string *token
   * @response 200 getUserSingInAgeResponse 查询成功
   */
  async getUserSingInAge(){
    const { ctx, app } = this;
    const data = ctx.request.body;
    const user = await ctx.service.signIn._getUserSingInAge({...data});
    if(user){
      this.JsonBody({
        msg : "获取成功",
        code : "000000",
        data : user
      })
    }else{
      this.JsonBody({
        msg : "该用户无签到记录",
        code : "000000"
      })
    }
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

module.exports = SingInController;
