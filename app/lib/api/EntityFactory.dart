// json转换辅助工厂，把json转为T
import 'package:app/model/add_user.dart';
import 'package:app/model/file_upload.dart';
import 'package:app/model/response_data.dart';
import "package:app/model/user_login.dart";
import 'package:app/model/user_updat_info.dart';

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
    } else if (T.toString() == "ResponseData") {
      final res = ResponseData.fromJson(json) as T;
      return res;
    } else if (T.toString() == "FileUpload") {
      final res = FileUpload.fromJson(json) as T;
      return res;
    } else if (T.toString() == "UserUpdatInfo") {
      final res = UserUpdatInfo.fromJson(json) as T;
      return res;
    } else {
      return json as T;
    }
  }
}
