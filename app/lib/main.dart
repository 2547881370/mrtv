import 'package:flutter/material.dart';

// 路由架构
// 参照链接 https://segmentfault.com/a/1190000021488577
// 参照动画 https://blog.csdn.net/z591102/article/details/107839695
import 'package:fluro/fluro.dart';
import 'package:app/routers/application.dart';
import 'package:app/routers/routes.dart';
import "package:app/routers/navigator_util.dart";

// Api架构
// 参照链接 https://juejin.im/post/6844903708757590024#heading-4
import "package:app/api/Api.dart";

// State架构
// 参考连接 : https://juejin.im/post/6872153613776060424#heading-4
// 注意: 通过Provider来获取被管理的数据的三种方式：Provider.of，Consumer和Selector，它们的功能完全一致，区别仅仅在于刷新的控制粒度。
import 'package:provider/provider.dart';
import 'package:app/config/provider_manager.dart';
import "package:app/provider/provider_widget.dart";
import "package:app/view_model/test_model.dart";

// 启动页面
import "package:app/screens/page/stateUp/state_up.dart";

// 屏幕和字体适配
import 'package:flutter_screenutil/flutter_screenutil.dart';

import "package:app/constants.dart";

import 'dart:io';
import 'package:flutter/services.dart';

void main() {
  // 禁用提示
  Provider.debugCheckInvalidValueType = null;

  // widget和flutter初始化
  WidgetsFlutterBinding.ensureInitialized();

  runApp(MyApp());

   if (Platform.isAndroid) {
    // 以下两行 设置android状态栏为透明的沉浸。写在组件渲染之后，是为了在渲染后进行set赋值，覆盖状态栏，写在渲染之前MaterialApp组件会覆盖掉这个值。
    SystemUiOverlayStyle systemUiOverlayStyle =
        SystemUiOverlayStyle(statusBarColor: Colors.transparent);
   SystemChrome.setSystemUIOverlayStyle(systemUiOverlayStyle);
  }
}

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    final router = Router();
    Routes.configureRoutes(router);
    Application.router = router;
    return MultiProvider(
        providers: providers,
        child: LayoutBuilder(
          builder: (context, constraints) {
            //设置适配尺寸 (填入设计稿中设备的屏幕尺寸) 此处假如设计稿是按iPhone6的尺寸设计的(iPhone6 750*1334)
            ScreenUtil.init(constraints,
                designSize: Size(750, 1334), allowFontScaling: false);
            return MaterialApp(
              debugShowCheckedModeBanner: false,
              title: 'Flutter Demo',
              theme: ThemeData(
                textTheme:
                    Theme.of(context).textTheme.apply(bodyColor: kTextColor),
                visualDensity: VisualDensity.adaptivePlatformDensity,
              ),
              // home: MyHomePage(title: 'Flutter Demo Home Page'),
              home: LaunchPage(),
            );
          },
        ));
  }
}

class MyHomePage extends StatefulWidget {
  MyHomePage({Key key, this.title}) : super(key: key);
  final String title;

  @override
  _MyHomePageState createState() => _MyHomePageState();
}

var style = TextStyle(color: Colors.white);

class _MyHomePageState extends State<MyHomePage> {
  String src = "1321232131";

  void _testRequest() async {
    final res = await Api.UserLoginApi(
        {"user_name": "lalalal2414214", "user_pwd": "12312414124"});
    this.setState(() {
      src = "姓名" +
          res.data.userName +
          "\n" +
          "密码" +
          res.data.userPwd +
          "\n" +
          "userNickName" +
          res.data.userNickName +
          "\n" +
          "userQq" +
          res.data.userQq +
          "\n" +
          "userEmail" +
          res.data.userEmail +
          "\n" +
          "userPhone" +
          res.data.userPhone +
          "\n" +
          "token = " +
          res.data.token +
          "\n";
    });
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text(widget.title),
      ),
      body: Column(
        children: [
          ProviderWidget<TestModel>(
              model: TestModel(title: "3"),
              builder: (context, TestModel, child) {
                print("TestMode1重新build");
                return Container(
                    child: Center(
                        child: Padding(
                  padding: const EdgeInsets.all(8.0),
                  child: Container(
                    color: Colors.redAccent,
                    height: 48,
                    child: Row(
                      mainAxisAlignment: MainAxisAlignment.spaceEvenly,
                      children: <Widget>[
                        Text('Child1', style: style),
                        Text('Model data: ${TestModel.title}', style: style),
                        RaisedButton(
                          onPressed: () => TestModel.setTitle("3"),
                          child: Text('add'),
                        ),
                        RaisedButton(
                          onPressed: () => TestModel.removeTitle(),
                          child: Text('remove'),
                        ),
                      ],
                    ),
                  ),
                )));
              }),
          ProviderWidget<TestMode2>(
              model: TestMode2(title: "4"),
              builder: (context, TestModel, child) {
                print("TestMode2重新build");
                return Container(
                    child: Center(
                        child: Padding(
                  padding: const EdgeInsets.all(8.0),
                  child: Container(
                    color: Colors.blueAccent,
                    height: 48,
                    child: Row(
                      mainAxisAlignment: MainAxisAlignment.spaceEvenly,
                      children: <Widget>[
                        Text('Child2', style: style),
                        Text('Model data: ${TestModel.title}', style: style),
                        RaisedButton(
                          onPressed: () => TestModel.setTitle("2"),
                          child: Text('add'),
                        ),
                        RaisedButton(
                          onPressed: () => TestModel.removeTitle(),
                          child: Text('remove'),
                        ),
                      ],
                    ),
                  ),
                )));
              }),
          Container(
              child: Center(
                  child: Padding(
            padding: const EdgeInsets.all(8.0),
            child: Container(
              color: Colors.redAccent,
              height: 48,
              child: Row(
                mainAxisAlignment: MainAxisAlignment.spaceEvenly,
                children: <Widget>[
                  RaisedButton(
                    onPressed: () =>
                        {NavigatorUtil.jump(context, '/indexPage')},
                    child: Text('routerRight'),
                  ),
                  RaisedButton(
                    onPressed: () =>
                        {NavigatorUtil.jumpLeft(context, '/normalPage')},
                    child: Text('routerLeft'),
                  ),
                ],
              ),
            ),
          ))),
          Container(
              color: Colors.deepOrangeAccent,
              child: Center(
                child: Text('$src', style: style),
              )),
        ],
      ),
      floatingActionButton: InkWell(
        borderRadius: BorderRadius.circular(45),
        onTap: _testRequest,
        child: Container(
          height: 80,
          width: 80,
          alignment: Alignment.center,
          decoration: BoxDecoration(
            color: Colors.blue,
            borderRadius: BorderRadius.circular(45),
          ),
          child: Text(
            "点击请求",
            style: TextStyle(color: Colors.white),
          ),
        ),
      ), // This trailing comma makes auto-formatting nicer for build methods.
    );
  }
}
