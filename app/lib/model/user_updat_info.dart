// To parse this JSON data, do
//
//     final userUpdatInfo = userUpdatInfoFromJson(jsonString);

import 'dart:convert';

UserUpdatInfo userUpdatInfoFromJson(String str) => UserUpdatInfo.fromJson(json.decode(str));

String userUpdatInfoToJson(UserUpdatInfo data) => json.encode(data.toJson());

class UserUpdatInfo {
    UserUpdatInfo({
        this.msg,
        this.code,
        this.data,
    });

    String msg;
    String code;
    Data data;

    factory UserUpdatInfo.fromJson(Map<String, dynamic> json) => UserUpdatInfo(
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
    Data({
        this.userId,
        this.groupId,
        this.userName,
        this.userPwd,
        this.userNickName,
        this.userQq,
        this.userEmail,
        this.userPhone,
        this.userStatus,
        this.userPortrait,
        this.userPortraitThumb,
        this.userOpenidQq,
        this.userOpenidWeixin,
        this.userQuestion,
        this.userAnswer,
        this.userPoints,
        this.userPointsFroze,
        this.userRegTime,
        this.userRegIp,
        this.userLoginTime,
        this.userLoginIp,
        this.userLastLoginTime,
        this.userLastLoginIp,
        this.userLoginNum,
        this.userExtend,
        this.userRandom,
        this.userEndTime,
        this.userPid,
        this.userPid2,
        this.userPid3,
        this.userLastLevelTime,
        this.userEndLevelTime,
        this.userVideoAge,
        this.userVideoLevel,
        this.userVideoLevelName,
        this.userVideoDayAge,
    });

    int userId;
    int groupId;
    String userName;
    String userPwd;
    String userNickName;
    String userQq;
    String userEmail;
    String userPhone;
    int userStatus;
    String userPortrait;
    String userPortraitThumb;
    String userOpenidQq;
    String userOpenidWeixin;
    String userQuestion;
    String userAnswer;
    int userPoints;
    int userPointsFroze;
    int userRegTime;
    int userRegIp;
    int userLoginTime;
    int userLoginIp;
    int userLastLoginTime;
    int userLastLoginIp;
    int userLoginNum;
    int userExtend;
    String userRandom;
    int userEndTime;
    int userPid;
    int userPid2;
    int userPid3;
    dynamic userLastLevelTime;
    dynamic userEndLevelTime;
    int userVideoAge;
    int userVideoLevel;
    String userVideoLevelName;
    int userVideoDayAge;

    factory Data.fromJson(Map<String, dynamic> json) => Data(
        userId: json["user_id"],
        groupId: json["group_id"],
        userName: json["user_name"],
        userPwd: json["user_pwd"],
        userNickName: json["user_nick_name"],
        userQq: json["user_qq"],
        userEmail: json["user_email"],
        userPhone: json["user_phone"],
        userStatus: json["user_status"],
        userPortrait: json["user_portrait"],
        userPortraitThumb: json["user_portrait_thumb"],
        userOpenidQq: json["user_openid_qq"],
        userOpenidWeixin: json["user_openid_weixin"],
        userQuestion: json["user_question"],
        userAnswer: json["user_answer"],
        userPoints: json["user_points"],
        userPointsFroze: json["user_points_froze"],
        userRegTime: json["user_reg_time"],
        userRegIp: json["user_reg_ip"],
        userLoginTime: json["user_login_time"],
        userLoginIp: json["user_login_ip"],
        userLastLoginTime: json["user_last_login_time"],
        userLastLoginIp: json["user_last_login_ip"],
        userLoginNum: json["user_login_num"],
        userExtend: json["user_extend"],
        userRandom: json["user_random"],
        userEndTime: json["user_end_time"],
        userPid: json["user_pid"],
        userPid2: json["user_pid_2"],
        userPid3: json["user_pid_3"],
        userLastLevelTime: json["user_last_level_time"],
        userEndLevelTime: json["user_end_level_time"],
        userVideoAge: json["user_video_age"],
        userVideoLevel: json["user_video_level"],
        userVideoLevelName: json["user_video_level_name"],
        userVideoDayAge: json["user_video_day_age"],
    );

    Map<String, dynamic> toJson() => {
        "user_id": userId,
        "group_id": groupId,
        "user_name": userName,
        "user_pwd": userPwd,
        "user_nick_name": userNickName,
        "user_qq": userQq,
        "user_email": userEmail,
        "user_phone": userPhone,
        "user_status": userStatus,
        "user_portrait": userPortrait,
        "user_portrait_thumb": userPortraitThumb,
        "user_openid_qq": userOpenidQq,
        "user_openid_weixin": userOpenidWeixin,
        "user_question": userQuestion,
        "user_answer": userAnswer,
        "user_points": userPoints,
        "user_points_froze": userPointsFroze,
        "user_reg_time": userRegTime,
        "user_reg_ip": userRegIp,
        "user_login_time": userLoginTime,
        "user_login_ip": userLoginIp,
        "user_last_login_time": userLastLoginTime,
        "user_last_login_ip": userLastLoginIp,
        "user_login_num": userLoginNum,
        "user_extend": userExtend,
        "user_random": userRandom,
        "user_end_time": userEndTime,
        "user_pid": userPid,
        "user_pid_2": userPid2,
        "user_pid_3": userPid3,
        "user_last_level_time": userLastLevelTime,
        "user_end_level_time": userEndLevelTime,
        "user_video_age": userVideoAge,
        "user_video_level": userVideoLevel,
        "user_video_level_name": userVideoLevelName,
        "user_video_day_age": userVideoDayAge,
    };
}
