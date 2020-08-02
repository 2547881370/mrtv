const passport = require("koa-passport")
const LocalStrategy = require("passport-local"); //这是本地的策略,也可以自定义策略
const UserMOdel = require("../../models/users");

passport.use(new LocalStrategy(async  function (username , password , done){
    console.log("jin")
    let where = {
        username
    };
    let result = await UserMOdel.findOne(where);
    if(result != null){
        if(result.password === password){
                return done(null , result)
        }else{
            return done(null , false , "密码错误");
        }
    }else{
        return done(null , false , "用户不存在")
    }
}));


/**
 * 浏览器中的session是加密过的, 所有就要序列化和反序列化,验证通过后, 会序列化加入到session中
 * 取值就是反序列化, 解密的意思
 */
//序列化
passport.serializeUser(function(user , done){
    done(null , user);
});

//反序列化
passport.deserializeUser(function(user, done){
    return done(null , user);
});


module.exports = passport;