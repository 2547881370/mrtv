import 'package:app/components/home/background_component.dart';
import 'package:app/components/search/search_conponent.dart';
import 'package:app/routers/navigator_util.dart';
import 'package:flutter/material.dart';
import 'package:flutter_screenutil/screenutil.dart';
import 'package:flutter_svg/flutter_svg.dart';

import '../../../constants.dart';

class HomePage extends StatefulWidget {
  HomePage({Key key}) : super(key: key);

  @override
  _HomePageState createState() => _HomePageState();
}

class _HomePageState extends State<HomePage>
    with AutomaticKeepAliveClientMixin, SingleTickerProviderStateMixin {
  @override
  bool get wantKeepAlive => true;

  final tabs = ['推荐', '电影', '连续剧', '综艺', '动漫'];
  TabController _tabController;

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

  Widget _buildAppBar() => AppBar(
        elevation: 0,
        backgroundColor: Colors.transparent,
        bottom: TabBar(
          isScrollable: true,
          controller: _tabController,
          indicatorColor: Colors.white,
          indicatorWeight: 3,
          indicatorSize: TabBarIndicatorSize.label,
          labelStyle:
              TextStyle(fontWeight: FontWeight.bold, color: Colors.white),
          unselectedLabelStyle:
              TextStyle(fontWeight: FontWeight.w100, color: Colors.white),
          tabs: tabs
              .map((e) => Container(
                  padding: EdgeInsets.symmetric(vertical: 10),
                  decoration: BoxDecoration(),
                  child: Text(e,
                      style: TextStyle(
                          color: Colors.white,
                          fontSize: ScreenUtil().setSp(35)))))
              .toList(),
        ),
      );

  Widget _buildTableBarView() => TabBarView(
      controller: _tabController,
      children: tabs
          .map((e) => Container(
              decoration: BoxDecoration(color: Colors.white),
              child: Text(
                e,
                style: TextStyle(color: Colors.black, fontSize: 20),
              )))
          .toList());

  @override
  Widget build(BuildContext context) {
    return BackgroundComponent(
        child: Column(
      children: <Widget>[
        Container(
          width: double.infinity,
          height: ScreenUtil().setHeight(80),
          margin: EdgeInsets.only(top: 30),
          padding: EdgeInsets.symmetric(horizontal: kDefaultPaddin),
          child: _buildAppBar(),
        ),
        Container(
            width: double.infinity,
            height: ScreenUtil().setHeight(50),
            margin: EdgeInsets.only(top: 10, bottom: 10),
            padding: EdgeInsets.symmetric(horizontal: kDefaultPaddin - 10),
            child: Row(children: [
              Stack(
                children: [
                  SearchComponent(),
                  InkWell(
                    child: Container(
                      width: ScreenUtil().setWidth(550),
                      margin: EdgeInsets.only(right: 10),
                      padding: EdgeInsets.symmetric(
                          horizontal: kDefaultPaddin,
                          vertical: kDefaultPaddin / 5),
                    ),
                    onTap: () {
                      NavigatorUtil.jump(context, '/searchPage');
                    },
                  ),
                ],
              ),
              Expanded(
                child: InkWell(
                  child: SvgPicture.asset("assets/icons/jilu.svg",
                      width: ScreenUtil().setWidth(45)),
                  onTap: () {
                    print("进入历史记录页面");
                  },
                ),
              ),
              Expanded(
                child: InkWell(
                  child: SvgPicture.asset("assets/icons/xiazai.svg",
                      width: ScreenUtil().setWidth(45)),
                  onTap: () {
                    print("进入下载页面");
                  },
                ),
              ),
            ])),
        Expanded(child: _buildTableBarView())
      ],
    ));
  }
}

class BorderColor {}
