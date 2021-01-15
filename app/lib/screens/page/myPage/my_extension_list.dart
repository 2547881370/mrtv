import 'package:app/components/home/background_component.dart';
import 'package:app/routers/navigator_util.dart';
import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';
import 'package:flutter_screenutil/screenutil.dart';
import 'package:flutter_svg/svg.dart';
import 'package:pull_to_refresh/pull_to_refresh.dart';

/**
 * 推广中心table
 */

class ItemTable {
  String userName;
  String id;
  String time;
  bool borderStatus;
  ItemTable({this.userName, this.id, this.time, this.borderStatus = false});
}

class MyExtensionList extends StatefulWidget {
  @override
  _MyExtensionListState createState() => _MyExtensionListState();
}

class _MyExtensionListState extends State<MyExtensionList> {
  RefreshController _refreshController =
      RefreshController(initialRefresh: false);

  List<ItemTable> tableData = [
    ItemTable(
        userName: '用户名',
        id: 'ID',
        time: '2020-01-01 00:00:00',
        borderStatus: true),
    ItemTable(userName: '极速TV1', id: '1', time: '2020-01-01 00:00:00'),
    ItemTable(userName: '极速TV2', id: '2', time: '2020-01-01 00:00:00'),
    ItemTable(userName: '极速TV3', id: '3', time: '2020-01-01 00:00:00'),
    ItemTable(userName: '极速TV4', id: '4', time: '2020-01-01 00:00:00'),
    ItemTable(userName: '极速TV1', id: '1', time: '2020-01-01 00:00:00'),
    ItemTable(userName: '极速TV2', id: '2', time: '2020-01-01 00:00:00'),
    ItemTable(userName: '极速TV3', id: '3', time: '2020-01-01 00:00:00'),
    ItemTable(userName: '极速TV4', id: '4', time: '2020-01-01 00:00:00'),
    ItemTable(userName: '极速TV1', id: '1', time: '2020-01-01 00:00:00'),
    ItemTable(userName: '极速TV2', id: '2', time: '2020-01-01 00:00:00'),
    ItemTable(userName: '极速TV3', id: '3', time: '2020-01-01 00:00:00'),
  ];

  List<Widget> _buildList() {
    return tableData.map((b) {
      return _item(item: b);
    }).toList();
  }

  void _onRefresh() async {
    // TODO : 下拉回调

    // 延时器
    await Future.delayed(Duration(milliseconds: 1000));

    if (tableData.length > 1) {
      setState(() {
        tableData.removeLast();
      });
    }

    // 刷新完成,控制器结束
    _refreshController.refreshCompleted();
  }

  Widget buildHeader(BuildContext context, RefreshStatus mode) {
    return Container(
        alignment: Alignment.center,
        height: ScreenUtil().setHeight(50),
        child: Text(mode == RefreshStatus.idle
            ? "下拉刷新"
            : mode == RefreshStatus.refreshing
                ? "刷新中..."
                : mode == RefreshStatus.canRefresh
                    ? "可以松手了!"
                    : mode == RefreshStatus.completed ? "刷新成功!" : "刷新失败"));
  }

  @override
  Widget build(BuildContext context) {
    final double topPadding = MediaQuery.of(context).padding.top + 15;
    return Scaffold(
      body: BackgroundComponent(
          child: Column(
        children: [_title(topPadding), _content()],
      )),
    );
  }

  Widget _content() {
    return Expanded(
        child: Container(
      padding: EdgeInsets.symmetric(horizontal: ScreenUtil().setWidth(10)),
      decoration: BoxDecoration(color: Color.fromRGBO(245, 245, 245, 1)),
      child: Container(
        padding: EdgeInsets.symmetric(horizontal: ScreenUtil().setWidth(10)),
        decoration: BoxDecoration(color: Colors.white),
        child: MediaQuery.removePadding(
            removeTop: true,
            context: context,
            child: SmartRefresher(
              enablePullDown: true,
              header: CustomHeader(builder: buildHeader),
              controller: _refreshController,
              child: ListView(children: _buildList()),
              onRefresh: _onRefresh,
            )),
      ),
    ));
  }

  Container _item({ItemTable item}) {
    return Container(
        padding: EdgeInsets.symmetric(vertical: ScreenUtil().setHeight(28)),
        decoration: BoxDecoration(
          border: item.borderStatus
              ? Border(
                  bottom: BorderSide(
                      width: 2, color: Color.fromRGBO(234, 244, 248, 1)))
              : Border(),
        ),
        child: Row(children: [
          Expanded(
              child: Container(
            alignment: Alignment.center,
            child: Text(item.userName,
                style: TextStyle(fontWeight: FontWeight.bold)),
          )),
          Expanded(
              child: Container(
            alignment: Alignment.center,
            child: Text(item.id, style: TextStyle(fontWeight: FontWeight.bold)),
          )),
          Expanded(
              child: Container(
            alignment: Alignment.center,
            child:
                Text(item.time, style: TextStyle(fontWeight: FontWeight.bold)),
          )),
        ]));
  }

  Container _title(double topPadding) {
    return Container(
      padding: EdgeInsets.symmetric(horizontal: ScreenUtil().setWidth(30)),
      margin: EdgeInsets.only(top: topPadding),
      child: MyPageTitle(),
    );
  }
}

class MyPageTitle extends StatelessWidget {
  const MyPageTitle({
    Key key,
  }) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Container(
      width: ScreenUtil().setWidth(750),
      height: ScreenUtil().setHeight(90),
      child: Row(
        children: [
          Container(
              width: ScreenUtil().setWidth(40),
              height: ScreenUtil().setHeight(40),
              child: InkWell(
                  onTap: () {
                    NavigatorUtil.goBack(context);
                  },
                  child: SvgPicture.asset("assets/icons/fanhui.svg",
                      color: Colors.white))),
          Expanded(
            child: Container(
              alignment: Alignment.center,
              child: Text(
                "我的推广",
                style: TextStyle(
                    color: Colors.white, fontSize: ScreenUtil().setSp(25)),
              ),
            ),
          ),
          SizedBox(
            width: ScreenUtil().setWidth(10),
          ),
        ],
      ),
    );
  }
}
