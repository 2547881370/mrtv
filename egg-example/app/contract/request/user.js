'use strict';

module.exports = {
  createUserRequest: {
    user_id: { type: 'string', required: false, description: '用户id' },
    user_name: { type: 'integer', required: true, description: '用户名称' },
    user_pwd: { type: 'integer', required: false, min: 1, description: '用户密码' },
    user_nick_name: { type: 'boolean', required: false, description: '用户昵称' },
    user_qq: { type: 'string', required: false, description: '用户qq' },
    user_email: { type: 'string', required: false, description: '用户邮箱'  },
    user_phone: { type: 'string', required: false, description: '用户手机号码'  },
    user_status: { type: 'string', required: false, description: '用户状态 1启用 0停用'  },
    user_portrait: { type: 'string', required: false, description: '用户头像地址'  },
  },
  loginUserRequest : {
    user_name: { type: 'integer', required: true, description: '用户名称' },
    user_pwd: { type: 'integer', required: true, min: 1, description: '用户密码' },
  },
  addUserRequest : {
    user_name: { type: 'string', required: true, description: '账号名称 ' },
    user_pwd: { type: 'string', required: true, description: '用户密码 ' },
    group_id: { type: 'string', required: false, description: '用户级别 1游客 2默认会员 3vip会员 ' },
    user_nick_name: { type: 'string', required: false, description: '用户昵称' },
    user_qq: { type: 'string', required: false, description: '用户qq' },
    user_email: { type: 'string', required: false, description: '用户邮箱' },
    user_phone: { type: 'string', required: false, description: '用户手机号码' },
    user_status: { type: 'string', required: false, description: '用户状态 1启用 0禁用' },
    user_question: { type: 'string', required: false, description: '用户问题' },
    user_answer: { type: 'string', required: false, description: '用户答案' },
    user_points: { type: 'string', required: false, description: '用户积分' },
  }
}
