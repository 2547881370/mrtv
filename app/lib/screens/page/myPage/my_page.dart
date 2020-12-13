import 'package:app/routers/navigator_util.dart';
import 'package:flutter/material.dart';
import 'package:app/components/home/background_component.dart';
import 'package:flutter_screenutil/screenutil.dart';
import 'package:flutter_svg/svg.dart';

import '../../../constants.dart';

class MyPage extends StatefulWidget {
  MyPage({Key key}) : super(key: key);

  @override
  _MyPageState createState() => _MyPageState();
}

class _MyPageState extends State<MyPage> {
  @override
  Widget build(BuildContext context) {
    final double topPadding =
        MediaQuery.of(context).padding.top + kDefaultPaddin + 15;
    return Scaffold(
      body: BackgroundComponent(
        child: Column(
          children: [
            Container(
              margin: EdgeInsets.only(top: topPadding),
              child: MyPageTitle(),
            ),
            Expanded(
                child: ListView(
              children: <Widget>[
                MyPageShowUserInfo(),
                MyPageListTask(),
                MyPageAdvertisement(),
                MyPageContent(),
              ],
            ))
          ],
        ),
      ),
    );
  }
}

class MyPageContent extends StatelessWidget {
  const MyPageContent({
    Key key,
  }) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Container(
        color: Colors.white,
        child: Column(children: <Widget>[
          buildContainerItem(
              title: "播放记录",
              icon: SvgPicture.asset(
                "assets/icons/bfjl.svg",
              ),
              fn: () {
                print("播放记录");
              }),
          buildContainerItem(
              title: "我的推广",
              icon: SvgPicture.asset(
                "assets/icons/wdtg.svg",
              ),
              fn: () {
                print("我的推广");
              }),
          buildContainerItem(
              title: "公告通知",
              icon: SvgPicture.asset(
                "assets/icons/ggtz.svg",
              ),
              fn: () {
                print("公告通知");
              }),
          buildContainerItem(
              title: "我的缓存",
              icon: SvgPicture.asset(
                "assets/icons/wdhc.svg",
              ),
              fn: () {
                print("我的缓存");
              }),
          buildContainerItem(
              title: "我的收藏",
              icon: SvgPicture.asset(
                "assets/icons/wdsc.svg",
              ),
              fn: () {
                print("我的收藏");
              }),
          buildContainerItem(
              title: "清楚缓存",
              icon: SvgPicture.asset(
                "assets/icons/qchc.svg",
              ),
              fn: () {
                print("清楚缓存");
              }),
        ]));
  }

  InkWell buildContainerItem({String title, SvgPicture icon, Function fn}) {
    return InkWell(
        onTap: fn,
        child: Container(
            width: ScreenUtil().setWidth(750),
            height: ScreenUtil().setHeight(80),
            margin: EdgeInsets.only(
                bottom: 1, left: kDefaultPaddin, right: kDefaultPaddin + 10),
            decoration: BoxDecoration(
                color: Colors.white,
                border: Border(
                  bottom: BorderSide(
                    width: 0.5, //宽度
                    color: Colors.black.withOpacity(0.1), //边框颜色
                  ),
                )),
            child: Row(
              mainAxisAlignment: MainAxisAlignment.spaceBetween,
              children: [
                Container(
                    width: ScreenUtil().setWidth(150),
                    child: Row(
                        mainAxisAlignment: MainAxisAlignment.spaceBetween,
                        children: [
                          Container(
                              width: ScreenUtil().setWidth(30),
                              height: ScreenUtil().setHeight(30),
                              child: icon),
                          Text(title,
                              style: TextStyle(fontWeight: FontWeight.bold))
                        ])),
                Container(
                    width: ScreenUtil().setWidth(100),
                    child: Row(
                        mainAxisAlignment: MainAxisAlignment.spaceBetween,
                        children: [
                          Text("更多",
                              style: TextStyle(
                                  color: Colors.black.withOpacity(0.3),
                                  fontWeight: FontWeight.bold)),
                          Container(
                              width: ScreenUtil().setWidth(30),
                              height: ScreenUtil().setHeight(30),
                              child: SvgPicture.asset("assets/icons/listfh.svg",
                                  color: Colors.black.withOpacity(0.3)))
                        ])),
              ],
            )));
  }
}

class MyPageAdvertisement extends StatelessWidget {
  const MyPageAdvertisement({
    Key key,
  }) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Container(
        decoration: BoxDecoration(
            color: Colors.white,
            border: Border(
              bottom: BorderSide(
                width: 1, //宽度
                color: Colors.white, //边框颜色
              ),
            )),
        child: InkWell(
            onTap: () {
              print("提升会员等级");
            },
            child: Container(
              width: ScreenUtil().setWidth(750),
              height: ScreenUtil().setHeight(175),
              margin: EdgeInsets.only(
                  left: kDefaultPaddin, right: kDefaultPaddin + 10),
              decoration: BoxDecoration(
                borderRadius: BorderRadius.all(Radius.circular(20)),
                image: new DecorationImage(
                  image:
                      new ExactAssetImage('assets/images/huiyuanchongzhi.jpg'),
                  fit: BoxFit.fill,
                ),
              ),
            )));
  }
}

class MyPageListTask extends StatelessWidget {
  const MyPageListTask({
    Key key,
  }) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Container(
      width: ScreenUtil().setWidth(750),
      child: Stack(
        children: [myPageListTaskBox(), myPageListTaskPositioned()],
      ),
    );
  }

  Column myPageListTaskBox() {
    return Column(
      children: [
        MyPageButton(),
        Container(
            margin: EdgeInsets.only(top: 9),
            height: ScreenUtil().setHeight(140),
            decoration: BoxDecoration(
                color: Colors.white,
                border: Border(
                  bottom: BorderSide(
                    width: 1, //宽度
                    color: Colors.white, //边框颜色
                  ),
                ))),
      ],
    );
  }

  Positioned myPageListTaskPositioned() {
    return Positioned(
      top: ScreenUtil().setHeight(80),
      child: Container(
          margin: EdgeInsets.symmetric(horizontal: kDefaultPaddin),
          width: ScreenUtil().setWidth(650),
          padding: EdgeInsets.only(top: 25),
          decoration: BoxDecoration(
              color: Colors.white,
              borderRadius: BorderRadius.all(Radius.circular(20)),
              boxShadow: [
                BoxShadow(
                    color: Colors.black38,
                    offset: Offset(1, 1),
                    blurRadius: 10,
                    spreadRadius: 1)
              ]),
          child: Column(
            children: [
              myPageListTaskPositionedIcon(),
              myPageListTaskPositionedText()
            ],
          )),
    );
  }

  Container myPageListTaskPositionedText() {
    return Container(
        padding: EdgeInsets.symmetric(horizontal: kDefaultPaddin - 10),
        margin: EdgeInsets.symmetric(vertical: 5),
        child: Row(
          mainAxisAlignment: MainAxisAlignment.spaceBetween,
          children: [
            Text("剩余积分 0",
                style: TextStyle(
                    color: Colors.orange,
                    fontWeight: FontWeight.bold,
                    fontSize: ScreenUtil().setSp(20))),
            Text("观影次数 0",
                style: TextStyle(
                    color: Colors.orange,
                    fontWeight: FontWeight.bold,
                    fontSize: ScreenUtil().setSp(20))),
            Text("剩余金币 0",
                style: TextStyle(
                    color: Colors.orange,
                    fontWeight: FontWeight.bold,
                    fontSize: ScreenUtil().setSp(20))),
          ],
        ));
  }

  Row myPageListTaskPositionedIcon() {
    return Row(
      mainAxisAlignment: MainAxisAlignment.spaceAround,
      children: [
        myPageListTaskListItem(
            backgroundColor: Color.fromRGBO(255, 0, 59, 1),
            title: "任务中心",
            icon: SvgPicture.asset(
              "assets/icons/rw.svg",
            ),
            fn: () {
              print("任务中心");
            }),
        myPageListTaskListItem(
            backgroundColor: Color.fromRGBO(255, 118, 0, 1),
            title: "专属分享",
            icon: SvgPicture.asset(
              "assets/icons/fl.svg",
            ),
            fn: () {
              print("专属分享");
            }),
        myPageListTaskListItem(
            backgroundColor: Color.fromRGBO(255, 0, 196, 1),
            title: "专属客服",
            icon: SvgPicture.asset(
              "assets/icons/kf.svg",
            ),
            fn: () {
              print("专属客服");
            }),
        myPageListTaskListItem(
            backgroundColor: Color.fromRGBO(0, 178, 255, 1),
            title: "金币提现",
            icon: SvgPicture.asset(
              "assets/icons/qd.svg",
            ),
            fn: () {
              print("金币提现");
            }),
      ],
    );
  }

  /**
   * @params [Color] backgroundColor 背景颜色
   * @params [String] title 显示文字
   * @params [SvgPicture] icon 字体图标
   * @params [Function] fn 点击回调函数
   */
  Container myPageListTaskListItem(
      {Color backgroundColor, String title, SvgPicture icon, Function fn}) {
    return Container(
        child: InkWell(
      onTap: fn,
      child: Container(
          height: ScreenUtil().setHeight(117),
          child: Column(
            mainAxisAlignment: MainAxisAlignment.spaceAround,
            children: [
              Container(
                  width: ScreenUtil().setWidth(60),
                  height: ScreenUtil().setHeight(60),
                  alignment: Alignment.center,
                  decoration: ShapeDecoration(
                    shape: CircleBorder(
                      side: BorderSide(width: 1.0, color: Colors.transparent),
                    ),
                    color: backgroundColor,
                  ),
                  child: Stack(children: [
                    Container(
                        width: ScreenUtil().setWidth(30),
                        height: ScreenUtil().setHeight(30),
                        child: icon)
                  ])),
              Text(title,
                  style: TextStyle(
                      color: Colors.black,
                      fontWeight: FontWeight.bold,
                      fontSize: ScreenUtil().setSp(25)))
            ],
          )),
    ));
  }
}

class MyPageButton extends StatelessWidget {
  const MyPageButton({
    Key key,
  }) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Container(
      height: ScreenUtil().setHeight(136),
      padding: EdgeInsets.only(left: kDefaultPaddin, right: kDefaultPaddin),
      child: Row(
        mainAxisAlignment: MainAxisAlignment.spaceBetween,
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          myPageButtonItem(
              title: "在线充值积分",
              fn: () {
                print("在线充值积分");
              }),
          myPageButtonItem(
              title: "卡密充值积分",
              fn: () {
                print("卡密充值积分");
              }),
          myPageButtonItem(
              title: "积分升级会员",
              fn: () {
                print("积分升级会员");
              }),
        ],
      ),
    );
  }

  Expanded myPageButtonItem({String title, Function fn}) {
    return Expanded(
      child: Container(
        height: ScreenUtil().setHeight(60),
        margin: EdgeInsets.only(right: ScreenUtil().setWidth(20)),
        decoration: BoxDecoration(
            borderRadius: BorderRadius.all(Radius.circular(10)),
            color: Colors.deepOrangeAccent.withOpacity(0.8)),
        alignment: Alignment.center,
        child: InkWell(
            onTap: fn,
            child: Text(title,
                style: TextStyle(
                    color: Colors.white, fontWeight: FontWeight.bold))),
      ),
    );
  }
}

class MyPageShowUserInfo extends StatelessWidget {
  const MyPageShowUserInfo({
    Key key,
  }) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Container(
      padding: EdgeInsets.symmetric(horizontal: kDefaultPaddin),
      margin: EdgeInsets.only(top: ScreenUtil().setHeight(15)),
      width: ScreenUtil().setWidth(750),
      height: ScreenUtil().setHeight(167),
      child: Row(
        mainAxisAlignment: MainAxisAlignment.spaceBetween,
        children: [myPageShowUserInfoImg(context : context), myPageShowUserInfoSignIn()],
      ),
    );
  }

  Expanded myPageShowUserInfoSignIn() {
    return Expanded(
      child: Stack(
        children: [
          Positioned(
            right: ScreenUtil().setWidth(kDefaultPaddin),
            top: ScreenUtil().setHeight(kDefaultPaddin),
            child: Container(
              width: ScreenUtil().setWidth(70),
              height: ScreenUtil().setHeight(70),
              alignment: Alignment.center,
              decoration: ShapeDecoration(
                shadows: [
                  const BoxShadow(
                      color: Colors.orangeAccent,
                      offset: Offset(0, 0),
                      blurRadius: 2,
                      spreadRadius: 1),
                ],
                shape: CircleBorder(
                  side: BorderSide(width: 2.0, color: Colors.white),
                ),
                color: Colors.orange.withOpacity(0.6),
              ),
              child: Text("签到",
                  style: TextStyle(
                      color: Colors.white,
                      fontSize: ScreenUtil().setSp(20),
                      fontWeight: FontWeight.w400)),
            ),
          )
        ],
      ),
    );
  }

  InkWell myPageShowUserInfoImg({BuildContext context}) {
    return InkWell(
        onTap: () {
          NavigatorUtil.jump(context, '/login');
        },
        child: Container(
          width: ScreenUtil().setWidth(320),
          child: Row(
            mainAxisAlignment: MainAxisAlignment.spaceBetween,
            children: [
              Container(
                alignment: Alignment.center,
                width: ScreenUtil().setWidth(110),
                height: ScreenUtil().setHeight(110),
                decoration: ShapeDecoration(
                  shadows: [
                    const BoxShadow(
                        color: Colors.orangeAccent,
                        offset: Offset(0, 0),
                        blurRadius: 2,
                        spreadRadius: 1),
                  ],
                  shape: CircleBorder(
                    side: BorderSide(width: 1.0, color: Colors.orangeAccent),
                  ),
                  color: Colors.white,
                ),
                child: SvgPicture.asset(
                  "assets/icons/tx1.svg",
                ),
              ),
              Container(
                alignment: Alignment.center,
                child: Text("登录 | 注册",
                    style: TextStyle(
                        color: Colors.white,
                        fontSize: ScreenUtil().setSp(35),
                        fontWeight: FontWeight.bold)),
              )
            ],
          ),
        ));
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
      alignment: Alignment.center,
      decoration: BoxDecoration(
        color: Colors.deepOrangeAccent.withOpacity(0.1),
      ),
      child: Text(
        "我的",
        style: TextStyle(color: Colors.white, fontSize: ScreenUtil().setSp(35)),
      ),
    );
  }
}
