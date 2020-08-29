'use strict';
const Service = require('egg').Service;
// app/service/user.js
class UserService extends Service {
    async find(uid) {
      const TABLE_NAME = 'mac_user';
      let sql = `select * from ${TABLE_NAME} where user_name like "%${uid}%"`;
      console.log("uid",uid,sql);
      const user = await this.app.mysql.query(sql);
      return { user};
    }
}

module.exports = UserService;