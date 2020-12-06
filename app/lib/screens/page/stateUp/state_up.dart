//启动页面
import 'dart:async';

import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';
import 'package:app/screens/home.dart';
// 屏幕和字体适配
import 'package:flutter_screenutil/flutter_screenutil.dart';
import 'package:url_launcher/url_launcher.dart';

import "package:app/constants.dart";

class LaunchPage extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return LaunchPageWidget();
  }
}

class LaunchPageWidget extends StatefulWidget {
  @override
  State<StatefulWidget> createState() => LaunchState();
}

class LaunchState extends State<LaunchPageWidget> {
  final String launchImage =
      "https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1093264713,2279663012&fm=26&gp=0.jpg";
  int _countdown = 3;
  Timer _countdownTimer;
  final String tagUrl = "http://www.baidu.com/";

  @override
  void initState() {
    super.initState();
    _startRecordTime();
    print('初始化启动页面');
  }

  @override
  void dispose() {
    super.dispose();
    print('启动页面结束');
    if (_countdownTimer != null && _countdownTimer.isActive) {
      _countdownTimer.cancel();
      _countdownTimer = null;
    }
  }

  void _startRecordTime() {
    _countdownTimer = Timer.periodic(Duration(seconds: 1), (timer) {
      setState(() {
        if (_countdown <= 1) {
          _pathRouter();
        } else {
          _countdown -= 1;
        }
      });
    });
  }

  void _pathRouter() {
    Navigator.of(context).pop();
    Navigator.of(context).push(MaterialPageRoute(builder: (context) {
      return Home();
    }));
    _countdownTimer.cancel();
    _countdownTimer = null;
  }

  _launchUrl(String url) async {
    if (await canLaunch(url)) {
      await launch(url);
    }
  }

  @override
  Widget build(BuildContext context) {
     // It provide us total height and width
    final double topPadding = MediaQuery.of(context).padding.top;
    return Scaffold(
      body: MediaQuery.removePadding(
          context: context,
          removeTop: true,
          child: GestureDetector(
              onTap: () => {_launchUrl(tagUrl)},
              child: Stack(
                fit: StackFit.expand,
                children: <Widget>[
                  Image.network(launchImage, fit: BoxFit.fill),
                  Positioned(
                    top: topPadding + kDefaultPaddin,
                    right: kDefaultPaddin,
                    child: Container(
                      padding: EdgeInsets.fromLTRB(10, 5, 10, 5),
                      decoration: BoxDecoration(
                        borderRadius: BorderRadius.circular(10),
                        color: Colors.black12,
                      ),
                      child: GestureDetector(
                          child: RichText(
                            text: TextSpan(children: <TextSpan>[
                              TextSpan(
                                  text: '跳过',
                                  style: TextStyle(
                                    fontSize: ScreenUtil().setSp(24),
                                    color: Colors.white,
                                  )),
                              TextSpan(
                                  text: '$_countdown' + "S",
                                  style: TextStyle(
                                    fontSize: ScreenUtil().setSp(24),
                                    color: Colors.white,
                                  )),
                            ]),
                          ),
                          onTap: () => {_pathRouter()}),
                    ),
                  )
                ],
              ))),
    );
  }
}
