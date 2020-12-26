import 'dart:io';

import 'package:app/api/Api.dart';
import 'package:app/api/EntityFactory.dart';
import 'package:app/api/baseApi.dart';
import 'package:app/components/home/background_component.dart';
import 'package:app/components/toast/Toast_postion.dart';
import 'package:app/model/file_upload.dart';
import 'package:app/routers/navigator_util.dart';
import 'package:app/utils/dataPersistence.dart';
import 'package:app/utils/isLogin.dart';
import 'package:app/view_model/user_model.dart';
import 'package:dio/dio.dart';
import 'package:flutter/material.dart';
import 'package:flutter_screenutil/screenutil.dart';
import 'package:flutter_svg/svg.dart';
import 'package:image_picker/image_picker.dart';
import 'package:provider/provider.dart';

import '../../../constants.dart';

class MyUserInfo extends StatefulWidget {
  @override
  _MyUserInfoState createState() => _MyUserInfoState();
}

class _MyUserInfoState extends State<MyUserInfo> {
  final picker = ImagePicker();

  Future getImage() async {
    final pickedFile = await picker.getImage(source: ImageSource.gallery);

    if (pickedFile == null || pickedFile.path == null) return false;

    ///创建Dio
    Dio dio = new Dio();

    String path = pickedFile.path;

    Map<String, dynamic> map = Map();
    map["file"] = await MultipartFile.fromFile(path);

    ///通过FormData
    FormData formData = FormData.fromMap(map);
    print(formData);

    dio.options.headers['token'] = await getToken();
    Response response = await dio.post(
      NWApi.baseApi + NWApi.upload, data: formData,

      ///这里是发送请求回调函数
      ///[progress] 当前的进度
      ///[total] 总进度
      onSendProgress: (int progress, int total) {
        print("当前进度是 $progress 总进度是 $total");
      },
    );

    ///服务器响应结果
    var data = EntityFactory.generateOBJ<FileUpload>(response.data);
    print(data);
    if (data == null) return false;
    // code : 000000 , 更新用户信息
    if (data.code == "000000") {
      await Provider.of<UserInfoModel>(context, listen: false).setFraction();
    }
    // 弹出提示框
    Toast.toast(
      context,
      msg: data.msg,
      position: ToastPostion.bottom,
    );
  }

  void logOut() async {
    PersistentStorage ps = PersistentStorage();
    // 清空本地缓存
    await ps.clear();
    // 路由跳转我的页面
    NavigatorUtil.goToHomeRemovePage(context);
    Provider.of<UserInfoModel>(context, listen: false).initUser_name();
  }

  void upDateUserName() {
     NavigatorUtil.jump(context, '/myUpdateName');
  }

  @override
  Widget build(BuildContext context) {
    final double topPadding = MediaQuery.of(context).padding.top + 15;
    return Scaffold(
      body: BackgroundComponent(
          child: Column(
        children: [
          Container(
            margin: EdgeInsets.only(top: topPadding),
            child: MyPageTitle(),
          ),
          Expanded(
              child: Container(
                  decoration: BoxDecoration(color: Colors.grey[50]),
                  child: Column(
                    children: [
                      MyInfoItem(title: "更换头像", fn: getImage),
                      MyInfoItem(title: "更换昵称", fn: upDateUserName),
                      MyInfoButton(fn: logOut)
                    ],
                  )))
        ],
      )),
    );
  }
}

class MyInfoButton extends StatelessWidget {
  const MyInfoButton({Key key, @required this.fn}) : super(key: key);
  final Function fn;

  @override
  Widget build(BuildContext context) {
    return InkWell(
        onTap: fn,
        child: Container(
            color: Colors.white,
            padding: EdgeInsets.symmetric(
              vertical: ScreenUtil().setHeight(20),
            ),
            margin: EdgeInsets.symmetric(
                vertical: ScreenUtil().setHeight(kDefaultPaddin)),
            alignment: Alignment.center,
            child: Text("退出登录",
                style: TextStyle(
                    color: Colors.black, fontWeight: FontWeight.w500))));
  }
}

class MyInfoItem extends StatelessWidget {
  final String title;
  final Function fn;

  const MyInfoItem({Key key, @required this.title, @required this.fn})
      : super(key: key);

  @override
  Widget build(BuildContext context) {
    return InkWell(
        onTap: fn,
        child: Container(
            padding: EdgeInsets.symmetric(
                horizontal: ScreenUtil().setWidth(kDefaultPaddin)),
            decoration: BoxDecoration(
              color: Colors.white,
            ),
            child: Container(
                padding: EdgeInsets.symmetric(
                  vertical: ScreenUtil().setHeight(20),
                ),
                decoration: BoxDecoration(
                    border: Border(
                  bottom: BorderSide(
                    width: 1, //宽度
                    color: Colors.black12, //边框颜色
                  ),
                )),
                child: Row(
                  mainAxisAlignment: MainAxisAlignment.spaceBetween,
                  children: [
                    Container(
                        child: Text(title,
                            style: TextStyle(
                                color: Colors.black,
                                fontWeight: FontWeight.w500))),
                    Container(
                        width: ScreenUtil().setWidth(20),
                        height: ScreenUtil().setHeight(20),
                        child: SvgPicture.asset("assets/icons/listfh.svg",
                            color: Colors.black.withOpacity(0.3))),
                  ],
                ))));
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
      padding: EdgeInsets.symmetric(horizontal: kDefaultPaddin),
      decoration: BoxDecoration(
        color: Colors.deepOrangeAccent.withOpacity(0.1),
      ),
      child: Row(
        children: [
          Container(
              width: ScreenUtil().setWidth(40),
              height: ScreenUtil().setHeight(40),
              child: InkWell(
                  onTap: () {
                    NavigatorUtil.goBack(context);
                  },
                  child: SvgPicture.asset(
                    "assets/icons/fanhui.svg",
                  ))),
          Expanded(
              child: Container(
            alignment: Alignment.center,
            child: Text(
              "账号设置",
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
