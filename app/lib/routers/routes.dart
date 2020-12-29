import 'package:flutter/material.dart';
import 'package:fluro/fluro.dart';
import 'package:app/routers/router_handler.dart';

class Routes {
  static String root = '/';
  static String indexPage = '/indexPage';
  static String normalPage = '/normalPage';
  static String routingReference = '/routingReference';
  static String login = '/login';
  static String searchPage = '/searchPage';
  static String myUserInfo = '/myUserInfo';
  static String myUpdateName = '/myUpdateName';
  static String myMenmBer = '/myMenmBer';
  static void configureRoutes(Router router) {
    router.notFoundHandler = new Handler(
      handlerFunc: (BuildContext context, Map<String, List<String>> params) {
        print('ERROR====>ROUTE WAS NOT FONUND!!!'); // 找不到路由，跳转404页面
        print('找不到路由，404');
      },
    );

    // 路由页面配置
    router.define(indexPage, handler: indexPageHanderl);
    router.define(normalPage, handler: normalPageHanderl);
    router.define(routingReference, handler: routingReferenceHanderl);
    router.define(login, handler: loginHanderl);
    router.define(searchPage, handler: searchPageHanderl);
    router.define(myUserInfo, handler: userInfoPageHanderl);
    router.define(myUpdateName, handler: userUpDateNamePageHanderl);
    router.define(myMenmBer, handler: myMenmBerPageHanderl);
  }
}