'use strict';

module.exports = {
  createUserRequires: {
    user_id: { type: 'string',  description: '用户id' },
    user_name: { type: 'integer',  description: '用户名称' },
    user_pwd: { type: 'integer',  min: 1, description: '用户密码' },
    user_nick_name: { type: 'boolean', description: '用户昵称' },
    user_qq: { type: 'string',  description: '用户qq' },
    user_email: { type: 'string',  description: '用户邮箱'  },
    user_phone: { type: 'string',  description: '用户手机号码'  },
    user_status: { type: 'string',  description: '用户状态 1启用 0停用'  },
    user_portrait: { type: 'string',  description: '用户头像地址'  },
    user_question: { type: 'string',  description: '用户修改密码问题'  },
    user_answer: { type: 'string',  description: '用户修改密码答案'  },
    user_points: { type: 'string',  description: '用户积分'  },
    user_video_age: { type: 'number',  description: '用户每日可观看次数'  },
    user_video_level: { type: 'number',  description: '用户vip等级,直接与每日观看次数强关联'  },
    user_video_level_name: { type: 'string',  description: '用户vip等级翻译'  },
    user_video_day_age: { type: 'number',  description: '用户今日剩余观看次数'  },
    token: { type: 'string',  description: 'token'  },
  },
}
