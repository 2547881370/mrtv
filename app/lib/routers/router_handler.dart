import 'package:app/screens/page/loginPage/login_page.dart';
import 'package:app/screens/page/myPage/my_info.dart';
import 'package:app/screens/page/myPage/my_member.dart';
import 'package:app/screens/page/myPage/my_update_name.dart';
import 'package:app/screens/page/search/search_page.dart';
import 'package:flutter/material.dart';
import 'package:fluro/fluro.dart';

/**
 * handler就是每个路由的规则，编写handler就是配置路由规则，比如我们要传递参数，参数的值是什么，这些都需要在Handler中完成。
 */

// 首页
Handler indexPageHanderl = Handler(
  handlerFunc: (BuildContext context, Map<String, List<String>> params) {
    // return IndexPage();
  },
);

// 正常路由跳转
Handler normalPageHanderl = Handler(
    handlerFunc: (BuildContext context, Map<String, List<String>> params) {
      // return NormalPage();
    }
);

// 路由传参
Handler routingReferenceHanderl = Handler(
    handlerFunc: (BuildContext context, Map<String, List<String>> params) {
      String id = params['id'].first;
      // return RoutingReference(id: id);
    }
);

// 登陆页面
Handler loginHanderl = Handler(
    handlerFunc: (BuildContext context, Map<String, List<String>> params) {
      return LoginPage();
    }
);

// 搜索页面
Handler searchPageHanderl = Handler(
    handlerFunc: (BuildContext context, Map<String, List<String>> params) {
      return SearchPage();
    }
);

// 用户详情页
Handler userInfoPageHanderl = Handler(
    handlerFunc: (BuildContext context, Map<String, List<String>> params) {
      return MyUserInfo();
    }
);

// 更改用户昵称页
Handler userUpDateNamePageHanderl = Handler(
    handlerFunc: (BuildContext context, Map<String, List<String>> params) {
      return MyUpdateName();
    }
);

// 会员充值
Handler myMenmBerPageHanderl = Handler(
    handlerFunc: (BuildContext context, Map<String, List<String>> params) {
      return MyMenmBer();
    }
);