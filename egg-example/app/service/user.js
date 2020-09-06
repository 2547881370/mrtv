const Service = require('egg').Service;
// app/service/user.js
const TABLE_NAME = 'mac_user';

class UserService extends Service {
  constructor(ctx,tableName) {
    super(ctx);
    this.tableName = tableName;
    this.datebase = this.ctx.model[tableName]; // 根据表名获得相应的数据模型
  }
  /**
   * 新增用户
   * @param query
   * @returns {Promise<{msg: string, code: string, data: *}|{msg: string, code: string, data: null}>}
   * @private
   */
  async _addUser(query) {
    const {
      user_name, // 账号名称 *
      user_pwd, // 用户密码 *
      group_id, // 用户级别 1游客 2默认会员 3vip会员
      user_nick_name, // 用户昵称
      user_qq, // 用户qq
      user_email, // 用户邮箱
      user_phone, // 用户手机号码
      user_status, // 用户状态 1启用 0禁用
      user_question, // 用户问题
      user_answer, // 用户答案
      user_points, // 用户积分
    } = query;

    const user = await this.app.mysql.get(TABLE_NAME, { user_name });
    if (user && Object.keys(user).length > 0) {
      return { msg: '用户已存在,请重新输入', code: '502', data: null };
    } else {
      const result = await this.app.mysql.insert(TABLE_NAME, {
        user_name, // 账号名称 *
        user_pwd, // 用户密码 *
        group_id, // 用户级别 1游客 2默认会员 3vip会员
        user_nick_name, // 用户昵称
        user_qq, // 用户qq
        user_email, // 用户邮箱
        user_phone, // 用户手机号码
        user_status, // 用户状态 1启用 0禁用
        user_question, // 用户问题
        user_answer, // 用户答案
        user_points, // 用户积分
      });
      if (result.affectedRows === 1) {
        const user = await this.app.mysql.get(TABLE_NAME, { user_name });
        return { msg: '新增成功', code: '000000', data: user };
      } else {
        return { msg: '新增失败', code: '501', data: null };
      }
    }
  }

  /**
   * 用户登录
   */
  async _login(query) {
    const {
      user_name, // 账号名称 *
      user_pwd, // 用户密码 *
    } = query;
    const user = await this.app.mysql.get(TABLE_NAME, { user_name });
    if (user && Object.keys(user).length > 0) {
      if (user.user_pwd === user_pwd) {
        return { msg: '登录成功', code: '000000', data: user };
      } else {
        return { msg: '账号或密码错误', code: '503', data: null };
      }
    } else {
      return { msg: '账号或密码错误', code: '503', data: null };
    }

  }

  /**
   * 修改用户信息
   * @param query
   * @returns {Promise<void>}
   * @private
   */
  async _setuserInfo(query) {
    const { ctx, app } = this;
    const {
      user_nick_name,//用户昵称
      user_portrait,//用户头像
    } = query;
    //获取用户信息
    let { data } = await ctx.helper.getUserInformation();
    const row = {
      user_portrait, // `now()` on db server
      user_nick_name
    };
    const options = {
      where: {
        user_name: data,
      }
    };
    const result = await app.mysql.update(TABLE_NAME, row, options);
    // 判断更新成功
    const updateSuccess = result.affectedRows === 1;

    let userInfo = await app.mysql.get(TABLE_NAME , { user_name : data });

    return {
      updateSuccess,
      data : userInfo
    }
  }

  /**
   * 根据id主键查询数据
   * @param {*} id
   */
  async getById(id){
    const entity = await this.datebase.findByPk(id); // 根据id主键查询数据
    return entity; //将结果集返回
  }

}

module.exports = UserService;
