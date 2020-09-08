const Service = require('egg').Service;
const TABLE_NAME = 'sign_record';

class SignInServer extends Service {
  constructor(ctx) {
    super(ctx);
  }

  /**
   * 用户签到
   * @param query
   * @returns {Promise<{msg: string, code: string}>}
   */
  async userSingIn(query) {
    const { ctx, app } = this;
    let {
      mask
    } = query;
    if (mask === null || mask === '' || undefined === mask) {
      throw new Error('请求参数【mask】不允许为空');
    }

    let date_month = ctx.helper.dateFormat('YYYY-mm-dd', new Date());

    //获取用户信息
    let { data } = await ctx.helper.getUserInformation();
    let userSingIn = await app.mysql.get(TABLE_NAME, { user_name: data });
    if (userSingIn && Object.keys(userSingIn).length > 0) {
      let userTime = await app.mysql.get(TABLE_NAME, { user_name: data, date_month });
      if (ctx.helper.isFlagObjectKeys(userTime)) {
        return { msg: '今天已签到', code: '000000' };
      } else {
        var result = await this.app.mysql.insert(TABLE_NAME, {
          user_name: data, // 账号名称 *
          mask: mask,//用户传入的时间
          date_month,//当前系统时间
        });
        if (result.affectedRows === 1) {
          return { msg: '签到成功', code: '000000' };
        } else {
          return { msg: '签到失败', code: '501' };
        }
      }
    } else {
      var result = await this.app.mysql.insert(TABLE_NAME, {
        user_name: data, // 账号名称 *
        mask: mask,//用户传入的时间
        date_month,//当前系统时间
      });
      if (result.affectedRows === 1) {
        return { msg: '签到成功', code: '000000' };
      } else {
        return { msg: '签到失败', code: '501' };
      }
    }
  }

  /**
   * 获取用户在某个时间段所有的签到记录
   */
  async _getUserSingInAge(query){
    const { ctx, app } = this;
    let {
      startDate , endDate
    } = query;
    
    if (startDate === null || startDate === '' || undefined === startDate) {
      throw new Error('请求参数【startDate】不允许为空');
    }
    if (endDate === null || endDate === '' || undefined === endDate) {
      throw new Error('请求参数【endDate】不允许为空');
    }
    let _startDateLength = startDate.split("-");
    let _endDateLength = endDate.split("-");
    if(_startDateLength.length != 3 || _endDateLength.length != 3){
      throw new Error('请求参数日期格式不正确');
    }
    
    //获取用户信息
    let { data } = await ctx.helper.getUserInformation();
    let sql = `SELECT * FROM sign_record WHERE user_name = "${data}" AND sign_record.date_month >= "${startDate}" AND sign_record.date_month <= "${endDate}" `;
    let results = await this.app.mysql.query(sql);
    if(results && results.length > 0){
      return {
        results
      }
    }else{
      return false
    }
  }
};

module.exports = SignInServer;
