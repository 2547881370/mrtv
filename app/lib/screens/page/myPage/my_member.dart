import 'package:app/routers/navigator_util.dart';
import 'package:app/view_model/my_menm_ber_model.dart';
import 'package:flutter/material.dart';
import 'package:flutter_screenutil/screenutil.dart';
import 'package:flutter_svg/svg.dart';
import 'package:provider/provider.dart';

import '../../../constants.dart';

/**
 * 在线充值积分
 */

class MyMenmBer extends StatefulWidget {
  @override
  _MyMenmBerState createState() => _MyMenmBerState();
}

class _MyMenmBerState extends State<MyMenmBer> {
  final List<Widget> widgetList = [RechargeWidget(), MemberWidget()];

  @override
  Widget build(BuildContext context) {
    final double topPadding = MediaQuery.of(context).padding.top + 15;
    return Scaffold(
        body: Selector<MyMenmBerModel, int>(
            selector: (context, value) => value.activeIndex,
            builder: (context, data, child) {
              print(data);
              return Container(
                  padding: EdgeInsets.symmetric(
                      horizontal: ScreenUtil().setWidth(30)),
                  child: Column(
                    children: [
                      Container(
                        margin: EdgeInsets.only(top: topPadding),
                        child: MyPageTitle(),
                      ),
                      MyMenmBerNumber(),
                      SizedBox(
                        height: ScreenUtil().setHeight(5),
                      ),
                      Container(
                          padding: EdgeInsets.symmetric(
                              vertical: ScreenUtil().setHeight(25)),
                          child: CustomTabBar()),
                      // _recharge(),
                      Expanded(
                        child: widgetList[data],
                      )
                    ],
                  ));
            }));
  }
}

class MyMenbBerInput extends StatefulWidget {
  String title;
  String hintText;
  Widget tips;
  int fnIndex;
  MyMenbBerInput({this.title, this.hintText, this.tips, this.fnIndex});
  @override
  _MyMenbBerInputState createState() => _MyMenbBerInputState();
}

class _MyMenbBerInputState extends State<MyMenbBerInput> {
  @override
  Widget build(BuildContext context) {
    return Container(
        width: ScreenUtil().setWidth(750),
        child: Column(children: [
          Container(
              padding:
                  EdgeInsets.symmetric(horizontal: ScreenUtil().setWidth(20)),
              decoration: BoxDecoration(
                  border: Border.all(
                      width: 1, //宽度
                      color: Colors.black12),
                  borderRadius: BorderRadius.all(Radius.circular(15))),
              child: Row(mainAxisAlignment: MainAxisAlignment.start, children: [
                Text(widget.title,
                    style: TextStyle(
                        color: Colors.black, fontSize: ScreenUtil().setSp(25))),
                Container(
                  margin: EdgeInsets.symmetric(
                      horizontal: ScreenUtil().setWidth(10)),
                  child: Text("|",
                      style: TextStyle(
                          color: Colors.black,
                          fontSize: ScreenUtil().setSp(25))),
                ),
                Expanded(
                  child:
                      Consumer<MyMenmBerModel>(builder: (context, data, child) {
                    return TextField(
                      onChanged: (value) {
                        data.set_valueList(int.parse(value), widget.fnIndex);
                      },
                      controller: data.valueList[widget.fnIndex].controller,
                      decoration: InputDecoration(
                          border: InputBorder.none,
                          hintText: widget.hintText,
                          hintStyle: TextStyle(color: Colors.grey),
                          hintMaxLines: 1),
                    );
                  }),
                )
              ])),
          SizedBox(
            height: ScreenUtil().setHeight(10),
          ),
          Container(
              padding: EdgeInsets.symmetric(
                  horizontal: ScreenUtil().setWidth(15),
                  vertical: ScreenUtil().setHeight(10)),
              alignment: Alignment.centerLeft,
              child: widget.tips),
          SizedBox(
            height: ScreenUtil().setHeight(10),
          ),
          RaisedButton(
            child: Container(
                padding: EdgeInsets.symmetric(
                    vertical: ScreenUtil().setHeight(10),
                    horizontal: ScreenUtil().setWidth(20)),
                alignment: Alignment.center,
                child: Text("确定",
                    style: TextStyle(
                        color: Colors.white,
                        fontSize: ScreenUtil().setSp(27)))),
            shape:
                RoundedRectangleBorder(borderRadius: BorderRadius.circular(10)),
            onPressed: () {
              // TODO : 父组件传递的点击回调函数
            },
            color: Color.fromRGBO(255, 102, 57, 1),
            textColor: Colors.white,
          ),
        ]));
  }
}

class CustomTabBar extends StatefulWidget {
  @override
  _CustomTabBarState createState() => _CustomTabBarState();
}

class _CustomTabBarState extends State<CustomTabBar>
    with SingleTickerProviderStateMixin {
  List<TitleTabBar> tabs;
  TabController _tabController;
  final GlobalKey globalKey = GlobalKey();

  @override
  void initState() {
    super.initState();
    tabs = Provider.of<MyMenmBerModel>(context, listen: false).titleTabBarList;
    _tabController = TabController(vsync: this, length: tabs.length);
  }

  @override
  void dispose() {
    _tabController.dispose();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    return Selector<MyMenmBerModel, int>(
        selector: (context, value) => value.activeIndex,
        builder: (context, data, child) {
          _tabController.index = data;
          return TabBar(
            onTap: (tab) {
              Provider.of<MyMenmBerModel>(context, listen: false)
                  .set_activeIndex(tab);

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
                      child: Tab(text: e.content),
                    ))
                .toList(),
          );
        });
    ;
  }
}

class MyMenmBerNumber extends StatelessWidget {
  const MyMenmBerNumber({
    Key key,
  }) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Container(
        padding: EdgeInsets.symmetric(vertical: ScreenUtil().setHeight(13)),
        decoration: BoxDecoration(
            color: Color.fromRGBO(255, 102, 57, 1),
            borderRadius: BorderRadius.all(Radius.circular(10))),
        child: Column(children: [
          Container(
              padding: EdgeInsets.only(
                  left: ScreenUtil().setWidth(50),
                  top: ScreenUtil().setHeight(30),
                  bottom: ScreenUtil().setHeight(30)),
              child: Row(children: [
                Container(
                    height: ScreenUtil().setHeight(65),
                    child: ClipOval(
                      child: new Image.network(
                        'https://pic2.zhimg.com/v2-639b49f2f6578eabddc458b84eb3c6a1.jpg',
                      ),
                    )),
                Container(
                    margin: EdgeInsets.only(left: ScreenUtil().setWidth(20)),
                    child: Column(
                        crossAxisAlignment: CrossAxisAlignment.start,
                        children: [
                          Text("默认会员: 极速TVQLG86",
                              style: TextStyle(
                                  color: Colors.white,
                                  fontSize: ScreenUtil().setSp(25))),
                          Text("VIP有效期: 2020-01-01 08:00:00",
                              style: TextStyle(color: Colors.white))
                        ]))
              ])),
          Container(
              child: Row(
                  mainAxisAlignment: MainAxisAlignment.spaceAround,
                  children: [
                Column(children: [
                  Text("10", style: TextStyle(color: Colors.white)),
                  Text("剩余积分", style: TextStyle(color: Colors.white)),
                ]),
                Container(
                    width: ScreenUtil().setWidth(5),
                    height: ScreenUtil().setHeight(50),
                    decoration: BoxDecoration(
                      color: Colors.white,
                    )),
                Column(children: [
                  Text("10", style: TextStyle(color: Colors.white)),
                  Text("剩余金币", style: TextStyle(color: Colors.white)),
                ]),
              ]))
        ]));
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
                  child: SvgPicture.asset("assets/icons/fanhui.svg",
                      color: Colors.black))),
          Expanded(
              child: Container(
            alignment: Alignment.center,
            child: Consumer<MyMenmBerModel>(builder: (context, data, child) {
              return Text(
                data.titleTabBarList[data.activeIndex].title,
                style: TextStyle(
                    color: Colors.black, fontSize: ScreenUtil().setSp(25)),
              );
            }),
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

// 在线充值积分
class RechargeWidget extends StatefulWidget {
  @override
  _RechargeWidgetState createState() => _RechargeWidgetState();
}

class _RechargeWidgetState extends State<RechargeWidget> {
  @override
  Widget build(BuildContext context) {
    return Container(
        child: Column(
      children: [
        MyMenbBerInput(
            title: "充值金额",
            hintText: "请输入要充值的金额",
            tips: Text("最小充值金额1元,1元可兑换10积分"),
            fnIndex: 0),
        SizedBox(
          height: ScreenUtil().setHeight(60),
        ),
        MyMenbBerInput(
            title: "卡密充值积分",
            hintText: "输入粘贴密码",
            tips: Row(
              children: [
                Text("友情提示"),
                InkWell(
                  child: Text("点击进入在线充值链接",
                      style: TextStyle(color: Colors.blue[600])),
                  onTap: () => {print("跳转webView")},
                )
              ],
            ),
            fnIndex: 1)
      ],
    ));
  }
}

// 积分升级会员
class MemberWidget extends StatefulWidget {
  @override
  _MemberWidgetState createState() => _MemberWidgetState();
}

class _MemberWidgetState extends State<MemberWidget> {
  List<MemberWidgetListItem> listItem;

  @override
  void initState() {
    listItem = Provider.of<MyMenmBerModel>(context, listen: false).listItem;
    super.initState();
  }

  @override
  Widget build(BuildContext context) {
    return Container(
        alignment: Alignment.centerLeft,
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            Text("请选择升级选项",
                style: TextStyle(
                    color: Colors.grey,
                    fontSize: ScreenUtil().setSp(25),
                    fontWeight: FontWeight.bold)),
            Text("点击需要升级的会员组和市场进行购买升级",
                style: TextStyle(
                    color: Colors.grey[400], fontSize: ScreenUtil().setSp(20))),
            Expanded(
              child: BuilderGridView(listItem: listItem),
            )
          ],
        ));
  }
}

class BuilderGridView extends StatelessWidget {
  final List<MemberWidgetListItem> listItem;
  BuilderGridView({this.listItem});

  @override
  Widget build(BuildContext context) {
    return Container(
      child: GridView.builder(
          itemCount: listItem.length,
          scrollDirection: Axis.vertical,
          gridDelegate: SliverGridDelegateWithFixedCrossAxisCount(
              //网格代理：定交叉轴数目
              crossAxisCount: 2, //条目个数
              mainAxisSpacing: 10, //主轴间距
              crossAxisSpacing: 7, //交叉轴间距
              childAspectRatio: 1 / 0.418),
          itemBuilder: (_, int position) =>
              _buildItem(listItem[position], context)),
    );
  }

  Widget _buildDialog() => Dialog(
        backgroundColor: Colors.white,
        elevation: 5,
        shape: RoundedRectangleBorder(
            borderRadius: BorderRadius.all(Radius.circular(10))),
        child: Container(
          width: ScreenUtil().setWidth(100),
          child: DeleteDialog(),
        ),
      );

  Widget _buildItem(MemberWidgetListItem item, BuildContext context) =>
      RaisedButton(
          color: Color.fromRGBO(255, 102, 57, 1),
          textColor: Colors.white,
          shape:
              RoundedRectangleBorder(borderRadius: BorderRadius.circular(10)),
          onPressed: () {
            if (item.status) {
              // TODO : 调取增加会员期限接口
              Provider.of<MyMenmBerModel>(context, listen: false)
                  .set_listItemIndex(item);
              showDialog(context: context, builder: (ctx) => _buildDialog());
              print(item.number);
            } else {
              // TODO : ROUTER 跳转推广页面
            }
          },
          child: Container(
              padding: EdgeInsets.symmetric(
                  horizontal: ScreenUtil().setWidth(20),
                  vertical: ScreenUtil().setHeight(10)),
              alignment: Alignment.center,
              decoration: BoxDecoration(
                borderRadius: BorderRadius.all(Radius.circular(10)),
              ),
              child: item.status == true
                  ? Column(
                      children: [
                        Container(
                          alignment: Alignment.centerLeft,
                          child: Text("${item.title}",
                              style: TextStyle(color: Colors.white)),
                        ),
                        Expanded(
                          child: Container(
                            alignment: Alignment.centerRight,
                            child: Text("${item.timeName}  ${item.number}",
                                style: TextStyle(color: Colors.white)),
                          ),
                        ),
                      ],
                    )
                  : Text("${item.title}",
                      style: TextStyle(color: Colors.white))));
}

class DeleteDialog extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Container(
      child: Column(
        mainAxisSize: MainAxisSize.min,
        children: <Widget>[
          _buildBar(context),
          _buildTitle(),
          _buildContent(context),
          _buildFooter(context),
        ],
      ),
    );
  }

  Widget _buildTitle() {
    return Text(
      '提示',
      style: TextStyle(color: Color(0xff5CC5E9), fontSize: ScreenUtil().setSp(26)),
    );
  }

  Widget _buildContent(context) {
    return Consumer<MyMenmBerModel>(builder: (context, data, child) {
      return Padding(
        padding: const EdgeInsets.all(15.0),
        child: Text(
          '确定花费${data.listItemActive.number}积分'
          '兑换${data.listItemActive.remarks}天会员',
          style: TextStyle(color: Color(0xffCFCFCF), fontSize: ScreenUtil().setSp(20)),
          textAlign: TextAlign.justify,
        ),
      );
    });
  }

  Widget _buildFooter(context) {
    return Padding(
      padding:
          const EdgeInsets.only(bottom: 15.0, top: 10, left: 10, right: 10),
      child: Row(
        mainAxisAlignment: MainAxisAlignment.spaceEvenly,
        children: <Widget>[
          InkWell(
              onTap: () => Navigator.of(context).pop(),
              child: Container(
                alignment: Alignment.center,
                height: ScreenUtil().setHeight(40),
                width: ScreenUtil().setWidth(100),
                decoration: BoxDecoration(color: Colors.white),
                child: Text('取消',
                    style: TextStyle(color: Colors.black, fontSize: ScreenUtil().setSp(20))),
              )),
          InkWell(
            onTap: () => Navigator.of(context).pop(),
            child: Container(
              alignment: Alignment.center,
              height: ScreenUtil().setHeight(40),
              width: ScreenUtil().setWidth(100),
              decoration: BoxDecoration(
                  color: Colors.orangeAccent),
              child: Text('确定',
                  style: TextStyle(color: Colors.white, fontSize: ScreenUtil().setSp(20))),
            ),
          )
        ],
      ),
    );
  }

  _buildBar(context) => Container(
        height: 30,
        alignment: Alignment.centerRight,
        margin: EdgeInsets.only(right: 10, top: 5),
        child: InkWell(
          onTap: () => Navigator.of(context).pop(),
          child: Icon(
            Icons.close,
            color: Color(0xff82CAE3),
          ),
        ),
      );
}
