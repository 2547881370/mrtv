import 'package:app/components/home/bottom_navbar.dart';
import 'package:app/view_model/home_model.dart';
import 'package:flutter/material.dart';
import 'package:provider/provider.dart';

class Home extends StatefulWidget {
  @override
  _HomeState createState() => _HomeState();
}

class _HomeState extends State<Home> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
        bottomNavigationBar: BottomNavBar(),
        body: MediaQuery.removePadding(
            context: context,
            removeTop: true,
            child: Consumer<HomeModel>(builder: (context, homeModel, child) {
              return IndexedStack(
                index: homeModel.currentIndex,
                children: tabBodies,
              );
            })));
  }
}
