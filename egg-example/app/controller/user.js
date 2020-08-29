'use strict';

const Controller = require('egg').Controller;

class UserController extends Controller {
    async info() {
      const ctx = this.ctx;
      const {
        user_name
      } = ctx.query;
      console.log(user_name,ctx.params,"userId")
      const user = await ctx.service.user.find(user_name);
      ctx.body = user;
    }
  }

module.exports = UserController;