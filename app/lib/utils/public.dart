import 'dart:convert';
import 'package:convert/convert.dart';
import 'package:crypto/crypto.dart';

String generate_MD5(String data) {
  var content = new Utf8Encoder().convert(data);
  var digest = md5.convert(content);
  // 这里其实就是 digest.toString()
  return hex.encode(digest.bytes);
}
