import "package:app/api/baseApi.dart";
import "package:app/api/DioManager.dart";
import "package:app/api/NWMethod.dart";
import 'package:app/model/add_user.dart';
import 'package:app/model/file_upload.dart';
import 'package:app/model/response_data.dart';
import "package:app/model/user_login.dart";
import 'package:app/model/user_updat_info.dart';
import 'package:dio/dio.dart';

class Api {
  ///示例请求
  static userLoginApi(Map<String, dynamic> param) async {
    return await DioManager().request<UserLogin>(NWMethod.POST, NWApi.loginPath,
        params: param, success: (data) {}, error: (error) {
      print("error code = ${error.code}, massage = ${error.message}");
    });
  }

  static addUserApi(Map<String, dynamic> param) async {
    return await DioManager().request<AddUser>(NWMethod.POST, NWApi.addUser,
        params: param, success: (data) {}, error: (error) {
      print("error code = ${error.code}, massage = ${error.message}");
    });
  }

  static getUserInfo(Map<String, dynamic> param) async {
    return await DioManager().request<UserLogin>(
        NWMethod.POST, NWApi.getUserInfo, params: param, success: (data) {},
        error: (error) {
      print("error code = ${error.code}, massage = ${error.message}");
    });
  }

  static addSingin(Map<String, dynamic> param) async {
    return await DioManager().request<ResponseData>(
        NWMethod.POST, NWApi.addSingin, params: param, success: (data) {},
        error: (error) {
      print("error code = ${error.code}, massage = ${error.message}");
    });
  }

  static upload(Map<String, dynamic> param) async {
    return await DioManager().request<FileUpload>(NWMethod.POST, NWApi.upload,
        params: param, success: (data) {}, error: (error) {
      print("error code = ${error.code}, massage = ${error.message}");
    });
  }

  static setuserInfo(Map<String, dynamic> param) async {
    return await DioManager().request<UserUpdatInfo>(
        NWMethod.POST, NWApi.setuserInfo, params: param, success: (data) {},
        error: (error) {
      print("error code = ${error.code}, massage = ${error.message}");
    });
  }
}
