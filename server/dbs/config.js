module.exports = {
    dbs : "mongodb://127.0.0.1:27017/dbs",
    reids : {
        getHost(){
            return "127.0.0.1"
        },
        getPort(){
            return 6379
        }
    },
    smtp : {
         getHost(){
             return "smtp.qq.com"
         },
         getUser(){
            return "2547881370@qq.com"
         },
         getPass(){
             return "kysllbzkkxgudifd"
         }

    },
    getCode(){
        return (()=>{
            return Math.random().toString(16).slice(2,6).toUpperCase()
        })()
    },
    getExpire(){
        return (()=>{
            return new Date().getTime()+60000
        })()
    }

}