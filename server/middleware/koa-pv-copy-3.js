function pv(ctx){
    console.log("pv3");
}

module.exports = function(){
    return async function(ctx, next){
        console.log("pv3" + " start");
        pv(ctx);
        await next();
        console.log("pv3" + " end");
    }
}