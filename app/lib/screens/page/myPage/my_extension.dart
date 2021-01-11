import 'package:app/components/home/background_component.dart';
import 'package:app/enums/user_video_level.dart';
import 'package:app/routers/navigator_util.dart';
import 'package:flutter/material.dart';
import 'package:flutter_screenutil/screenutil.dart';
import 'package:flutter_svg/svg.dart';

/**
 * 推广中心
 */
class MyExtension extends StatefulWidget {
  @override
  _MyExtensionState createState() => _MyExtensionState();
}

class _MyExtensionState extends State<MyExtension> {
  // TODO : 后端接口获取
  // 当前会员等级
  int userLevel = 4;
  // 当前会员已推广人数
  int userNumberPeople = 5;

  // 进度条总宽度
  double progressBarWidth = 300;
  // 等级进度条左边img
  Image userLevelImgLeft;
  // 等级进度条右边img
  Image userLevelImgRight;
  // 等级进度宽度
  double userWidth;
  // 需要在推广人数
  int userNumberGeneralizations;

  @override
  void initState() {
    // TODO: implement initState
    _getUserLevel();
    super.initState();
  }

  void _getUserLevel() {
    var testMap = userVideoLevelList.where((item) => item.level == userLevel);
    var testMap1 =
        userVideoLevelList.where((item) => item.level == userLevel + 1);
    if (testMap.length != 0) {
      UserVideoLevel item = testMap.first;
      setState(() {
        userWidth =
            ((userNumberPeople / item.maxExtensionAge)) * progressBarWidth;
        userLevelImgLeft = item.imgWegit;
        userNumberGeneralizations = item.maxExtensionAge - userNumberPeople;
      });
    }
    if (testMap1.length != 0) {
      UserVideoLevel item = testMap1.first;
      setState(() {
        userLevelImgRight = item.imgWegit;
      });
    } else {
      UserVideoLevel item = testMap.first;
      setState(() {
        userWidth = progressBarWidth as double;
        userLevelImgRight = item.imgWegit;
        userNumberGeneralizations = 0;
      });
    }
  }

  @override
  Widget build(BuildContext context) {
    final double topPadding = MediaQuery.of(context).padding.top + 15;
    return Scaffold(
        body: BackgroundComponent(
            child: Container(
      child: Column(
        children: [_title(topPadding), _content()],
      ),
    )));
  }

  Widget _content() {
    return Expanded(
      child: Container(
          color: Color.fromRGBO(245, 245, 245, 1),
          padding: EdgeInsets.symmetric(horizontal: ScreenUtil().setWidth(20)),
          child:
              Column(children: [_user_level(), _user_list(), _user_button()])),
    );
  }

  Container _user_button() {
    return Container(
        margin: EdgeInsets.only(top: ScreenUtil().setHeight(30)),
        padding: EdgeInsets.symmetric(
            horizontal: ScreenUtil().setWidth(25),
            vertical: ScreenUtil().setHeight(25)),
        decoration: BoxDecoration(
            borderRadius: BorderRadius.all(Radius.circular(10))),
        child: RaisedButton(
            color: Color.fromRGBO(255, 102, 57, 1),
            textColor: Colors.white,
            shape:
                RoundedRectangleBorder(borderRadius: BorderRadius.circular(10)),
            onPressed: () {},
            child: Container(
              alignment: Alignment.center,
              child:Text("立即推广",style: TextStyle(color: Colors.white))
            )));
  }

  Container _user_level() {
    return Container(
        margin: EdgeInsets.only(top: ScreenUtil().setHeight(30)),
        padding: EdgeInsets.symmetric(
            horizontal: ScreenUtil().setWidth(25),
            vertical: ScreenUtil().setHeight(25)),
        decoration: BoxDecoration(
            color: Colors.white,
            borderRadius: BorderRadius.all(Radius.circular(10))),
        child: Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
          UserLevelImg(),
          SizedBox(
            height: ScreenUtil().setHeight(10),
          ),
          UserLevelBar(
              userLevelImgLeft: userLevelImgLeft,
              progressBarWidth: progressBarWidth,
              userWidth: userWidth,
              userLevelImgRight: userLevelImgRight),
          SizedBox(
            height: ScreenUtil().setHeight(10),
          ),
          UserLevelTips(userNumberGeneralizations: userNumberGeneralizations)
        ]));
  }

  Container _user_list() {
    return Container(
        alignment: Alignment.center,
        margin: EdgeInsets.only(top: ScreenUtil().setHeight(30)),
        padding: EdgeInsets.symmetric(
            horizontal: ScreenUtil().setWidth(25),
            vertical: ScreenUtil().setHeight(25)),
        decoration: BoxDecoration(
            color: Colors.white,
            borderRadius: BorderRadius.all(Radius.circular(10))),
        child: Column(children: [
          Container(
              child: Text("会员升级计划",
                  style: TextStyle(
                      color: Colors.black, fontWeight: FontWeight.bold))),
          SizedBox(
            height: ScreenUtil().setHeight(10),
          ),
          _user_list_item(item: userVideoLevelList[0]),
          _user_list_item(item: userVideoLevelList[1]),
          _user_list_item(item: userVideoLevelList[2]),
          _user_list_item(item: userVideoLevelList[3]),
          _user_list_item(item: userVideoLevelList[4]),
        ]));
  }

  Container _user_list_item({UserVideoLevel item}) {
    return Container(
        margin: EdgeInsets.only(bottom: ScreenUtil().setHeight(30)),
        padding: EdgeInsets.symmetric(
            horizontal: ScreenUtil().setWidth(10),
            vertical: ScreenUtil().setHeight(16)),
        decoration: BoxDecoration(
            border: Border.all(color: Colors.black12, width: 1),
            borderRadius: BorderRadius.all(Radius.circular(10))),
        child: Row(
          children: [
            Expanded(
                child: Row(children: [
              Container(
                margin: EdgeInsets.only(right: ScreenUtil().setWidth(10)),
                width: ScreenUtil().setWidth(30),
                height: ScreenUtil().setHeight(30),
                child: item.imgWegit,
              ),
              Text(item.name, style: TextStyle(color: Colors.black))
            ])),
            Expanded(
                child: Column(
              children: [
                Container(
                    padding: EdgeInsets.only(left: ScreenUtil().setWidth(70)),
                    alignment: Alignment.centerLeft,
                    child: Text("注册会员", style: TextStyle(color: Colors.black))),
                Container(
                  alignment: Alignment.centerLeft,
                  child: Text("享受每日观看影片${item.videoAge}次"),
                ),
              ],
            )),
          ],
        ));
  }

  Container _title(double topPadding) {
    return Container(
      padding: EdgeInsets.symmetric(horizontal: ScreenUtil().setWidth(30)),
      margin: EdgeInsets.only(top: topPadding),
      child: MyPageTitle(),
    );
  }
}

class UserLevelTips extends StatelessWidget {
  const UserLevelTips({
    Key key,
    @required this.userNumberGeneralizations,
  }) : super(key: key);

  final int userNumberGeneralizations;

  @override
  Widget build(BuildContext context) {
    return Container(
        padding: EdgeInsets.symmetric(horizontal: ScreenUtil().setWidth(80)),
        child: Text("距离下一等级还差${userNumberGeneralizations}人",
            style:
                TextStyle(color: Colors.black, fontWeight: FontWeight.bold)));
  }
}

class UserLevelBar extends StatelessWidget {
  const UserLevelBar({
    Key key,
    @required this.userLevelImgLeft,
    @required this.progressBarWidth,
    @required this.userWidth,
    @required this.userLevelImgRight,
  }) : super(key: key);

  final Image userLevelImgLeft;
  final double progressBarWidth;
  final double userWidth;
  final Image userLevelImgRight;

  @override
  Widget build(BuildContext context) {
    return Row(
      children: [
        Container(
          width: ScreenUtil().setWidth(30),
          height: ScreenUtil().setHeight(30),
          child: userLevelImgLeft,
        ),
        Container(
            alignment: Alignment.centerLeft,
            margin: EdgeInsets.symmetric(horizontal: ScreenUtil().setWidth(10)),
            width: ScreenUtil().setWidth(progressBarWidth),
            height: ScreenUtil().setHeight(10),
            decoration: BoxDecoration(color: Color.fromRGBO(219, 219, 219, 1)),
            child: Container(
              width: ScreenUtil().setWidth(userWidth),
              color: Colors.orange,
            )),
        Container(
          width: ScreenUtil().setWidth(30),
          height: ScreenUtil().setHeight(30),
          child: userLevelImgRight,
        ),
      ],
    );
  }
}

class UserLevelImg extends StatelessWidget {
  const UserLevelImg({
    Key key,
  }) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Row(children: [
      Container(
          width: ScreenUtil().setWidth(80),
          height: ScreenUtil().setHeight(80),
          alignment: Alignment.center,
          decoration: BoxDecoration(
              border: Border.all(color: Color.fromRGBO(234, 234, 234, 1)),
              borderRadius: BorderRadius.all(Radius.circular(50))),
          child: ClipOval(
              child: Image.asset(
            'assets/images/portrait.png',
            fit: BoxFit.cover,
          ))),
      Container(
          padding: EdgeInsets.symmetric(
              horizontal: ScreenUtil().setWidth(30),
              vertical: ScreenUtil().setHeight(28)),
          child: Text("用户名称极速TV", style: TextStyle(color: Colors.black87)))
    ]);
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
        mainAxisAlignment: MainAxisAlignment.spaceBetween,
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
          Container(
            alignment: Alignment.center,
            child: Text(
              "推广中心",
              style: TextStyle(
                  color: Colors.white, fontSize: ScreenUtil().setSp(25)),
            ),
          ),
          InkWell(
              child: Container(
                alignment: Alignment.center,
                child: Text(
                  "我的推广",
                  style: TextStyle(
                      color: Colors.white, fontSize: ScreenUtil().setSp(25)),
                ),
              ),
              onTap: () => {print("我的推广")})
        ],
      ),
    );
  }
}
