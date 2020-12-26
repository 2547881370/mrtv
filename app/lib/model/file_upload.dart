// To parse this JSON data, do
//
//     final fileUpload = fileUploadFromJson(jsonString);

import 'dart:convert';

FileUpload fileUploadFromJson(String str) => FileUpload.fromJson(json.decode(str));

String fileUploadToJson(FileUpload data) => json.encode(data.toJson());

class FileUpload {
    FileUpload({
        this.code,
        this.msg,
        this.data,
    });

    String code;
    String msg;
    Data data;

    factory FileUpload.fromJson(Map<String, dynamic> json) => FileUpload(
        code: json["code"],
        msg: json["msg"],
        data: Data.fromJson(json["data"]),
    );

    Map<String, dynamic> toJson() => {
        "code": code,
        "msg": msg,
        "data": data.toJson(),
    };
}

class Data {
    Data({
        this.file,
    });

    String file;

    factory Data.fromJson(Map<String, dynamic> json) => Data(
        file: json["file"],
    );

    Map<String, dynamic> toJson() => {
        "file": file,
    };
}
