import 'package:app/api/Api.dart';
import 'package:app/api/EntityFactory.dart';
import 'package:app/components/home/background_component.dart';
import 'package:app/components/toast/Toast_postion.dart';
import 'package:app/model/user_login.dart';
import 'package:app/routers/navigator_util.dart';
import 'package:app/utils/dataPersistence.dart';
import 'package:app/view_model/user_model.dart';
import 'package:flutter/material.dart';
import 'package:flutter_screenutil/screenutil.dart';
import 'package:flutter_svg/svg.dart';
import 'package:provider/provider.dart';

import '../../../constants.dart';

class MyUpdateName extends StatefulWidget {
  @override
  _MyUpdateNameState createState() => _MyUpdateNameState();
}

class _MyUpdateNameState extends State<MyUpdateName> {
  String inputValue;

  @override
  Widget build(BuildContext context) {
    final double topPadding = MediaQuery.of(context).padding.top + 15;
    return Scaffold(
        body: BackgroundComponent(
            child: Column(
      children: [
        Container(
          margin: EdgeInsets.only(top: topPadding),
          child: MyPageTitle(inputValue: inputValue),
        ),
        Expanded(
          child: _myUpDateName(),
        )
      ],
    )));
  }

  Container _myUpDateName() {
    return Container(
        width: ScreenUtil().setWidth(750),
        decoration: BoxDecoration(
          color: Colors.white,
        ),
        child: Container(
          width: ScreenUtil().setWidth(750),
          child: TextField(
            onChanged: (val) {
              setState(() {
                inputValue = val;
              });
            },
            decoration: InputDecoration(
              fillColor: Color(0x30cccccc),
              filled: true,
              enabledBorder: OutlineInputBorder(
                borderSide: BorderSide(color: Color(0x00FF0000)),
              ),
              hintText: '请输入昵称',
              focusedBorder: OutlineInputBorder(
                borderSide: BorderSide(color: Color(0x00000000)),
              ),
            ),
          ),
        ));
  }
}

class MyPageTitle extends StatelessWidget {
  final String inputValue;
  const MyPageTitle({Key key, @required this.inputValue}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Container(
      width: ScreenUtil().setWidth(750),
      height: ScreenUtil().setHeight(90),
      padding: EdgeInsets.symmetric(horizontal: kDefaultPaddin),
      decoration: BoxDecoration(
        color: Colors.deepOrangeAccent.withOpacity(0.1),
      ),
      child: Row(
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
                  ))),
          Expanded(
              child: Container(
            alignment: Alignment.center,
            child: Text(
              "更换昵称",
              style: TextStyle(
                  color: Colors.white, fontSize: ScreenUtil().setSp(25)),
            ),
          )),
          Container(
              height: ScreenUtil().setHeight(40),
              child: InkWell(
                  onTap: () async {
                    String msg;
                    if (inputValue == null) {
                      msg = "信息不能为空";
                    } else {
                      PersistentStorage ps = PersistentStorage();
                      var p = await ps.getStorage('userInfo');
                      p = EntityFactory.generateOBJ<UserLogin>(p);
                      var presult = await Api.setuserInfo({
                        "user_nick_name": inputValue,
                        "user_portrait":p.data.userPortrait
                      });
                      msg = presult.msg;
                      NavigatorUtil.goBack(context);
                      await Provider.of<UserInfoModel>(context, listen: false).setFraction();
                    }
                    Toast.toast(
                      context,
                      msg: msg,
                      position: ToastPostion.bottom,
                    );
                  },
                  child: Text('完成',
                      style: TextStyle(
                          color: Colors.white,
                          fontSize: ScreenUtil().setSp(25),
                          fontWeight: FontWeight.bold))))
        ],
      ),
    );
  }
}
