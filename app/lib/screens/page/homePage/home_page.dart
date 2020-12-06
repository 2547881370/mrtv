import 'package:flutter/material.dart';

class HomePage extends StatefulWidget {
  HomePage({Key key}) : super(key: key);

  @override
  _HomePageState createState() => _HomePageState();
}

class _HomePageState extends State<HomePage>
    with AutomaticKeepAliveClientMixin {
  @override
  bool get wantKeepAlive => true;
  int age = 1;
  @override
  Widget build(BuildContext context) {
        return Scaffold(
            appBar: PreferredSize(
                child: Container(
                  width: double.infinity,
                  height: double.infinity,
                  decoration: BoxDecoration(
                      gradient:
                          LinearGradient(colors: [Colors.deepOrange[500], Colors.yellow[700]])),
              child: SafeArea(child: Text("1212")),
            ),
            preferredSize: Size(double.infinity, 120)),
        body: Container(
          child: Center(
            child: InkWell(
                child: Text("首页+${age}"),
                onTap: () => {
                      setState(() {
                        age++;
                      })
                    }),
          ),
        ));
  }
}
