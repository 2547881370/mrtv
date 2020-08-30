const  fs = require('fs');

module.exports = {
  /**
   * 拦截token获取用户信息
   * @returns {Promise<{}|{data: any}>}
   */
  async getUserInformation() {
    // this 就是 ctx 对象，在其中可以调用 ctx 上的其他方法，或访问属性
    let token = this.ctx.header.token;
    if(token){
      try{
        // 解码token
        let {user_name , iat} = this.ctx.app.jwt.verify(token, this.app.config.jwt.secret);
        return {
          data : user_name
        }
      }catch (e) {
        return {
        }
      }
    }else{
      return {
      }
    }
  },

  /**
   * 异步封装fs删除
   * @param path
   * @returns {Promise<unknown>}
   */
  async removePath(path){
    return new Promise((resove ,reject) => {
      fs.unlink( path,function(error){
        if(error){
          console.log(error);
          reject(error)
          return false;
        }
        console.log('删除文件成功');
        resove();
      })
    })
  }
};
