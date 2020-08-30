
// eslint-disable-next-line strict
const Controller = require('egg').Controller;

class UserController extends Controller {
  async addUser() {
    const ctx = this.ctx;
    const user = await ctx.service.user._addUser({...ctx.request.body});
    ctx.body = {user};
  }

  // 登录
  async login() {
    const { ctx, app } = this;
    const data = ctx.request.body;
    const user = await ctx.service.user._login({...data});
    const token = app.jwt.sign({
      user_name: data.user_name,
    }, app.config.jwt.secret);
    if(user.data){
      user.data.token = token;
      app.redis.set(data.user_name, token);
      ctx.body = {
        ...user,
      };
    }else{
      ctx.body = {
        ...user,
      };
    }


  }

  //修改用户信息
  async setuserInfo(){
    const { ctx, app } = this;
    const data = ctx.request.body;
    const user = await ctx.service.user._setuserInfo({...data});
    if(user.updateSuccess){
      ctx.body = {
        msg : "修改成功",
        code : "000000",
        data : user.data
      }
    }else{
      ctx.body = {
        msg : "修改失败",
        code : "500",
        data : null
      }
    }
  }
}

module.exports = UserController;
