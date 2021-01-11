import 'package:flutter/material.dart';

class UserVideoLevel {
  // 等级翻译
  String name;
  // 对应每日观看次数
  int videoAge;
  // 推广多少人数可到达最小
  int minExtensionAge;
  // 推广多少人数可到达最大
  int maxExtensionAge;
  // vip等级枚举
  int level;
  // img图片
  Image imgWegit;
  UserVideoLevel(
      {this.name,
      this.videoAge,
      this.minExtensionAge,
      this.maxExtensionAge,
      this.level,
      this.imgWegit});
}

List<UserVideoLevel> userVideoLevelList = [
  UserVideoLevel(
      name: "VIP1",
      videoAge: 20,
      minExtensionAge: 0,
      maxExtensionAge: 1,
      level: 1,
      imgWegit: Image.asset(
        'assets/images/v1.jpg',
      )),
  UserVideoLevel(
      name: "VIP2",
      videoAge: 40,
      minExtensionAge: 1,
      maxExtensionAge: 3,
      level: 2,
      imgWegit: Image.asset(
        'assets/images/v2.jpg',
      )),
  UserVideoLevel(
      name: "VIP3",
      videoAge: 60,
      minExtensionAge: 3,
      maxExtensionAge: 5,
      level: 3,
      imgWegit: Image.asset(
        'assets/images/v3.jpg',
      )),
  UserVideoLevel(
      name: "VIP4",
      videoAge: 80,
      minExtensionAge: 5,
      maxExtensionAge: 10,
      level: 4,
      imgWegit: Image.asset(
        'assets/images/v4.jpg',
      )),
  UserVideoLevel(
      name: "VIP5",
      videoAge: 100,
      minExtensionAge: 10,
      maxExtensionAge: 999,
      level: 5,
      imgWegit: Image.asset(
        'assets/images/v5.jpg',
      )),
];


