import 'package:flutter/cupertino.dart';
import "package:app/screens/page/myPage/my_member.dart";

class Myvalue {
  int value;
  TextEditingController controller;
  Myvalue({this.value, this.controller});
}

class MemberWidgetListItem {
  String title ;
  String timeName ;
  String number;
  bool status;
  MemberWidgetListItem({this.title , this.timeName ,  this.number , this.status });
}

class TitleTabBar{
  String title ;
  String content ;
  TitleTabBar({this.title , this.content});
}

class MyMenmBerModel extends ChangeNotifier {
  int activeIndex = 0;

  List<Myvalue> valueList = [
    Myvalue(value: 0, controller: new TextEditingController(text: '')),
    Myvalue(value: 0, controller: new TextEditingController(text: '')),
  ];

  List<TitleTabBar> titleTabBarList = [
    TitleTabBar(title : "充值",content :"在线充值积分"),
    TitleTabBar(title : "会员升级",content :"积分升级会员"),
  ];
  

  set_activeIndex(int index) {
    activeIndex = index;
    notifyListeners();
  }

  set_valueList(int val, int index) {
    valueList[index].value = val;
    valueList[index].controller = new TextEditingController.fromValue(
        TextEditingValue(
            text: val.toString(),
            selection: TextSelection.fromPosition(TextPosition(
                affinity: TextAffinity.downstream, offset: '${val}'.length))));
    notifyListeners();
  }
}
