const router = require('koa-router')()
const Person = require("../dbs/models/person");
router.prefix('/users')

router.get('/', function (ctx, next) {
  ctx.body = {
    user: "user" + new Date().getTime()
  }
})

router.get('/bar', function (ctx, next) {
  ctx.body = {
    user: "bar" + new Date().getTime()
  }
});

router.post("/addtUserInformation", async (ctx, next) => {
  let msg;
  global.console.log(ctx.request.header, 99);//params传参
  global.console.log(ctx.request.body, 99);//data传参
  try {
    let {
      title, age
    } = ctx.request.body;
    let findRes = await Person.findOne({
      title
    });
    if (!(findRes && Object.keys(findRes).length > 0)) {
      let res = new Person({
        title,
        age
      });
      await res.save();
      msg = 1
    } else {
      msg = -2
    }
  } catch (e) {
    msg = -1
  }
  ctx.body = {
    msg
  }
});

router.post("/setUserInformation" , async (ctx , next) => {
  let msg ;
  try{
    let {
      title , age 
    } = ctx.request.body;
    var res = await Person.where({
      title
    }).update({
      age
    });
    let {
      n
    } = res;
    if(n > 0){
      msg = 1;
    }else{
      msg = -2;
    }
  }catch(e){
    msg = -1
  };

  ctx.body = {
    msg
  }

});

router.post("/getUserInformation" , async (ctx , next) => {
 let msg ;
 let data = {};
  try{
    let {
      title  , age
    } = ctx.request.body;
  
    data = (await Person.find({
      title 
    })).length > 0 && (await Person.find({
      title 
    })) 
    ||
    (await Person.find({
      age 
    })).length && (await Person.find({
      age 
    }));

    if(data && data.length > 0){
      msg = "000000"
    }else{
      msg = "-2"
    };
  }catch(e){
    msg = "-1"
  }

  ctx.body  = {
    msg, 
    data
  };
});

router.post("/removeUserInformation" , async ( ctx , next ) => {
  let {
    title , age 
  } = ctx.request.body;
  let msg ;
  try {
    let res = await Person.deleteOne({
      title
    });
    global.console.log(res , 99999)
    let {
      n
    } = res;
    if(n && n > 0){
      msg = "000000"
    }else{
      msg = "-2"
    }
  }catch(e){
    msg = "-1"
  }
  ctx.body = {
    msg
  }

});



module.exports = router
