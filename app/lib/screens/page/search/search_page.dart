import 'package:app/components/home/background_component.dart';
import 'package:app/components/search/search_conponent.dart';
import 'package:app/routers/navigator_util.dart';
import 'package:flutter/material.dart';
import 'package:flutter_screenutil/screenutil.dart';
import 'package:flutter_svg/svg.dart';

import '../../../constants.dart';
import 'component/association_list.dart';

class SearchPage extends StatefulWidget {
  @override
  _SearchPageState createState() => _SearchPageState();
}

class _SearchPageState extends State<SearchPage> {
  String value = "";
  Function fnChanged(val) {
    print(val.length);
    setState(() {
      value = val;
    });
  }

  @override
  Widget build(BuildContext context) {
    final double topPadding =
        MediaQuery.of(context).padding.top + kDefaultPaddin;
    return Scaffold(
        body: BackgroundComponent(
            child: Container(
                child: Column(
      children: [
        Container(
          margin: EdgeInsets.only(top: topPadding, bottom: 10),
          padding: EdgeInsets.symmetric(horizontal: kDefaultPaddin),
          child: Row(
            mainAxisAlignment: MainAxisAlignment.spaceBetween,
            children: [
              returnComponent(context),
              Container(
                height: ScreenUtil().setHeight(50),
                child: SearchComponent(fnChanged: fnChanged),
              ),
              searchComponent(context),
            ],
          ),
        ),
        value.length > 0
            ? Expanded(
                child: AssociationList(),
              )
            : Container(),
      ],
    ))));
  }

  InkWell searchComponent(BuildContext context) {
    return InkWell(
        onTap: () {
          NavigatorUtil.goBack(context);
        },
        child: Container(
          child: Text("搜索",
              style: TextStyle(
                color: Colors.white,
                fontSize: ScreenUtil().setSp(30),
              )),
        ));
  }

  InkWell returnComponent(BuildContext context) {
    return InkWell(
        onTap: () {
          NavigatorUtil.goBack(context);
        },
        child: Container(
          child: SvgPicture.asset("assets/icons/fanhui.svg",
              width: ScreenUtil().setWidth(40)),
        ));
  }
}
