const router = require('koa-router')()
const Redis = require("koa-redis");
const nodemailer = require("nodemailer");//发送邮箱
const User = require("../models/users");
const Passport = require("./utils/passpost")
const Email = require("../config");
const axios = require("./utils/axios");

router.prefix('/login');

let Stroe = new Redis().client;

router.post("/signup", async (ctx) => {
    const {
        username, password, email, code
    } = ctx.request.body;

    if (code) {
        //从redis取验证码 , 这里取值就相当于, 在nodemail:${username}对象中,取code的值
        const saveCode = await Stroe.hget(`nodemail:${username}`, "code");
        const saveExpire = await Stroe.hget(`nodemail:${username}`, "expire");
        console.log(saveExpire ,saveCode , 999)

        if (code === saveCode) {
            if (new Date().getTime() - saveExpire > 0) {
                ctx.body = {
                    code: -1,
                    msg: "验证码已过期,请重新尝试"
                };
                return false;
            }
        } else {
            ctx.body = {
                code: -1,
                msg: "请填写正确的验证码"
            }
            return false;
        }

    } else {
        ctx.body = {
            code: -1,
            msg: "请填写验证码"
        }
        return false;
    }

    let user = await User.find({
        username
    });
    if (user.length) {
        ctx.body = {
            code: -1,
            msg: "已被注册"
        }
        return false;
    };

    //入库
    let nuser = await User.create({
        username,
        password
    });
    if (nuser) {
        ctx.body = {
            code: 000000,
            msg: "注册成功"
        }
        nuser.save();
    } else {
        ctx.body = {
            code: -1,
            msg: "注册失败"
        }
    }
});

router.post("/signin", async (ctx, next) => {
  try{
    return Passport.authenticate("local", function (err, user, info, state) {
        if (err) {
            ctx.body = {
                code: -1,
                msg: err
            }
        } else {
            if (user) {
                ctx.body = {
                    code: 0,
                    msg: "登录成功",
                    user
                }
                return ctx.login(user);
            } else {
                ctx.body = {
                    code: -1,
                    msg: info
                }
            }

        }
    })(ctx, next);
  }catch(e){
    ctx.body = {
        code: -1,
    }
  }
});

router.post("/verify", async (ctx, next) => {
    try {
        let username = ctx.request.body.username;
        const saveExpire = await Stroe.hget(`nodemail:${username}`, "expire");
        if (saveExpire && new Date().getTime() - saveExpire < 0) {
            ctx.body = {
                code: -1,
                msg: "验证码请求过于频繁,请1分钟后再试"
            }
            return false
        }
        //配置邮箱
        let transporter = nodemailer.createTransport({
            host: Email.smtp.getHost(),
            port: 587,
            secure: false,
            auth: {
                user: Email.smtp.getUser(),
                pass: Email.smtp.getPass()
            }
        });
        let ko = {
            code: Email.getCode(),
            expire: Email.getExpire(),
            email: ctx.request.body.email,
            user: username,
        };

        let mailOptions = {
            from: `"认证邮箱"<${Email.smtp.getUser()}>`,
            to: ko.email,
            subject: `尊敬的${username}`,
            html: `你的验证码为 : ${ko.code}`
        };

        await transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                return console.log("error");
            } else {
                Stroe.hmset(`nodemail:${ko.user}`, "code", ko.code, "expire", ko.expire, "email", ko.email)
            }
        });
        ctx.body = {
            code: 000000,
            msg: "发送验证码成功"
        }
    } catch (e) {
        console.log(e)
        ctx.body = {
            code: -1,
        }
    }

})

module.exports = router;