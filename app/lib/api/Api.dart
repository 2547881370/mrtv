import "package:app/api/baseApi.dart";
import "package:app/api/DioManager.dart";
import "package:app/api/NWMethod.dart";
import "package:app/model/user_login.dart";

class Api {
  ///示例请求
  static userLoginApi(Map<String, dynamic> param) async {
    return await DioManager().request<UserLogin>(NWMethod.POST, NWApi.loginPath,
        params: param, success: (data) {}, error: (error) {
      print("error code = ${error.code}, massage = ${error.message}");
    });
  }

  static addUserApi(Map<String, dynamic> param) async {
    return await DioManager().request<UserLogin>(NWMethod.POST, NWApi.addUser,
        params: param, success: (data) {}, error: (error) {
      print("error code = ${error.code}, massage = ${error.message}");
    });
  }
}
