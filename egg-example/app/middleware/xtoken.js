'use strict';

module.exports = (option, app) => {
  return async function xtoken(ctx, next) {
    // // 排除登录路径, 其他路径需通过 token 校验
    const { url } = ctx.request;
    if (url && option.exclude && !option.exclude[url]) {
      return await next();
    }
    // 检查 token 有效性...
    //获取token
    let token = ctx.header.token;
    if(token){
      try{
        // 解码token
        let {user_name , iat} = ctx.app.jwt.verify(token, app.config.jwt.secret);
        let _redisToken = await app.redis.get(user_name);
        //验证是否为最新的token
        if (token === _redisToken) {
          return await next();
        }else{
          // 如果不是最新token，则代表用户在另一个机器上进行操作，需要用户重新登录保存最新token
          ctx.body = {
            status: 1,
            message: '您的账号已在其他机器保持登录，如果继续将清除其他机器的登录状态'
          };
          return;
        }
      }catch (e) {
        ctx.body = {
          message: e.message,
        };
        return;
      }
    }else{
      ctx.body = {
        message: 'token失效'
      };
      return;
    }
    await next();

  };
};

