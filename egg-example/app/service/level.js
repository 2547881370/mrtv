const Service = require('egg').Service;
const TABLE_NAME = 'user_intergral';

class levelServer extends Service {

/**
 * 获取会员等级列表
 */
 async _getUserLevelList(){
    let sql = "SELECT * FROM user_level";
    let results = await this.app.mysql.query(sql);
    return results
 }
};

module.exports = levelServer