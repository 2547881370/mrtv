
// eslint-disable-next-line strict
const Controller = require('egg').Controller;

/**
 * @controller user Controller
 */
class UserController extends Controller {
  /**
   * @summary 新增用户
   * @description 新增用户
   * @router post /user/addUser
   * @request body addUserRequest *body
   * @request header string *token
   * @response 200 baseResponse 新增成功
   */
  async addUser() {
    const ctx = this.ctx;
    const user = await ctx.service.user._addUser({ ...ctx.request.body });
    this.JsonBody(user);
  }

  /**
   * @summary 登录
   * @description 用户登录
   * @router post /user/login
   * @request body loginUserRequest *body
   * @response 200 createUserRequires ok
   */
  async login() {
    const { ctx, app } = this;
    const data = ctx.request.body;
    const user = await ctx.service.user._login({ ...data });
    const token = app.jwt.sign({
      user_name: data.user_name,
    }, app.config.jwt.secret);
    if (user.data) {
      user.data.token = token;
      app.redis.set(data.user_name, token);
      this.JsonBody({
        ...user,
      })
    } else {
      this.JsonBody({
        ...user,
      })
    }


  }

  /**
   * @summary 修改用户信息
   * @description 修改用户信息
   * @router post /user/setuserInfo
   * @request body createUserRequest *body
   * @request header string *token
   * @response 200 baseResponse 修改成功
   */
  async setuserInfo() {
    const { ctx, app } = this;
    const data = ctx.request.body;
    const user = await ctx.service.user._setuserInfo({ ...data });
    if (user.updateSuccess == 1) {
      this.JsonBody({
        msg: "修改成功",
        code: "000000",
        data: user.data
      })
    } else {
      this.JsonBody({
        msg: "修改失败",
        code: "500",
        data: null
      })
    }
  }


  /*
   * 对返回的数据结果进行封装。
   */
  JsonBody(data) {
    let { ctx } = this;
    ctx.helper.JsonBody(data)
  }
}

module.exports = UserController;
