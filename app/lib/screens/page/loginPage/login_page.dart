import 'package:app/routers/navigator_util.dart';
import 'package:app/view_model/login_model.dart';
import 'package:flutter/material.dart';
import 'package:flutter_screenutil/screenutil.dart';
import 'package:flutter_svg/svg.dart';
import 'package:provider/provider.dart';

import '../../../constants.dart';

class LoginPage extends StatefulWidget {
  @override
  _LoginPageState createState() => _LoginPageState();
}

class _LoginPageState extends State<LoginPage> {
  @override
  Widget build(BuildContext context) {
    final double topPadding =
        MediaQuery.of(context).padding.top + kDefaultPaddin;
    final double _kDefaultPaddin = kDefaultPaddin + 10;
    return Scaffold(
        body: Container(
            child: Stack(
      children: [
        LoginPageLayout(
            topPadding: topPadding, kDefaultPaddin: _kDefaultPaddin),
        LoginPagePositioned(kDefaultPaddin: _kDefaultPaddin)
      ],
    )));
  }
}

class LoginPagePositioned extends StatefulWidget {
  var kDefaultPaddin;
  LoginPagePositioned({Key key, this.kDefaultPaddin}) : super(key: key);

  @override
  _LoginPagePositionedState createState() => _LoginPagePositionedState();
}

class _LoginPagePositionedState extends State<LoginPagePositioned> {
  Map<int, Function> loginModelNameMap = {
    0: ({Function callback}) {
      print("登录");
      callback();
    },
    1: ({Function callback}) {
      print("注册,请求api");
      callback();
    }
  };

  @override
  Widget build(BuildContext context) {
    return Positioned(
      top: ScreenUtil().setHeight(300),
      child: Container(
          width: ScreenUtil().setWidth(650),
          height: ScreenUtil().setHeight(480),
          margin: EdgeInsets.only(
              left: widget.kDefaultPaddin, right: widget.kDefaultPaddin),
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
              Container(
                  height: ScreenUtil().setHeight(97),
                  child: Consumer<LoginModel>(
                      builder: (context, loginModel, child) {
                    return loginModel.customTabBar;
                  })),
              loginPagePositionedInput(),
              customMaterialButton(context: context),
              SizedBox(height: ScreenUtil().setHeight(30)),
              loginPagePositionedTitle()
            ],
          )),
    );
  }

  Container loginPagePositionedTitle() {
    return Container(
        height: ScreenUtil().setHeight(60),
        child: Center(
            child: Consumer<LoginModel>(builder: (context, loginModel, child) {
          return Text(
              loginModel.loginModelNameMap[loginModel.currentIndex]
                  .suggestiveLanguage,
              style: TextStyle(
                  color: Colors.black54, fontSize: ScreenUtil().setSp(20)));
        })));
  }

  Container loginPagePositionedInput() {
    return Container(
        margin: EdgeInsets.only(top: 10),
        child: Column(
          children: [
            Container(
                height: ScreenUtil().setHeight(65),
                margin: EdgeInsets.symmetric(
                    horizontal: kDefaultPaddin, vertical: 10),
                padding: EdgeInsets.symmetric(horizontal: 10),
                decoration: BoxDecoration(
                    color: Color.fromRGBO(240, 240, 240, 1),
                    borderRadius: BorderRadius.all(Radius.circular(10))),
                alignment: Alignment.center,
                child: TextField(
                  style: TextStyle(color: Colors.black),
                  showCursor: true,
                  cursorWidth: 2,
                  cursorRadius: Radius.circular(10),
                  cursorColor: Colors.orange,
                  decoration: InputDecoration(
                    hintText: '请输入手机号',
                    hintStyle: TextStyle(
                        color: Colors.black12,
                        height: 0,
                        fontSize: ScreenUtil().setSp(30)),
                    border: InputBorder.none,
                  ),
                )),
            Container(
                height: ScreenUtil().setHeight(65),
                margin: EdgeInsets.symmetric(
                    horizontal: kDefaultPaddin, vertical: 10),
                padding: EdgeInsets.symmetric(horizontal: 10),
                decoration: BoxDecoration(
                    color: Color.fromRGBO(240, 240, 240, 1),
                    borderRadius: BorderRadius.all(Radius.circular(10))),
                alignment: Alignment.center,
                child: TextField(
                  obscureText: true,
                  style: TextStyle(color: Colors.black),
                  showCursor: true,
                  cursorWidth: 2,
                  cursorRadius: Radius.circular(10),
                  cursorColor: Colors.orange,
                  decoration: InputDecoration(
                    hintText: '请输入密码',
                    hintStyle: TextStyle(
                        color: Colors.black12,
                        height: 0,
                        fontSize: ScreenUtil().setSp(30)),
                    border: InputBorder.none,
                  ),
                ))
          ],
        ));
  }

  Container customMaterialButton({BuildContext context}) {
    return Container(
        width: ScreenUtil().setWidth(750),
        padding: EdgeInsets.symmetric(horizontal: kDefaultPaddin),
        child: Consumer<LoginModel>(builder: (context, loginModel, child) {
          return MaterialButton(
              height: 40,
              elevation: 5,
              color: Color.fromRGBO(255, 125, 57, 1),
              textColor: Colors.white,
              padding: EdgeInsets.all(8),
              child: Text(
                  loginModel
                      .loginModelNameMap[loginModel.currentIndex].buttonName,
                  style: TextStyle(fontSize: ScreenUtil().setSp(30))),
              shape: RoundedRectangleBorder(
                  borderRadius: BorderRadius.all(Radius.circular(10))),
              onPressed: () =>
                  loginModelNameMap[loginModel.currentIndex](callback: () {
                    loginModel.setLoginCurrentIndex(0);
                    loginModel.setState(0);
                  }));
        }));
  }
}

class LoginPageLayout extends StatelessWidget {
  const LoginPageLayout({
    Key key,
    @required this.topPadding,
    @required double kDefaultPaddin,
  })  : _kDefaultPaddin = kDefaultPaddin,
        super(key: key);

  final double topPadding;
  final double _kDefaultPaddin;

  @override
  Widget build(BuildContext context) {
    return Column(
      children: [
        Container(
            width: ScreenUtil().setWidth(750),
            height: ScreenUtil().setHeight(400),
            decoration: BoxDecoration(color: Color.fromRGBO(255, 125, 57, 1)),
            child: Container(
                margin: EdgeInsets.only(top: topPadding),
                width: ScreenUtil().setWidth(750),
                height: ScreenUtil().setHeight(66),
                padding: EdgeInsets.symmetric(horizontal: _kDefaultPaddin),
                child: Stack(
                  children: [
                    Container(
                        width: ScreenUtil().setWidth(40),
                        height: ScreenUtil().setHeight(40),
                        child: InkWell(
                            onTap: () {
                              NavigatorUtil.goBack(context);
                            },
                            child: SvgPicture.asset(
                              "assets/icons/fanhui.svg",
                            )))
                  ],
                ))),
        Expanded(
            child: Container(
                width: ScreenUtil().setWidth(750),
                decoration: BoxDecoration(color: Colors.white))),
      ],
    );
  }
}

class CustomTabBar extends StatefulWidget {
  @override
  _CustomTabBarState createState() => _CustomTabBarState();
}

class _CustomTabBarState extends State<CustomTabBar>
    with SingleTickerProviderStateMixin {
  final tabs = ['登录', '注册'];
  TabController _tabController;

  @override
  void initState() {
    super.initState();
    _tabController = TabController(vsync: this, length: tabs.length);
  }

  @override
  void dispose() {
    print("dispose");
    _tabController.dispose();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    print("build");
    return Selector<LoginModel,int>(
      selector: (context, value) => value.state,
      builder: (context, loginModel, child) {
      // _tabController.index = 0;
      print("132123");
      return TabBar(
        onTap: (tab) {
          // loginModel.setLoginCurrentIndex(tab);
          context.read<LoginModel>().setLoginCurrentIndex(tab);
        },
        isScrollable: true,
        indicatorSize: TabBarIndicatorSize.label,
        labelStyle: TextStyle(
            fontSize: ScreenUtil().setSp(35), fontWeight: FontWeight.bold),
        controller: _tabController,
        labelColor: Colors.orange,
        indicatorWeight: 3,
        indicatorPadding: EdgeInsets.symmetric(horizontal: 10),
        unselectedLabelColor: Colors.black,
        indicatorColor: Colors.orangeAccent,
        tabs: tabs
            .map((e) => Container(
                  width: ScreenUtil().setWidth(240),
                  child: Tab(text: e),
                ))
            .toList(),
      );
    });
  }
}
