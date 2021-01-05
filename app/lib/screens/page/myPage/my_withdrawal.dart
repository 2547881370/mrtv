import 'package:app/components/home/background_component.dart';
import 'package:app/routers/navigator_util.dart';
import 'package:flutter/material.dart';
import 'package:flutter_screenutil/screenutil.dart';
import 'package:flutter_svg/svg.dart';

/**
 * 提现
 */

class WithdrawalTableTile {
  String integral;
  String money;
  String statusName;
  String time;
  WithdrawalTableTile({this.integral, this.money, this.statusName, this.time});
}

class MyWithdrawal extends StatefulWidget {
  @override
  _MyWithdrawalState createState() => _MyWithdrawalState();
}

class _MyWithdrawalState extends State<MyWithdrawal> {
  int _value = 1;
  final _values = [1, 2];
  final _info = ["支付宝", "微信"];

  final List<WithdrawalTableTile> tableData = [
    WithdrawalTableTile(
        integral: "100",
        money: "1",
        statusName: "待处理",
        time: "2020-1-1 12:00:00"),
    WithdrawalTableTile(
        integral: "100",
        money: "1",
        statusName: "待处理",
        time: "2020-1-1 12:00:00"),
    WithdrawalTableTile(
        integral: "100",
        money: "1",
        statusName: "待处理",
        time: "2020-1-1 12:00:00"),
    WithdrawalTableTile(
        integral: "100",
        money: "1",
        statusName: "待处理",
        time: "2020-1-1 12:00:00"),
    WithdrawalTableTile(
        integral: "100",
        money: "1",
        statusName: "待处理",
        time: "2020-1-1 12:00:00"),
    WithdrawalTableTile(
        integral: "100",
        money: "1",
        statusName: "待处理",
        time: "2020-1-1 12:00:00"),
    WithdrawalTableTile(
        integral: "100",
        money: "1",
        statusName: "待处理",
        time: "2020-1-1 12:00:00"),
    WithdrawalTableTile(
        integral: "100",
        money: "1",
        statusName: "待处理",
        time: "2020-1-1 12:10:00"),
    WithdrawalTableTile(
        integral: "100",
        money: "1",
        statusName: "待处理",
        time: "2020-1-1 12:10:00"),
    WithdrawalTableTile(
        integral: "100",
        money: "1",
        statusName: "待处理",
        time: "2020-1-1 12:10:00"),
    WithdrawalTableTile(
        integral: "100",
        money: "1",
        statusName: "待处理",
        time: "2020-1-1 12:10:00"),
    WithdrawalTableTile(
        integral: "100",
        money: "1",
        statusName: "待处理",
        time: "2020-1-1 12:10:00"),
    WithdrawalTableTile(
        integral: "100",
        money: "1",
        statusName: "待处理",
        time: "2020-1-1 12:10:00"),
    WithdrawalTableTile(
        integral: "100",
        money: "1",
        statusName: "待处理",
        time: "2020-1-1 12:10:00"),
    WithdrawalTableTile(
        integral: "100",
        money: "1",
        statusName: "待处理",
        time: "2020-1-1 12:10:00"),
  ];

  @override
  Widget build(BuildContext context) {
    final double topPadding = MediaQuery.of(context).padding.top + 15;
    return Scaffold(
        body: BackgroundComponent(
            child: Container(
      child: Column(
        children: [_title(topPadding), _text(), _content()],
      ),
    )));
  }

  Expanded _content() {
    return Expanded(
        child: Container(
            color: Colors.white,
            padding: EdgeInsets.symmetric(
                horizontal: ScreenUtil().setWidth(30),
                vertical: ScreenUtil().setHeight(20)),
            child: Column(children: [
              _select(title: "体现方式"),
              _input(title: "对应账户", hintText: "输入收款账号"),
              _input(title: "真实姓名", hintText: "请输入收款账户或真实姓名"),
              _input(title: "提现金额", hintText: "提现金额"),
              _remind(),
              SizedBox(
                height: ScreenUtil().setHeight(10),
              ),
              _button(),
              SizedBox(
                height: ScreenUtil().setHeight(10),
              ),
              _text_header(),
              _table_item(
                  item: WithdrawalTableTile(
                      integral: "提交积分",
                      money: "提现金额",
                      statusName: "提交状态",
                      time: "提现时间")),
              Expanded(
                  child: MediaQuery.removePadding(
                removeTop: true,
                context: context,
                child: ListView.builder(
                  itemCount: tableData.length,
                  itemBuilder: (content, index) => Container(
                      margin: EdgeInsets.symmetric(
                          vertical: ScreenUtil().setHeight(10)),
                      child: _table_item(item: tableData[index])),
                ),
              ))
            ])));
  }

  Container _table_item({WithdrawalTableTile item}) {
    return Container(
        child: Row(children: [
      Expanded(
          child: Container(
              padding: EdgeInsets.only(right: ScreenUtil().setWidth(20)),
              child:
                  Text(item.integral, style: TextStyle(color: Colors.black)))),
      Expanded(
        child: Container(
            padding:
                EdgeInsets.symmetric(horizontal: ScreenUtil().setWidth(20)),
            child: Text(item.money, style: TextStyle(color: Colors.black))),
      ),
      Expanded(
        child: Container(
            padding:
                EdgeInsets.symmetric(horizontal: ScreenUtil().setWidth(20)),
            child:
                Text(item.statusName, style: TextStyle(color: Colors.black))),
      ),
      Expanded(
        child: Container(
            padding:
                EdgeInsets.symmetric(horizontal: ScreenUtil().setWidth(20)),
            child: Text(item.time, style: TextStyle(color: Colors.black))),
      ),
    ]));
  }

  Container _text_header() {
    return Container(
        padding: EdgeInsets.symmetric(vertical: ScreenUtil().setHeight(10)),
        child: Row(children: [
          Container(
              margin: EdgeInsets.only(right: ScreenUtil().setWidth(10)),
              width: ScreenUtil().setWidth(5),
              height: ScreenUtil().setHeight(25),
              decoration: BoxDecoration(color: Colors.orange)),
          Text("提现记录",
              style: TextStyle(
                color: Colors.grey,
                fontSize: ScreenUtil().setSp(25),
              ))
        ]));
  }

  RaisedButton _button() {
    return RaisedButton(
        color: Color.fromRGBO(255, 102, 57, 1),
        textColor: Colors.white,
        shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(10)),
        onPressed: () {},
        child: Container(
            margin: EdgeInsets.symmetric(vertical: ScreenUtil().setHeight(10)),
            alignment: Alignment.center,
            child: Text("提交",
                style: TextStyle(
                    color: Colors.white, fontSize: ScreenUtil().setSp(30)))));
  }

  Container _remind() {
    return Container(
        alignment: Alignment.centerLeft,
        padding: EdgeInsets.symmetric(vertical: ScreenUtil().setHeight(10)),
        child: Text("当前可提现金额0元,提现比例100金币=1元",
            style: TextStyle(
                color: Colors.grey,
                fontSize: ScreenUtil().setSp(20),
                fontWeight: FontWeight.bold)));
  }

  Container _select({String title}) {
    return Container(
        padding: EdgeInsets.symmetric(horizontal: ScreenUtil().setWidth(20)),
        margin: EdgeInsets.symmetric(vertical: ScreenUtil().setHeight(20)),
        decoration: BoxDecoration(
            border: Border.all(
                width: 1, //宽度
                color: Colors.black12),
            borderRadius: BorderRadius.all(Radius.circular(15))),
        child: Row(mainAxisAlignment: MainAxisAlignment.start, children: [
          Text(title,
              style: TextStyle(
                  color: Colors.black, fontSize: ScreenUtil().setSp(25))),
          Container(
            margin: EdgeInsets.symmetric(horizontal: ScreenUtil().setWidth(10)),
            child: Text("|",
                style: TextStyle(
                    color: Colors.black, fontSize: ScreenUtil().setSp(25))),
          ),
          Expanded(
            child: DropdownButtonHideUnderline(
              child: DropdownButton<int>(
                  value: _value,
                  elevation: 1,
                  icon: Icon(
                    Icons.expand_more,
                    size: 20,
                  ),
                  items: _buildItems(),
                  onChanged: (v) => setState(() => _value = v)),
            ),
          )
        ]));
  }

  Container _input({String title, String hintText}) {
    return Container(
        padding: EdgeInsets.symmetric(horizontal: ScreenUtil().setWidth(20)),
        margin: EdgeInsets.symmetric(vertical: ScreenUtil().setHeight(20)),
        decoration: BoxDecoration(
            border: Border.all(
                width: 1, //宽度
                color: Colors.black12),
            borderRadius: BorderRadius.all(Radius.circular(15))),
        child: Row(mainAxisAlignment: MainAxisAlignment.start, children: [
          Text(title,
              style: TextStyle(
                  color: Colors.black, fontSize: ScreenUtil().setSp(25))),
          Container(
            margin: EdgeInsets.symmetric(horizontal: ScreenUtil().setWidth(10)),
            child: Text("|",
                style: TextStyle(
                    color: Colors.black, fontSize: ScreenUtil().setSp(25))),
          ),
          Expanded(
            child: TextField(
              onChanged: (value) {},
              decoration: InputDecoration(
                  border: InputBorder.none,
                  hintText: hintText,
                  hintStyle: TextStyle(color: Colors.grey),
                  hintMaxLines: 1),
            ),
          )
        ]));
  }

  List<DropdownMenuItem<int>> _buildItems() => _values
      .map((e) => DropdownMenuItem<int>(
          value: e,
          child: Text(
            _info[_values.indexOf(e)],
          )))
      .toList();

  Container _text() {
    return Container(
        padding: EdgeInsets.symmetric(
            vertical: ScreenUtil().setHeight(30),
            horizontal: ScreenUtil().setWidth(32)),
        color: Colors.transparent,
        child: Row(
          children: [
            Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                Text("剩余积分",
                    style: TextStyle(
                        color: Colors.white, fontSize: ScreenUtil().setSp(20))),
                Text("10",
                    style: TextStyle(
                        color: Colors.white,
                        fontSize: ScreenUtil().setSp(30),
                        fontWeight: FontWeight.bold)),
              ],
            ),
            Container(
                margin: EdgeInsets.only(
                    left: ScreenUtil().setWidth(40),
                    right: ScreenUtil().setWidth(40)),
                width: ScreenUtil().setWidth(5),
                height: ScreenUtil().setHeight(40),
                color: Colors.white),
            Column(
              children: [
                Text("可提现金币",
                    style: TextStyle(
                        color: Colors.white, fontSize: ScreenUtil().setSp(20))),
                Text("10",
                    style: TextStyle(
                        color: Colors.white,
                        fontSize: ScreenUtil().setSp(30),
                        fontWeight: FontWeight.bold)),
              ],
            ),
          ],
        ));
  }

  Container _title(double topPadding) {
    return Container(
      padding: EdgeInsets.symmetric(horizontal: ScreenUtil().setWidth(30)),
      margin: EdgeInsets.only(top: topPadding),
      child: MyPageTitle(),
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
                  child: SvgPicture.asset("assets/icons/fanhui.svg",
                      color: Colors.white))),
          Expanded(
              child: Container(
            alignment: Alignment.center,
            child: Text(
              "提现",
              style: TextStyle(
                  color: Colors.white, fontSize: ScreenUtil().setSp(25)),
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
