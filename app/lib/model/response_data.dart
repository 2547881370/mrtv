// To parse this JSON data, do
//
//     final responseData = responseDataFromJson(jsonString);

import 'dart:convert';

ResponseData responseDataFromJson(String str) => ResponseData.fromJson(json.decode(str));

String responseDataToJson(ResponseData data) => json.encode(data.toJson());

class ResponseData {
    ResponseData({
        this.msg,
        this.code,
        this.data,
    });

    String msg;
    String code;
    Data data;

    factory ResponseData.fromJson(Map<String, dynamic> json) => ResponseData(
        msg: json["msg"],
        code: json["code"],
        data: Data.fromJson(json["data"]),
    );

    Map<String, dynamic> toJson() => {
        "msg": msg,
        "code": code,
        "data": data.toJson(),
    };
}

class Data {
    Data();

    factory Data.fromJson(Map<String, dynamic> json) => Data(
    );

    Map<String, dynamic> toJson() => {
    };
}
