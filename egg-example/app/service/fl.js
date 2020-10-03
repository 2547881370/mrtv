'use strict';

const Service = require('egg').Service;

class FlServer extends Service {
    constructor(ctx) {
        super(ctx); // 调用父对象上的函数。
        this.databaseMacFl = this.ctx.model['MacFl']; // 获取 model 下的表（ model 相当于数据库的表 ）。
    }

    /**
     * 获取福利专栏列表。
     */
    async _getFlList() {
        let result = await this.databaseMacFl.findAll();
        return {
            msg: "获取成功",
            code: "000000",
            data: result
        };
    }

}

module.exports = FlServer;
