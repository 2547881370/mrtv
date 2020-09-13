const  fs = require('fs');
const  pump = require('pump');
const Controller = require('egg').Controller;

/**
 * @controller upload Controller
 */
class uploadController extends Controller {
  /**
   * @summary 文件上传
   * @description 文件上传 用户头像上传
   * @router post /upload
   * @request formData file *file
   * @request header string *token
   * @response 200 baseResponse 上传成功
   */
  async saveAvatar() {
    const { ctx } = this;
    const parts = ctx.multipart({ autoFields: true });
    let files = {};
    let stream;
    while ((stream = await parts()) != null) {
      if(!stream.filename){
        break;
      }
      const fieldname = stream.fieldname; // file表单的名字
      // 上传图片的目录
      const dir = await this.service.uploadfile.getUploadFile(stream.filename);
      const target = dir.uploadDir;
      const writeStream = fs.createWriteStream(target);

      await pump(stream, writeStream);

      files = Object.assign(files, {
        [fieldname]: dir.saveDir
      });
    }

    if(Object.keys(files).length > 0){
      this.JsonBody({
        code: 200,
        message: '图片上传成功',
        data: files
      });
    }else{
      this.JsonBody({
        code: 500,
        message: '图片上传失败',
        data: {}
      });
    }
  }

  /*
 * 对返回的数据结果进行封装。
 */
  JsonBody (data) {
    let { ctx } = this;
    ctx.helper.JsonBody(data)
  }
}

module.exports = uploadController;
