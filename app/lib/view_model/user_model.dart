
import 'package:app/api/EntityFactory.dart';
import 'package:app/model/user_login.dart';
import 'package:app/utils/dataPersistence.dart';
import 'package:flutter/cupertino.dart';

Map<int, String> groupIdMap = {
  1: "游客",
  2: "默认会员",
  3: "vip会员",
};

class UserInfoModel extends ChangeNotifier {
  UserLogin userInfo;
  UserInfoModel({this.userInfo});

  getUser_name(Map value) {
    userInfo = EntityFactory.generateOBJ<UserLogin>(value);
    print(userInfo);
    notifyListeners();
  }

  initUser_name() async {
    PersistentStorage ps = PersistentStorage();
    var p = await ps.getStorage('userInfo');
    userInfo = EntityFactory.generateOBJ<UserLogin>(p);
    notifyListeners();
  }
}
