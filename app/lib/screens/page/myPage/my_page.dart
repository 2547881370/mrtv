import 'package:flutter/material.dart';
import 'package:app/components/home/background_component.dart';
import 'package:flutter_screenutil/screenutil.dart';

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
    var container = Container(
                    width: ScreenUtil().setWidth(750),
                    height: ScreenUtil().setHeight(90),
                    alignment: Alignment.center,
                    decoration: BoxDecoration(
                        color: Colors.deepOrangeAccent.withOpacity(0.1),
                    ),
                    child: Text("我的",style: TextStyle(color: Colors.white,fontSize: ScreenUtil().setSp(30)),),
                  );
    return Scaffold(
      body: BackgroundComponent(
          child: Container(
              margin: EdgeInsets.only(top: topPadding),
              child : Column(
                children: <Widget>[
                  container
                ],
              )
          ),
      ),
    );
  }
}