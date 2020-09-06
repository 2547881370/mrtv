const Controller = require('egg').Controller;

/**
 * @controller SingInController
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
