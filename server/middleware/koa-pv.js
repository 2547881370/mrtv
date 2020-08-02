function pv(ctx){
    ctx.session.age++;
    console.log("pv");
}

module.exports = function(){
    return async function(ctx, next){
        console.log("pv" + " start");
        pv(ctx);
        await next();
        console.log("pv" + " end");
    }
}