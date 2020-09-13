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
   * dateFormat("YYYY-mm-dd HH:MM:SS", date)
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
   * [dateAddDays 从某个日期增加n天后的日期]
   * @param  {[string]} dateStr  [日期字符串]
   * @param  {[int]} dayCount [增加的天数]
   * @return {[string]}[增加n天后的日期字符串]
   *
   * dateAddDays('2019-03-18',27); //"2019-4-14"
   */
  dateAddDays(dateStr,dayCount) {
    var tempDate=new Date(dateStr.replace(/-/g,"/"));//把日期字符串转换成日期格式
    var resultDate=new Date((tempDate/1000+(86400*dayCount))*1000);//增加n天后的日期
    var resultDateStr=resultDate.getFullYear()+"-"+(resultDate.getMonth()+1)+"-"+(resultDate.getDate()+" "+ resultDate.getHours().toString()+":"+resultDate.getMinutes().toString());//将日期转化为字符串格式
    return resultDateStr;
  },

  /**
   *  日期对比大小
   * @param dateTime1
   * @param dateTime2
   * @returns Boolean true第一个比第二个大 false第一个比第二个小
   */
  compareDate(dateTime1,dateTime2){
      var oDate1 = new Date(dateTime1);
      var oDate2 = new Date(dateTime2);
      if(oDate1 > oDate2){
        return true
      }else{
        return false
      }
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
  },

  /**
   * 随机生成邀请码
   */
   uuid() {
    var s = [];
    var hexDigits = "0123456789abcdefghijklmnopq";
    for (var i = 0; i < 12; i++) {
      s[i] = hexDigits.substr(Math.floor(Math.random() * 0x10), 1);
    }
    var uuid = s.join("");
    return uuid
  },

  /*
   * 对返回的数据结果进行封装。
   */
    JsonBody (data) {
      this.ctx.body = data;
    },

  /**
   * Unix时间戳转年月日
   * @returns {string} "2020-09-12 23:53:58"
   */
  getTime(/** timestamp=0 **/) {
    var ts = arguments[0] || 0;
    var t,y,m,d,h,i,s;
    t = ts ? new Date(ts*1000) : new Date();
    y = t.getFullYear();
    m = t.getMonth()+1;
    d = t.getDate();
    h = t.getHours();
    i = t.getMinutes();
    s = t.getSeconds();
    // 可根据需要在这里定义时间格式
    return y+'-'+(m<10?'0'+m:m)+'-'+(d<10?'0'+d:d)+' '+(h<10?'0'+h:h)+':'+(i<10?'0'+i:i)+':'+(s<10?'0'+s:s);
  },

  /**
   * 将常规时间戳转换成unix
   * @param {string} str 2008-10-09 21:35:28
   * @return 10位的unix时间戳
   */
  unix(str){
    var new_str = str.replace(/:/g,'-');
    new_str = new_str.replace(/ /g,'-');
    var arr = new_str.split("-");
    var datum = new Date(Date.UTC(arr[0],arr[1]-1,arr[2],arr[3]-8,arr[4],arr[5]));
    return datum.getTime()/1000;
  },

  /**
   * 判断传入的变量是否为空
   * @param {string || object || array} str
   */
  flagBool(str){
    if(typeof str == "string"){
      return (str != null && str != undefined && str != "");
    }else if(Array.isArray(str)){
      return str.length > 0 ;
    }else if(typeof str == "number"){
      return (str != null && str != undefined && str != "");
    }else if(Object.prototype.toString.call(str) == "[object Object]"){
      return Object.keys(str).length > 0;
    }
  }
};
