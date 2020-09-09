const Service = require('egg').Service;
const TABLE_NAME = 'user_level';

class levelServer extends Service {

/**
 * 获取会员等级列表
 */
 async _getUserLevelList(){
    let sql = "SELECT * FROM user_level";
    let results = await this.app.mysql.query(sql);
    return results
 }

  /**
   * 设置用户等级和期限
   */
  async _setUserlever(query){
    const { ctx, app } = this;
    let {
      id
    } = query
    let results = await this.app.mysql.get(TABLE_NAME , {
      id
    });
    if(results && Object.keys(results).length > 0){
      //获取用户信息
    let { data } = await ctx.helper.getUserInformation();
    let resultsUser = await this.app.mysql.get('mac_user' , {
      user_name : data
    });
    let {
      time_day,
      integral_age
    } = results;
    let {
      user_last_level_time,
      user_end_level_time,
      group_id,
      user_points
    } = resultsUser;
      user_points =  user_points - integral_age
    if(user_points < 0){
      return {
        msg : "积分不足请充值",
        code : "000000"
      }
    }
    if(group_id == 3){
      let _date = ctx.helper.dateFormat('YYYY-mm-dd HH:MM', new Date());
      let boolTime = ctx.helper.compareDate(_date,user_end_level_time);
      if(boolTime){
        //当前会员已过期
       user_last_level_time = _date;
       user_end_level_time = ctx.helper.dateAddDays(_date,time_day);
      }else{
         user_end_level_time = ctx.helper.dateFormat('YYYY-mm-dd HH:MM', new Date(user_end_level_time))
         user_end_level_time = ctx.helper.dateAddDays(user_end_level_time,time_day);
      }
    }else{
      //当前会员不是等级3
      let _date = ctx.helper.dateFormat('YYYY-mm-dd HH:MM', new Date());
      user_last_level_time = _date;
      user_end_level_time = ctx.helper.dateAddDays(_date,time_day);
      group_id = 3;
    }
     const row = {
        user_last_level_time,
        user_end_level_time,
        group_id,
        user_points
      };
      const options = {
        where: {
          user_name: data,
        }
      };
      let result = await app.mysql.update('mac_user', row, options);
      if(result.affectedRows === 1){
        return {
          msg : "设置成功",
          code : "000000"
        }
      }else{
        return {
          msg : "设置失败",
          code : "000000"
        }
      }
    }else{
      return {
        msg : "设置失败",
        code : "000000"
      }
    }
  }

  /**
   * 初始化用户等级
   */
  async _initUserLever(){
    const { ctx, app } = this;
    //获取用户信息
    let { data } = await ctx.helper.getUserInformation();
    let  user_last_level_time, user_end_level_time, group_id ,user_points;
    user_last_level_time = "";
    user_end_level_time = "";
    group_id = 2;
    user_points = 100;
    const row = {
      user_last_level_time,
      user_end_level_time,
      group_id,
      user_points
    };
    const options = {
      where: {
        user_name: data,
      }
    };
    let result = await app.mysql.update('mac_user', row, options);
    if(result.affectedRows === 1){
      return {
        msg : "初始化成功",
        code : "000000"
      }
    }else{
      return {
        msg : "初始化失败",
        code : "000000"
      }
    }
  }
};

module.exports = levelServer
