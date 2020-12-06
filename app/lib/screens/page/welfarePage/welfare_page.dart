import 'package:flutter/material.dart';

class WelfarePage extends StatefulWidget {
  WelfarePage({Key key}) : super(key: key);

  @override
  _WelfarePageState createState() => _WelfarePageState();
}

class _WelfarePageState extends State<WelfarePage> {
  @override
  Widget build(BuildContext context) {
    return Container(
       child: Center(
         child:Text(
           "福利"
         )
       ),
    );
  }
}