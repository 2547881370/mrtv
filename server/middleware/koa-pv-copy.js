function pv(ctx){
    console.log("pv1");
}

module.exports = function(){
    return async function(ctx, next){
        console.log("pv1" + " start");
        pv(ctx);
        await next();
        console.log("pv1" + " end");
    }
}