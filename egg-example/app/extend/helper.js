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
  },

  /**
   * 日期格式化
   * dateFormat("YYYY-mm-dd HH:MM", date)
   */
  dateFormat(fmt, date) {
    let ret;
    const opt = {
      "Y+": date.getFullYear().toString(),        // 年
      "m+": (date.getMonth() + 1).toString(),     // 月
      "d+": date.getDate().toString(),            // 日
      "H+": date.getHours().toString(),           // 时
      "M+": date.getMinutes().toString(),         // 分
      "S+": date.getSeconds().toString()          // 秒
      // 有其他格式化字符需求可以继续添加，必须转化成字符串
    };
    for (let k in opt) {
      ret = new RegExp("(" + k + ")").exec(fmt);
      if (ret) {
        fmt = fmt.replace(ret[1], (ret[1].length == 1) ? (opt[k]) : (opt[k].padStart(ret[1].length, "0")))
      };
    };
    return fmt;
  },

  /**
   * 判断对象是否有参数
   */
  isFlagObjectKeys(obj){
    if(obj && Object.keys(obj).length > 0){
      return true;
    }else{
      return false
    }
  }
};
