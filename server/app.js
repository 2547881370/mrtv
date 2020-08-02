const Koa = require('koa')
const app = new Koa()
const views = require('koa-views')
const json = require('koa-json')
const onerror = require('koa-onerror')
const bodyparser = require('koa-bodyparser')
const logger = require('koa-logger');

const session = require("koa-generic-session");
const Redis = require("koa-redis");

const mongose = require("mongoose");
const configMongo = require("./dbs/config");
const Passport = require("./dbs/interface/utils/passpost");

const index = require('./routes/index')
const users = require('./routes/users');
const login = require("./dbs/interface/users");

const pv = require("./middleware/koa-pv");
const pv1 = require("./middleware/koa-pv-copy");
const pv2 = require("./middleware/koa-pv-copy-2");
const pv3 = require("./middleware/koa-pv-copy-3");

// error handler
onerror(app);

//连接Redis 并与session结合,并且ctx中也注入了session
app.keys = [
  "keys",
  "keyskeys",
];//可以随便设置,用于浏览器端的session加密
app.use(session({
  key : 'mrtv',
  prefix : "mrtv-xh",
  store : new Redis(),//这里不传参,也是可以连接到Redis的,因为本地启动了Redis,使用的是默认端口和地址
}));

// middlewares
// app.use(pv());
// app.use(pv1());
// app.use(pv2());
// app.use(pv3());
app.use(bodyparser({
  enableTypes:['json', 'form', 'text']
}))
app.use(json())
app.use(logger());
app.use(Passport.initialize());
app.use(Passport.session());
app.use(require('koa-static')(__dirname + '/public'))

app.use(views(__dirname + '/views', {
  extension: 'ejs'
}))

// logger
app.use(async (ctx, next) => {
  const start = new Date()
  await next()
  const ms = new Date() - start
  console.log(`${ctx.method} ${ctx.url} - ${ms}ms`)
})

// routes
app.use(index.routes(), index.allowedMethods());
app.use(users.routes(), users.allowedMethods());
app.use(login.routes(), login.allowedMethods());

mongose.connect(configMongo.dbs , {
  useNewUrlParser: true,
  useUnifiedTopology: true     //这个即是报的警告
},()=>{
  console.log("mongo")
});

// error-handling
app.on('error', (err, ctx) => {
  console.error('server error', err, ctx)
});

module.exports = app
