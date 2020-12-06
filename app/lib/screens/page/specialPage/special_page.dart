import 'package:flutter/material.dart';

class SpecialPage extends StatefulWidget {
  SpecialPage({Key key}) : super(key: key);

  @override
  _SpecialPageState createState() => _SpecialPageState();
}

class _SpecialPageState extends State<SpecialPage>
    with AutomaticKeepAliveClientMixin {
  @override
  bool get wantKeepAlive => true;
  @override
  Widget build(BuildContext context) {
    return Container(
      child: Center(child: Text("专题")),
    );
  }
}
