import 'package:flutter/cupertino.dart';
import "package:app/screens/page/myPage/my_member.dart";

class Myvalue {
  int value;
  TextEditingController controller;
  Myvalue({this.value, this.controller});
}

class MemberWidgetListItem {
  String title;
  String timeName;
  String number;
  bool status;
  String remarks;
  MemberWidgetListItem({this.title, this.timeName, this.number, this.status , this.remarks});
}

class TitleTabBar {
  String title;
  String content;
  TitleTabBar({this.title, this.content});
}

class MyMenmBerModel extends ChangeNotifier {
  int activeIndex = 0;

  List<Myvalue> valueList = [
    Myvalue(value: 0, controller: new TextEditingController(text: '')),
    Myvalue(value: 0, controller: new TextEditingController(text: '')),
  ];

  List<TitleTabBar> titleTabBarList = [
    TitleTabBar(title: "充值", content: "在线充值积分"),
    TitleTabBar(title: "会员升级", content: "积分升级会员"),
  ];

  List<MemberWidgetListItem> listItem = [
    MemberWidgetListItem(
        title: "VIP会员", timeName: "包天", number: "10", status: true , remarks:"兑换一天会员"),
    MemberWidgetListItem(
        title: "VIP会员", timeName: "包周", number: "70", status: true , remarks:"兑换一周会员"),
    MemberWidgetListItem(
        title: "VIP会员", timeName: "包月", number: "300", status: true , remarks:"兑换一月会员"),
    MemberWidgetListItem(
        title: "VIP会员", timeName: "包年", number: "3600", status: true , remarks:"兑换一年会员"),
    MemberWidgetListItem(
        title: "VIP会员", timeName: "代理", number: "2000", status: true , remarks:"成为代理"),
    MemberWidgetListItem(title: "推广提升会员等级", status: false),
  ];
  MemberWidgetListItem listItemActive;

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

  set_listItemIndex(MemberWidgetListItem item) {
    listItemActive = item;
    notifyListeners();
  }
}
