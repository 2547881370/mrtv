import 'package:app/view_model/home_model.dart';
import 'package:flutter/material.dart';
import 'package:flutter_screenutil/screenutil.dart';
import 'package:flutter_svg/flutter_svg.dart';
import 'package:provider/provider.dart';



class BottomNavBar extends StatefulWidget {
  BottomNavBar({
    Key key,
  }) : super(key: key);
  @override
  _BottomNavBarState createState() => _BottomNavBarState();
}

class _BottomNavBarState extends State<BottomNavBar> {

  @override
  Widget build(BuildContext context) {
    print("重新build");
    return Container(
      padding: EdgeInsets.symmetric(horizontal: 35),
      height: ScreenUtil().setHeight(100),
      width: double.infinity,
      // double.infinity means it cove the available width
      decoration: BoxDecoration(
        color: Colors.white,
        borderRadius: BorderRadius.only(
          topLeft: Radius.circular(20),
          topRight: Radius.circular(20),
        ),
        boxShadow: [
          BoxShadow(
            offset: Offset(0, -7),
            blurRadius: 33,
            color: Color(0xFF6DAED9).withOpacity(0.11),
          ),
        ],
      ),
      child: Consumer<HomeModel>(builder: (context, homeModel, child) {
        return Row(
          mainAxisAlignment: MainAxisAlignment.spaceBetween,
          children: listIconButton.map((b) {
            print(b.toString());
            return Column(children: <Widget>[
              IconButton(
                icon: b.index == homeModel.currentIndex ? SvgPicture.asset(b.activeIcon,width:ScreenUtil().setWidth(45)) : SvgPicture.asset(b.icon,width:ScreenUtil().setWidth(45)),
                splashColor: Colors.transparent,
                highlightColor: Colors.transparent,
                onPressed: () {
                  homeModel.setCurrentIndex(b.index);
                },
              ),
              Text(b.title,style : TextStyle(color : b.index == homeModel.currentIndex ?  Colors.orange : Colors.black,fontSize :ScreenUtil().setSp(18)))
            ]);
          }).toList(),
        );
      }),
    );
  }
}
