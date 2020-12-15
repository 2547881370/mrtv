// json转换辅助工厂，把json转为T
import 'package:app/model/add_user.dart';
import "package:app/model/user_login.dart";

class EntityFactory {
  static T generateOBJ<T>(json) {
    if (json == null) {
      return null;
    } else if (T.toString() == "UserLogin") {
      final res = UserLogin.fromJson(json) as T;
      return res;
    } else if (T.toString() == "AddUser") {
      final res = AddUser.fromJson(json) as T;
      return res;
    } else {
      return json as T;
    }
  }
}
