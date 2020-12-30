import 'package:app/routers/navigator_util.dart';
import 'package:flutter/material.dart';
import 'package:flutter_screenutil/screenutil.dart';
import 'package:flutter_svg/svg.dart';

import '../../../constants.dart';

/**
 * 在线充值积分
 */

class MyMenmBer extends StatefulWidget {
  @override
  _MyMenmBerState createState() => _MyMenmBerState();
}

class _MyMenmBerState extends State<MyMenmBer> {
  @override
  Widget build(BuildContext context) {
    final double topPadding = MediaQuery.of(context).padding.top + 15;
    return Scaffold(
      body:Container(
        padding: EdgeInsets.symmetric(horizontal:ScreenUtil().setWidth(30)),
        child:Column(
          children: [
            Container(
            margin: EdgeInsets.only(top: topPadding),
            child: MyPageTitle(),
          ),
          MyMenmBerNumber(),
          SizedBox(
            height:ScreenUtil().setHeight(5),
          ),
          Container(
            padding: EdgeInsets.symmetric(vertical:ScreenUtil().setHeight(25)),
            child: CustomTabBar()
          ),
          MyMenbBerInput(title:"充值金额",hintText : "请输入要充值的金额",tips:Text("最小充值金额1元,1元可兑换10积分")),
          SizedBox(
            height:ScreenUtil().setHeight(60),
          ),
          MyMenbBerInput(title:"卡密充值积分",hintText : "输入粘贴密码",tips:Row(children: [
            Text("友情提示"),
            InkWell(
              child:Text("点击进入在线充值链接",style:TextStyle(color:Colors.blue[600])),
              onTap:()=>{
                print("跳转webView")
              }
            )
          ],)),
          ],
        )
      )
    );
  }
}

class MyMenbBerInput extends StatelessWidget {
  final String title;
  final String hintText;
  final Widget tips;
  const MyMenbBerInput({
    Key key,
    @required this.title,
    @required this.hintText,
    @required this.tips,
  }) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Container(
      width: ScreenUtil().setWidth(750),
      child:Column(
        children: [
          Container(
            padding: EdgeInsets.symmetric(horizontal:ScreenUtil().setWidth(20)),
            decoration: BoxDecoration(
              border: Border.all(  width: 1, //宽度
                color: Colors.black12),
                borderRadius: BorderRadius.all(Radius.circular(15))
            ),
            child:Row(
              mainAxisAlignment: MainAxisAlignment.start,
              children: [
                Text(title,style:TextStyle(color:Colors.black,fontSize: ScreenUtil().setSp(25))),
                Container(margin:EdgeInsets.symmetric(horizontal:ScreenUtil().setWidth(10)), child: Text("|" , style:TextStyle(color:Colors.black,fontSize: ScreenUtil().setSp(25))),),
                Expanded(
                  child: TextField(
                  decoration: InputDecoration(
                    border: InputBorder.none,
                    hintText: hintText,
                    hintStyle: TextStyle(color: Colors.grey),
                    hintMaxLines: 1
                  ),
                 ),
                )
              ]
            )
          ),
           SizedBox(
            height:ScreenUtil().setHeight(10),
          ),
          Container(
            padding:EdgeInsets.symmetric(horizontal:ScreenUtil().setWidth(15),vertical:ScreenUtil().setHeight(10)),
            alignment: Alignment.centerLeft,
            child:tips
          ),
           SizedBox(
            height:ScreenUtil().setHeight(10),
          ),
         RaisedButton(
          child: Container(
            padding: EdgeInsets.symmetric(vertical:ScreenUtil().setHeight(10),horizontal:ScreenUtil().setWidth(20)),
            alignment: Alignment.center,
            child : Text("确定",style:TextStyle(color:Colors.white,fontSize: ScreenUtil().setSp(27)))
          ),
          shape: RoundedRectangleBorder(
          borderRadius: BorderRadius.circular(10)),
          onPressed: () {},
          color: Color.fromRGBO(255, 102, 57, 1),
          textColor:Colors.white,
          ),
        ]
      )
    );
  }
}

class CustomTabBar extends StatefulWidget {
  @override
  _CustomTabBarState createState() => _CustomTabBarState();
}

class _CustomTabBarState extends State<CustomTabBar>
    with SingleTickerProviderStateMixin {
  final tabs = ['在线充值积分', '积分升级会员'];
  TabController _tabController;

  final GlobalKey globalKey = GlobalKey();



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

  @override
  Widget build(BuildContext context) {
    print("build");
    return TabBar(
            onTap: (tab) {
              // loginModel.setLoginCurrentIndex(tab);
            },
            isScrollable: true,
            indicatorSize: TabBarIndicatorSize.label,
            labelStyle: TextStyle(
                fontSize: ScreenUtil().setSp(20), fontWeight: FontWeight.bold),
            controller: _tabController,
            labelColor: Colors.orange,
            indicatorWeight: 3,
            indicatorPadding: EdgeInsets.symmetric(horizontal: 10),
            unselectedLabelColor: Colors.black,
            indicatorColor: Colors.orangeAccent,
            tabs: tabs
                .map((e) => Container(
                  width: ScreenUtil().setWidth(270),
                     alignment: Alignment.center,
                      child: Tab(text: e),
                    ))
                .toList(),
          );
  }
}



class MyMenmBerNumber extends StatelessWidget {
  const MyMenmBerNumber({
    Key key,
  }) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Container(
      padding: EdgeInsets.symmetric(vertical:ScreenUtil().setHeight(13)),
      decoration: BoxDecoration(
        color: Color.fromRGBO(255, 102, 57, 1),
        borderRadius: BorderRadius.all(Radius.circular(10))
      ),
      child:Column(
        children: [
          Container(
        padding: EdgeInsets.only(left:ScreenUtil().setWidth(50),top:ScreenUtil().setHeight(30),bottom:ScreenUtil().setHeight(30)),
        child:Row(
          children: [
          Container(
            height: ScreenUtil().setHeight(65),
            child:ClipOval( 
              child: new Image.network(
                  'https://pic2.zhimg.com/v2-639b49f2f6578eabddc458b84eb3c6a1.jpg',
                  ),
                )
            ),
            Container(
              margin: EdgeInsets.only(left:ScreenUtil().setWidth(20)),
              child:Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                Text("默认会员: 极速TVQLG86",style:TextStyle(color:Colors.white,fontSize: ScreenUtil().setSp(25))),
                Text("VIP有效期: 2020-01-01 08:00:00",style:TextStyle(color:Colors.white))
              ]
            )
            )
          ]
        )
      ),
      Container(
        child:Row(
          mainAxisAlignment: MainAxisAlignment.spaceAround,
          children: [
            Column(
              children: [
                Text("10" , style:TextStyle(color:Colors.white)),
                Text("剩余积分" , style:TextStyle(color:Colors.white)),
              ]
            ),
            Container(
              width:ScreenUtil().setWidth(5),
              height: ScreenUtil().setHeight(50),
              decoration: BoxDecoration(
                color:Colors.white,
              )
            ),
             Column(
              children: [
                Text("10" , style:TextStyle(color:Colors.white)),
                Text("剩余金币" , style:TextStyle(color:Colors.white)),
              ]
            ),
          ]
        )
      )
        ]
      )
    );
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
                    color: Colors.black
                  ))),
          Expanded(
              child: Container(
            alignment: Alignment.center,
            child: Text(
              "充值",
              style: TextStyle(
                  color: Colors.black, fontSize: ScreenUtil().setSp(25)),
            ),
          )),
          Container(
            width: ScreenUtil().setWidth(40),
            height: ScreenUtil().setHeight(40),
          )
        ],
      ),
    );
  }
}