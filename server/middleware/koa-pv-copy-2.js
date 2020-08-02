function pv(ctx){
    console.log("pv2");
}

module.exports = function(){
    return async function(ctx, next){
        console.log("pv2" + " start");
        pv(ctx);
        await next();
        console.log("pv2" + " end");
    }
}