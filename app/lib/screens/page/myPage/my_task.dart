import 'package:app/components/home/background_component.dart';
import 'package:app/routers/navigator_util.dart';
import "package:flutter/material.dart";
import 'package:flutter_screenutil/screenutil.dart';
import 'package:flutter_svg/svg.dart';

class MyTaskItem {
  String iconStr;
  String title;
  int number;
  Function fn;
  bool status;
  MyTaskItem({this.iconStr, this.title, this.number, this.fn, this.status});
}

class MyTask extends StatefulWidget {
  @override
  _MyTaskState createState() => _MyTaskState();
}

class _MyTaskState extends State<MyTask> {
  List<MyTaskItem> myTaskList = [
    MyTaskItem(
        iconStr: "assets/icons/my_qd.svg",
        title: "签到",
        number: 10,
        fn: () {
          print("签到");
        },
        status: true),
    MyTaskItem(
        iconStr: "assets/icons/my_pf.svg",
        title: "评分",
        number: 10,
        fn: () {
          print("评分");
        },
        status: false),
    MyTaskItem(
        iconStr: "assets/icons/my_tm.svg",
        title: "弹幕",
        number: 10,
        fn: () {
          print("弹幕");
        },
        status: true),
    MyTaskItem(
        iconStr: "assets/icons/my_pl.svg",
        title: "评论",
        number: 10,
        fn: () {
          print("评论");
        },
        status: true),
    MyTaskItem(
        iconStr: "assets/icons/my_gy.svg",
        title: "观影30分钟",
        number: 10,
        fn: () {
          print("观影30分钟");
        },
        status: true),
    MyTaskItem(
        iconStr: "assets/icons/my_fx.svg",
        title: "分享",
        number: 10,
        fn: () {
          print("分享");
        },
        status: false),
  ];

  @override
  Widget build(BuildContext context) {
    final double topPadding = MediaQuery.of(context).padding.top + 15;
    return Scaffold(
        body: BackgroundComponent(
            child: Container(
                child: Column(children: [_title(topPadding), _content()]))));
  }

  Expanded _content() {
    return Expanded(
        child: Container(
            alignment: Alignment.center,
            decoration: BoxDecoration(color: Colors.white),
            child: Column(children: [
              CustomTabBar(),
              Expanded(
                  child: Container(
                      decoration: BoxDecoration(color: Colors.grey[200]),
                      child: MediaQuery.removePadding(
                        removeTop: true,
                        context: context,
                        child: ListView.builder(
                            itemCount: myTaskList.length,
                            itemBuilder: (content, index) =>
                                MyTasskContent(item: myTaskList[index])),
                      )))
            ])));
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
              "任务中心",
              style: TextStyle(
                  color: Colors.white, fontSize: ScreenUtil().setSp(25)),
            ),
          )),
          Container(
            width: ScreenUtil().setWidth(40),
            height: ScreenUtil().setHeight(40),
          )
        ],
      ),
    );
  }
}

class CustomTabBar extends StatefulWidget {
  @override
  _CustomTabBarState createState() => _CustomTabBarState();
}

class _CustomTabBarState extends State<CustomTabBar>
    with SingleTickerProviderStateMixin {
  final tabs = ["每日任务", "福利任务"];
  TabController _tabController;
  final GlobalKey globalKey = GlobalKey();

  @override
  void initState() {
    super.initState();
    _tabController = TabController(vsync: this, length: tabs.length);
  }

  @override
  void dispose() {
    _tabController.dispose();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    return TabBar(
      onTap: (tab) {
        // loginModel.setLoginCurrentIndex(tab);
      },
      isScrollable: true,
      indicatorSize: TabBarIndicatorSize.label,
      labelStyle: TextStyle(
          fontSize: ScreenUtil().setSp(20), fontWeight: FontWeight.bold),
      controller: _tabController,
      labelColor: Colors.orange,
      indicatorWeight: 3,
      indicatorPadding: EdgeInsets.symmetric(horizontal: 10),
      unselectedLabelColor: Colors.black,
      indicatorColor: Colors.orangeAccent,
      tabs: tabs
          .map((e) => Container(
                width: ScreenUtil().setWidth(270),
                alignment: Alignment.center,
                child: Tab(text: e),
              ))
          .toList(),
    );
    ;
  }
}

class MyTasskContent extends StatefulWidget {
  MyTaskItem item;
  MyTasskContent({this.item});
  @override
  _MyTasskContentState createState() => _MyTasskContentState();
}

class _MyTasskContentState extends State<MyTasskContent> {
  @override
  Widget build(BuildContext context) {
    return Container(
        padding: EdgeInsets.only(
            left: ScreenUtil().setWidth(30),
            right: ScreenUtil().setWidth(30),
            top: ScreenUtil().setHeight(20)),
        child: Column(children: [
          Container(
              padding: EdgeInsets.symmetric(
                  horizontal: ScreenUtil().setWidth(30),
                  vertical: ScreenUtil().setHeight(20)),
              alignment: Alignment.center,
              decoration: BoxDecoration(
                color: Colors.white,
                borderRadius: BorderRadius.circular(10),
              ),
              child: Row(
                  mainAxisAlignment: MainAxisAlignment.spaceBetween,
                  children: [
                    _myTasskContentRow(),
                    widget.item.status
                        ? _myTasskContentButtonShow()
                        : _myTasskContentButtonHide()
                  ]))
        ]));
  }

  RaisedButton _myTasskContentButtonHide() {
    return RaisedButton(
        color: Color.fromRGBO(236, 236, 236, 1),
        textColor: Colors.black26,
        shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(40)),
        onPressed: widget.item.fn,
        child: Container(child: Text("已完成")));
  }

  RaisedButton _myTasskContentButtonShow() {
    return RaisedButton(
        color: Color.fromRGBO(255, 102, 57, 1),
        textColor: Colors.white,
        shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(40)),
        onPressed: widget.item.fn,
        child: Container(child: Text("去做任务")));
  }

  Row _myTasskContentRow() {
    return Row(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [
        Container(
            margin: EdgeInsets.only(right: ScreenUtil().setWidth(20)),
            height: ScreenUtil().setHeight(45),
            width: ScreenUtil().setWidth(45),
            child: SvgPicture.asset(
              widget.item.iconStr,
            )),
        Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
          Text(widget.item.title,
              style:
                  TextStyle(color: Colors.black, fontWeight: FontWeight.bold)),
          Row(crossAxisAlignment: CrossAxisAlignment.start, children: [
            Container(
                margin: EdgeInsets.only(right: ScreenUtil().setWidth(5)),
                width: ScreenUtil().setWidth(16),
                height: ScreenUtil().setHeight(16),
                child: SvgPicture.asset(
                  "assets/icons/my_jb.svg",
                )),
            Text("+${widget.item.number}",
                style: TextStyle(
                    color: Color.fromRGBO(255, 102, 57, 1),
                    fontWeight: FontWeight.bold))
          ])
        ])
      ],
    );
  }
}
