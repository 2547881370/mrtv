import 'package:flutter/cupertino.dart';

class MyLogItem {
  // 电影主键
  int videoId;
  // 电影图片
  String imgSrc;
  // 电影名称
  String title;
  // 电影是否有观看进度
  bool historyStatus;
  // 电影观看进度值
  String historyContent;
  // 是否选中
  bool selected;
  MyLogItem(
      {this.videoId,
      this.title,
      this.imgSrc,
      this.historyStatus,
      this.historyContent,
      this.selected});
}

class MyLogVideoModel extends ChangeNotifier {
  List<MyLogItem> list = [
    MyLogItem(
        videoId: 1,
        imgSrc:
            'https://dss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=332699651,4280033699&fm=58&app=83&f=JPEG?w=150&h=200',
        title: '送你一朵小红花',
        historyStatus: false,
        historyContent: null,
        selected: false),
    MyLogItem(
        videoId: 2,
        imgSrc:
            'https://dss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=1997080233,2628850022&fm=58&app=83&f=JPEG?w=150&h=200',
        title: '除暴',
        historyStatus: true,
        historyContent: '1',
        selected: false),
    MyLogItem(
        videoId: 3,
        imgSrc:
            'https://dss2.baidu.com/6ONYsjip0QIZ8tyhnq/it/u=2190345723,1781415046&fm=58&app=83&f=JPEG?w=150&h=200',
        title: '沐浴之王',
        historyStatus: true,
        historyContent: '1',
        selected: false),
    MyLogItem(
        videoId: 4,
        imgSrc:
            'https://dss2.baidu.com/6ONYsjip0QIZ8tyhnq/it/u=1922438484,2393437791&fm=58&app=83&f=JPEG?w=300&h=400&s=86A26DA586236EB51FB809710300D0D0',
        title: '拆弹专家2',
        historyStatus: true,
        historyContent: '12',
        selected: false),
    MyLogItem(
        videoId: 5,
        imgSrc:
            'https://i2.hdslb.com/bfs/archive/65b84784590308d868a2e65381ce5e7213b67afa.jpg@257w_145h_1c_100q.webp',
        title: '【Sky光遇 史诗向手书】摆渡者 文明始末，佑护心火，为此一战',
        historyStatus: true,
        historyContent: '12',
        selected: false)
  ];

  setList(List<MyLogItem> _list) {
    list = _list;
    notifyListeners();
  }
}
