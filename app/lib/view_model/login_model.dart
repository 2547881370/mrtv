import 'dart:async';

import 'package:app/screens/page/loginPage/login_page.dart';
import 'package:flutter/cupertino.dart';

class LoginModelName {
  final String buttonName;
  final String suggestiveLanguage;
  Function fn;
  LoginModelName({this.buttonName, this.suggestiveLanguage, this.fn});
}

class LoginModel extends ChangeNotifier {
  int currentIndex = 0; // 当前激活的tab索引值
  int state = 0;
  Map<int, LoginModelName> loginModelNameMap = {
    0: LoginModelName(
        buttonName: "登录",
        suggestiveLanguage: "登录须知 : 如未注册,请先注册",
        fn: () {
          print("登录");
        }),
    1: LoginModelName(
        buttonName: "注册",
        suggestiveLanguage: "注册须知,手机仅限注册一个账号,请勿重复注册",
        fn: () {
          print("注册");
        }),
  };
  Widget customTabBar = CustomTabBar();

  setLoginCurrentIndex(int value) {
    currentIndex = value;
    notifyListeners();
  }

  setState(int val) {
    state = val;
    notifyListeners();
  }
}
