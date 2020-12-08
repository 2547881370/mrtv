import 'package:flutter/material.dart';
import 'package:flutter_screenutil/screenutil.dart';

import '../../constants.dart';

class SearchComponent extends StatefulWidget {
  Function fnChanged;
  SearchComponent({Key key, this.fnChanged}) : super(key: key);

  @override
  _SearchComponentState createState() => _SearchComponentState();
}

class _SearchComponentState extends State<SearchComponent> {
  @override
  Widget build(BuildContext context) {
    return Container(
        width: ScreenUtil().setWidth(550),
        padding: EdgeInsets.symmetric(
            horizontal: kDefaultPaddin, vertical: kDefaultPaddin / 5),
        decoration: BoxDecoration(
          color: Colors.black.withOpacity(0.35),
          borderRadius: BorderRadius.circular(30),
        ),
        child: TextField(
          onChanged: widget.fnChanged,
          style: TextStyle(color: Colors.white),
          showCursor: true,
          cursorWidth: 3,
          cursorRadius: Radius.circular(10),
          cursorColor: Colors.orange,
          decoration: InputDecoration(
            hintText: '影视名,演员,导演',
            hintStyle: TextStyle(
                color: Colors.white,
                height: 0,
                fontSize: ScreenUtil().setSp(30)),
            icon: Icon(Icons.search,
                color: Colors.white, size: ScreenUtil().setSp(40)),
            border: InputBorder.none,
          ),
        ));
  }
}
