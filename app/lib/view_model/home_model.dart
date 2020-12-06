import 'package:app/screens/page/homePage/home_page.dart';
import 'package:app/screens/page/listPage/list_page.dart';
import 'package:app/screens/page/myPage/my_page.dart';
import 'package:app/screens/page/specialPage/special_page.dart';
import 'package:app/screens/page/welfarePage/welfare_page.dart';
import 'package:flutter/cupertino.dart';

class ListIconButton {
  final String icon;
  final String activeIcon;
  final String title;
  int index;
  ListIconButton({this.icon, this.activeIcon, this.title, this.index});
}

List<ListIconButton> listIconButton = [
  ListIconButton(
      icon: "assets/icons/shouye2x.svg",
      activeIcon: "assets/icons/shouye2.svg",
      title: "首页",
      index: 0),
  ListIconButton(
      icon: "assets/icons/zhuanti2x.svg",
      activeIcon: "assets/icons/zhuanti.svg",
      title: "专题",
      index: 1),
  ListIconButton(
      icon: "assets/icons/fulishe2x.svg",
      activeIcon: "assets/icons/fulishe.svg",
      title: "福利",
      index: 2),
  ListIconButton(
      icon: "assets/icons/bangdan2x.svg",
      activeIcon: "assets/icons/bangdan.svg",
      title: "榜单",
      index: 3),
  ListIconButton(
      icon: "assets/icons/wode2x.svg",
      activeIcon: "assets/icons/wode.svg",
      title: "我的",
      index: 4),
];

final List<Widget> tabBodies = [
  HomePage(),
  SpecialPage(),
  WelfarePage(),
  ListPage(),
  MyPage(),
];

class HomeModel extends ChangeNotifier {
  int currentIndex = 0; // 当前激活的tab索引值

  HomeModel();

  setCurrentIndex(int value) {
    currentIndex = value;
    notifyListeners();
  }
}
