'use strict';

const Service = require('egg').Service;
const path = require("path");
const sd = require('silly-datetime');
const mkdirp = require('mkdirp');
const TABLE_NAME = 'mac_user';


class UploadfileService extends Service {
  /**
   * 获取文件上传目录
   * @param {*} filename
   */
  async getUploadFile(filename) {
    const { ctx , app} = this;
    // 1.获取当前日期
    let day = sd.format(new Date(), 'YYYYMMDD');
    // 2.创建图片保存的路径
    let dir = path.join(this.config.uploadDir.url, day);
    await mkdirp(dir); // 不存在就创建目录
    let date = Date.now(); // 毫秒数
    // 返回图片保存的路径
    let uploadDir = path.join(dir, date + path.extname(filename));
    // app\public\avatar\upload\20200312\1536895331666.png

    //数据库入库
    //获取用户信息
    let { data } = await ctx.helper.getUserInformation();

    //当前用户是否有头像信息
    let userInfo = await app.mysql.get(TABLE_NAME , { user_name : data });
    if(userInfo && Object.keys(userInfo).length > 0){
      //有历史头像信息移除服务器文件
      if(userInfo.user_portrait){
        try{
          await ctx.helper.removePath("./app"+userInfo.user_portrait);
        }catch (e) {
          console.log(e)
        }
      }
    };

    const row = {
      user_portrait: uploadDir.slice(3).replace(/\\/g, '/'), // `now()` on db server
    };
    const options = {
      where: {
        user_name : data,
      }
    };
    await app.mysql.update(TABLE_NAME, row , options);

    return {
      uploadDir ,
      saveDir: ctx.origin + uploadDir.slice(3).replace(/\\/g, '/')
    }

  }
}

module.exports = UploadfileService;
