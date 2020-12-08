import "package:flutter/material.dart";
import 'package:flutter_screenutil/screenutil.dart';

import '../../../../constants.dart';

class ListData {
  String title;
  String url;
  ListData({this.title,this.url});
}

class AssociationList extends StatefulWidget {
  @override
  _AssociationListState createState() => _AssociationListState();
}

class _AssociationListState extends State<AssociationList> {
  final List<ListData> listData = [
    ListData(title: "攀登者", url: "http://vip.1905.com/play/1461508.shtml"),
    ListData(title: "找到你", url: "http://vip.1905.com/play/1459666.shtml"),
    ListData(title: "那一夜，我给你开过车", url: "http://vip.1905.com/play/1453710.shtml"),
    ListData(title: "拿摩一等", url: "http://vip.1905.com/play/1461508.shtml"),
    ListData(title: "反贪风暴4", url: "http://vip.1905.com/play/1461508.shtml"),
    ListData(title: "雪暴", url: "http://vip.1905.com/play/1461508.shtml"),
    ListData(title: "大约在冬季", url: "http://vip.1905.com/play/1461508.shtml"),
    ListData(title: "中国机长", url: "http://vip.1905.com/play/1461508.shtml"),
    ListData(title: "攀登者", url: "http://vip.1905.com/play/1461508.shtml"),
    ListData(title: "找到你", url: "http://vip.1905.com/play/1459666.shtml"),
    ListData(title: "那一夜，我给你开过车", url: "http://vip.1905.com/play/1453710.shtml"),
    ListData(title: "拿摩一等", url: "http://vip.1905.com/play/1461508.shtml"),
    ListData(title: "反贪风暴4", url: "http://vip.1905.com/play/1461508.shtml"),
    ListData(title: "雪暴", url: "http://vip.1905.com/play/1461508.shtml"),
    ListData(title: "大约在冬季", url: "http://vip.1905.com/play/1461508.shtml"),
    ListData(title: "中国机长", url: "http://vip.1905.com/play/1461508.shtml"),
    ListData(title: "攀登者", url: "http://vip.1905.com/play/1461508.shtml"),
    ListData(title: "找到你", url: "http://vip.1905.com/play/1459666.shtml"),
    ListData(title: "那一夜，我给你开过车", url: "http://vip.1905.com/play/1453710.shtml"),
    ListData(title: "拿摩一等", url: "http://vip.1905.com/play/1461508.shtml"),
    ListData(title: "反贪风暴4", url: "http://vip.1905.com/play/1461508.shtml"),
    ListData(title: "雪暴", url: "http://vip.1905.com/play/1461508.shtml"),
    ListData(title: "大约在冬季", url: "http://vip.1905.com/play/1461508.shtml"),
    ListData(title: "中国机长", url: "http://vip.1905.com/play/1461508.shtml"),
    ListData(title: "攀登者", url: "http://vip.1905.com/play/1461508.shtml"),
    ListData(title: "找到你", url: "http://vip.1905.com/play/1459666.shtml"),
    ListData(title: "那一夜，我给你开过车", url: "http://vip.1905.com/play/1453710.shtml"),
    ListData(title: "拿摩一等", url: "http://vip.1905.com/play/1461508.shtml"),
    ListData(title: "反贪风暴4", url: "http://vip.1905.com/play/1461508.shtml"),
    ListData(title: "雪暴", url: "http://vip.1905.com/play/1461508.shtml"),
    ListData(title: "大约在冬季", url: "http://vip.1905.com/play/1461508.shtml"),
    ListData(title: "中国机长", url: "http://vip.1905.com/play/1461508.shtml"),
    ListData(title: "攀登者", url: "http://vip.1905.com/play/1461508.shtml"),
    ListData(title: "找到你", url: "http://vip.1905.com/play/1459666.shtml"),
    ListData(title: "那一夜，我给你开过车", url: "http://vip.1905.com/play/1453710.shtml"),
    ListData(title: "拿摩一等", url: "http://vip.1905.com/play/1461508.shtml"),
    ListData(title: "反贪风暴4", url: "http://vip.1905.com/play/1461508.shtml"),
    ListData(title: "雪暴", url: "http://vip.1905.com/play/1461508.shtml"),
    ListData(title: "大约在冬季", url: "http://vip.1905.com/play/1461508.shtml"),
    ListData(title: "中国机长", url: "http://vip.1905.com/play/1461508.shtml"),
  ];

  @override
  Widget build(BuildContext context) {
    return SingleChildScrollView(
      child: Column(
          children: listData.map((b) {
        return _ListItem(title: b.title);
      }).toList()),
    );
  }
}

class _ListItem extends StatelessWidget {
  final String title;

  const _ListItem({Key key, this.title}) : super(key: key);
  @override
  Widget build(BuildContext context) {
    return Container(
      padding: EdgeInsets.symmetric(horizontal: kDefaultPaddin, vertical: 10),
      width: double.infinity,
      decoration: BoxDecoration(color: Colors.white),
      child: Text('$title',
          style: TextStyle(
              color: Colors.black,
              fontSize: ScreenUtil().setSp(30),
              fontWeight: FontWeight.bold)),
    );
  }
}
