import 'package:app/api/EntityFactory.dart';
import 'package:app/model/user_login.dart';
import 'package:app/routers/navigator_util.dart';
import 'package:flutter/material.dart';

import 'dataPersistence.dart';

Future getToken() async{
  PersistentStorage ps = PersistentStorage();
  var p = await ps.getStorage('userInfo');
  var  userInfo = EntityFactory.generateOBJ<UserLogin>(p);
  return userInfo?.data?.token;
}

Future isLogin(BuildContext context ,Function callback) async{
  var token = await  getToken();
  if(token != null){
  callback();
  }else{
    NavigatorUtil.jump(context, '/login');
  }
}