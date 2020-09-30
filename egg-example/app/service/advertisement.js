'use strict';

const Service = require('egg').Service;

class AdvertisementService extends Service{
    constructor(ctx) {
        super(ctx); // 调用父对象上的函数。
        this.databaseMacAdvertisement = this.ctx.model['MacAdvertisement']; // 获取 model 下的表（ model 相当于数据库的表 ）。
    }

   async _getAdvertisementRequest(data){
       let { ctx , app } = this;
       let result , query , pg;
       let { id } = data;
       const comment = await this.databaseMacAdvertisement.findByPk(id);
       if(comment){
           query = {
               where: {id : id}
           };
           pg = await this.databaseMacAdvertisement.findOne(query)
           result = {
               msg : "获取成功",
               code : "000000",
               data : pg
           }
       }else{
           result = {
               msg : "获取失败",
               code : "000000"
           }
       }
       return result;
   }
}

module.exports = AdvertisementService;
