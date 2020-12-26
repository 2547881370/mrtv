import 'dart:convert';

import 'package:app/api/EntityFactory.dart';
import 'package:app/model/user_login.dart';
import 'package:app/utils/dataPersistence.dart';
import 'package:flutter/cupertino.dart';
import 'package:app/api/Api.dart';

Map<int, String> groupIdMap = {
  1: "游客",
  2: "默认会员",
  3: "vip会员",
};

class Fraction {
  // 用户积分
  String user_points;
  // 用户当日观看影片剩余数量
  String user_video_day_age;
  // 金币
  String gold_coin;

  Fraction({this.user_points, this.gold_coin, this.user_video_day_age});
}

class UserInfoModel extends ChangeNotifier {
  UserLogin userInfo;
  Fraction fraction =
      Fraction(user_points: "0", user_video_day_age: "0", gold_coin: "0");

  getUser_name(Map value) {
    userInfo = EntityFactory.generateOBJ<UserLogin>(value);
    print(userInfo);
    setFraction();
    notifyListeners();
  }

  initUser_name() async {
    PersistentStorage ps = PersistentStorage();
    var p = await ps.getStorage('userInfo');
    if (p == null) {
      userInfo = null;
      return false;
    }
    userInfo = EntityFactory.generateOBJ<UserLogin>(p);
    notifyListeners();
  }

  removeUserData() {
    userInfo = null;
    fraction = Fraction(user_points: "0", user_video_day_age: "0", gold_coin: "0");
    notifyListeners();
  }

  Future setFraction() async {
    // TODO : 获取用户信息接口
    UserLogin _userInfo = await Api.getUserInfo({});
    PersistentStorage ps = PersistentStorage();
    var p = await ps.getStorage('userInfo');
    if (p != null) {
      _userInfo.data.token = p["data"]["token"];
      // 更新本地用户信息缓存
      ps.setStorage('userInfo', JsonEncoder().convert(_userInfo));
      userInfo = _userInfo;
    }
    fraction = Fraction(
        user_points: _userInfo.data.userPoints.toString(),
        user_video_day_age: _userInfo.data.userVideoDayAge.toString(),
        gold_coin: "100");
    notifyListeners();
  }
}
