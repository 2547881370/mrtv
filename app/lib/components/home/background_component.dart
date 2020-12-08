import 'package:flutter/material.dart';

class BackgroundComponent extends StatefulWidget {
  Widget child;
  BackgroundComponent({Key key, this.child}) : super(key: key);

  @override
  _BackgroundComponentState createState() => _BackgroundComponentState();
}

class _BackgroundComponentState extends State<BackgroundComponent> {
  @override
  Widget build(BuildContext context) {
    return Container(
        decoration: BoxDecoration(
            gradient: LinearGradient(
                colors: [Colors.deepOrange[500], Colors.yellow[700]])),
        child: widget.child);
  }
}
