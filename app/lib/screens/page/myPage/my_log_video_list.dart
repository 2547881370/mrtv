import 'package:app/view_model/my_log_video_model.dart';
import "package:flutter/material.dart";
import 'package:flutter_screenutil/screenutil.dart';
import 'package:provider/provider.dart';

/**
 * 嵌入播放记录
 */

class MyLogVideoList extends StatefulWidget {
  @override
  _MyLogVideoListState createState() => _MyLogVideoListState();
}

class _MyLogVideoListState extends State<MyLogVideoList> {
  @override
  Widget build(BuildContext context) {
    return Consumer<MyLogVideoModel>(builder: (context, data, child) {
      return Container(
        padding: EdgeInsets.symmetric(
            vertical: ScreenUtil().setHeight(20),
            horizontal: ScreenUtil().setWidth(20)),
        child: ListView.builder(
            scrollDirection: Axis.horizontal,
            itemBuilder: (BuildContext context, int index) {
              return _item(item: data.list[index]);
            },
            itemCount: data.list.length),
      );
    });
  }

  Container _item({MyLogItem item}) {
    return Container(
        child: Column(children: [_item_top(item), _item_bottom(item)]));
  }

  Container _item_bottom(MyLogItem item) {
    return Container(
        width: ScreenUtil().setWidth(100),
        child: Text(item.title,
            style: TextStyle(color: Colors.black),
            maxLines: 1,
            overflow: TextOverflow.ellipsis));
  }

  Stack _item_top(MyLogItem item) {
    return Stack(children: [
      Container(
          width: ScreenUtil().setWidth(179),
          height: ScreenUtil().setHeight(110),
          padding: EdgeInsets.symmetric(horizontal: ScreenUtil().setWidth(5)),
          child: ClipRRect(
            borderRadius: BorderRadius.all(Radius.circular(20)),
            child: Image.network(item.imgSrc, fit: BoxFit.fill),
          )),
      item.historyStatus
          ? Positioned(
              bottom: ScreenUtil().setHeight(5),
              right: ScreenUtil().setWidth(20),
              child: Text("${item.historyContent}%",
                  style: TextStyle(
                      color: Colors.white, fontWeight: FontWeight.bold)))
          : Container()
    ]);
  }
}
