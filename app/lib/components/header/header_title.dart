import 'package:app/routers/navigator_util.dart';
import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';
import 'package:flutter_screenutil/screenutil.dart';
import 'package:flutter_svg/svg.dart';

class MyPageTitle extends StatelessWidget {
  final String centerTitle;
  final String rightTitle;
  final bool rightTitleStatus;
  final Function rightFunction;
  const MyPageTitle(
      {Key key,
      this.centerTitle,
      this.rightTitle,
      this.rightTitleStatus = false,
      this.rightFunction})
      : super(key: key);

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
                centerTitle,
                style: TextStyle(
                    color: Colors.white, fontSize: ScreenUtil().setSp(25)),
              ),
            ),
          ),
          rightTitleStatus
              ? InkWell(
                  child: Container(
                    alignment: Alignment.center,
                    child: Text(
                      rightTitle,
                      style: TextStyle(
                          color: Colors.white,
                          fontSize: ScreenUtil().setSp(25)),
                    ),
                  ),
                  onTap: rightFunction)
              : SizedBox(
                  width: ScreenUtil().setWidth(10),
                ),
        ],
      ),
    );
  }
}
