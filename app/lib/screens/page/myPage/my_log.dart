import 'package:app/components/header/header_title.dart';
import 'package:app/components/home/background_component.dart';
import 'package:app/components/toast/Toast_postion.dart';
import 'package:app/routers/navigator_util.dart';
import 'package:app/view_model/my_log_video_model.dart';
import 'package:flutter/material.dart';
import 'package:flutter_screenutil/screenutil.dart';
import 'package:flutter_svg/svg.dart';
import 'package:provider/provider.dart';
import 'package:pull_to_refresh/pull_to_refresh.dart';

/**
 * 播放记录
 */
class MyLog extends StatefulWidget {
  @override
  _MyLogState createState() => _MyLogState();
}

class _MyLogState extends State<MyLog> {
  RefreshController _refreshController =
      RefreshController(initialRefresh: false);

  // 编辑状态
  bool updateStatus = false;

  // 全选状态
  bool allStatus = false;

  // 删除数量
  int removeCount = 0;

  void _setRemoveCount() {
    List<MyLogItem> _list =
        Provider.of<MyLogVideoModel>(context, listen: false).list;
    List list = _list.sublist(0);
    list.retainWhere((b) => b.selected == true);
    setState(() {
      removeCount = list.length;
      allStatus = list.length == _list.length;
    });
  }

  void _onRefresh() async {
    List<MyLogItem> _list =
        Provider.of<MyLogVideoModel>(context, listen: false).list;
    // TODO : 下拉回调

    // 延时器
    await Future.delayed(Duration(milliseconds: 1000));

    if (_list.length > 1) {
      _list.removeLast();
      Provider.of<MyLogVideoModel>(context, listen: false).setList(_list);
    }

    _setRemoveCount();

    // 刷新完成,控制器结束
    _refreshController.refreshCompleted();
  }

  void _close() {
    setState(() {
      updateStatus = !updateStatus;
      allStatus = false;
      removeCount = 0;
    });

    List<MyLogItem> _list =
        Provider.of<MyLogVideoModel>(context, listen: false).list;
    _list = _list
        .map((b) => MyLogItem(
            videoId: b.videoId,
            imgSrc: b.imgSrc,
            title: b.title,
            historyStatus: b.historyStatus,
            historyContent: b.historyContent,
            selected: false))
        .toList();
    Provider.of<MyLogVideoModel>(context, listen: false).setList(_list);
  }

  Widget buildHeader(BuildContext context, RefreshStatus mode) {
    return Container(
        alignment: Alignment.center,
        height: ScreenUtil().setHeight(50),
        child: Text(mode == RefreshStatus.idle
            ? "下拉刷新"
            : mode == RefreshStatus.refreshing
                ? "刷新中..."
                : mode == RefreshStatus.canRefresh
                    ? "可以松手了!"
                    : mode == RefreshStatus.completed ? "刷新成功!" : "刷新失败"));
  }

  @override
  Widget build(BuildContext context) {
    final double topPadding = MediaQuery.of(context).padding.top + 15;

    return Scaffold(body: BackgroundComponent(
        child: Consumer<MyLogVideoModel>(builder: (context, data, child) {
      return Column(
        children: [
          _title(topPadding),
          _content(),
          updateStatus ? _bottom() : Container()
        ],
      );
    })));
  }

  Widget _bottom() {
    return Container(
        width: ScreenUtil().setWidth(750),
        decoration: BoxDecoration(
            color: Colors.white,
            border: Border(
                top: BorderSide(color: Colors.grey[300]),
                bottom: BorderSide(color: Colors.grey[300]))),
        child: Row(
          children: [
            Expanded(
              child: RaisedButton(
                  color: Colors.white,
                  textColor: Colors.black,
                  onPressed: () {
                    setState(() {
                      allStatus = !allStatus;
                    });

                    List<MyLogItem> _list =
                        Provider.of<MyLogVideoModel>(context, listen: false)
                            .list;
                    _list = _list
                        .map((b) => MyLogItem(
                            videoId: b.videoId,
                            imgSrc: b.imgSrc,
                            title: b.title,
                            historyStatus: b.historyStatus,
                            historyContent: b.historyContent,
                            selected: allStatus))
                        .toList();
                    Provider.of<MyLogVideoModel>(context, listen: false)
                        .setList(_list);

                    _setRemoveCount();
                  },
                  child: Container(
                      height: ScreenUtil().setHeight(80),
                      alignment: Alignment.center,
                      child: Text(allStatus ? '取消全选' : '全选'))),
            ),
            Expanded(
                child: RaisedButton(
                    color: Colors.white,
                    textColor: Colors.black,
                    onPressed: () {
                      if (removeCount <= 0) {
                        Toast.toast(context,
                            msg: "未选择任何数据",
                            position: ToastPostion.bottom,
                            bgColor: Colors.white,
                            textColor: Colors.black);
                        return false;
                      }

                      List<MyLogItem> _list =
                          Provider.of<MyLogVideoModel>(context, listen: false)
                              .list;
                      _list.retainWhere((b) => b.selected == false);
                      Provider.of<MyLogVideoModel>(context, listen: false)
                          .setList(_list);
                    },
                    child: Container(
                        height: ScreenUtil().setHeight(80),
                        alignment: Alignment.center,
                        child: Text("删除(${removeCount})")))),
          ],
        ));
  }

  Widget _content() {
    return Expanded(
      child: Container(
          decoration: BoxDecoration(color: Colors.white),
          child: SmartRefresher(
            enablePullDown: true,
            header: CustomHeader(builder: buildHeader),
            controller: _refreshController,
            child: updateStatus ? _checkboxList() : _listView(),
            onRefresh: _onRefresh,
          )),
    );
  }

  Widget _checkboxList() {
    return ListView.builder(
      //列表数量
      itemCount:
          Provider.of<MyLogVideoModel>(context, listen: false).list.length,
      itemBuilder: (BuildContext context, int index) {
        MyLogItem _item =
            Provider.of<MyLogVideoModel>(context, listen: false).list[index];
        return _checkbox(item: _item, index: index);
      },
    );
  }

  Widget _checkbox({MyLogItem item, int index}) {
    return Container(
        height: ScreenUtil().setHeight(175),
        padding: EdgeInsets.symmetric(
            horizontal: ScreenUtil().setWidth(20),
            vertical: ScreenUtil().setHeight(10)),
        child: Row(children: [
          Checkbox(
            value: item.selected,
            onChanged: (bool value) {
              List<MyLogItem> _list =
                  Provider.of<MyLogVideoModel>(context, listen: false).list;
              _list[index].selected = value;
              Provider.of<MyLogVideoModel>(context, listen: false)
                  .setList(_list);

              _setRemoveCount();
            },
          ),
          _item_secondary(imgSrc: item.imgSrc),
          Expanded(
              child: Container(
                  alignment: Alignment.centerLeft,
                  padding: EdgeInsets.symmetric(
                      horizontal: ScreenUtil().setWidth(10)),
                  child: Column(
                    mainAxisAlignment: MainAxisAlignment.spaceBetween,
                    crossAxisAlignment: CrossAxisAlignment.start,
                    children: [
                      _item_title(title: item.title),
                      _item_subtitle(
                          historyStatus: item.historyStatus,
                          historyContent: item.historyContent)
                    ],
                  ))),
        ]));
  }

  ListView _listView() {
    return ListView.builder(
      //列表数量
      itemCount:
          Provider.of<MyLogVideoModel>(context, listen: false).list.length,
      itemBuilder: (BuildContext context, int index) {
        MyLogItem item =
            Provider.of<MyLogVideoModel>(context, listen: false).list[index];
        return _item(item: item);
      },
    );
  }

  InkWell _item({MyLogItem item}) {
    return InkWell(
        onTap: () {
          print("进入详情页");
        },
        child: Container(
            padding: EdgeInsets.symmetric(
                horizontal: ScreenUtil().setWidth(20),
                vertical: ScreenUtil().setHeight(10)),
            width: ScreenUtil().setWidth(750),
            height: ScreenUtil().setHeight(175),
            decoration: BoxDecoration(
              color: Colors.white,
            ),
            child: Row(children: [
              _item_secondary(imgSrc: item.imgSrc),
              Expanded(
                  child: Container(
                      alignment: Alignment.centerLeft,
                      padding: EdgeInsets.symmetric(
                          horizontal: ScreenUtil().setWidth(10)),
                      child: Column(
                        mainAxisAlignment: MainAxisAlignment.spaceBetween,
                        crossAxisAlignment: CrossAxisAlignment.start,
                        children: [
                          _item_title(title: item.title),
                          _item_subtitle(
                              historyStatus: item.historyStatus,
                              historyContent: item.historyContent)
                        ],
                      ))),
            ])));
  }

  Container _item_subtitle({bool historyStatus, String historyContent}) {
    return historyStatus
        ? Container(
            child: Row(children: [
            Icon(Icons.phone_android,
                color: Colors.grey[300], size: ScreenUtil().setSp(25)),
            SizedBox(
              width: ScreenUtil().setWidth(10),
            ),
            Text("观看至${historyContent}%",
                style: TextStyle(color: Colors.grey[500]))
          ]))
        : Container();
  }

  Text _item_title({String title}) {
    return Text(title,
        style: TextStyle(color: Colors.black, fontWeight: FontWeight.bold));
  }

  Container _item_secondary({String imgSrc}) {
    return Container(
        width: ScreenUtil().setWidth(156),
        height: ScreenUtil().setHeight(175),
        child: ClipRRect(
          borderRadius: BorderRadius.all(Radius.circular(20)),
          child: Image.network(imgSrc, fit: BoxFit.fill),
        ));
  }

  Container _title(double topPadding) {
    return Container(
      padding: EdgeInsets.symmetric(horizontal: ScreenUtil().setWidth(30)),
      margin: EdgeInsets.only(top: topPadding),
      child: MyPageTitle(
          centerTitle: '播放记录',
          rightTitle: updateStatus ? '取消' : '编辑',
          rightTitleStatus: true,
          rightFunction: _close),
    );
  }
}
