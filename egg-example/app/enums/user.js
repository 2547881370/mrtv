module.exports = {
    // 各个等级所对应的每天观看影片的次数
    user_video_level : {
        "1" : {
            // 等级翻译
            name : "VIP1",
            // 对应每日观看次数
            videoAge:20,
            // 推广多少人数可到达最小
            minExtensionAge : 0,
            // 推广多少人数可到达最大
            maxExtensionAge : 1,
            // vip等级枚举
            level:1
        },
        "2" : {
            name : "VIP2",
            videoAge:40,
            minExtensionAge : 1,
            maxExtensionAge: 3,
            level:2
        },
        "3" : {
            name : "VIP3",
            videoAge:60,
            minExtensionAge : 3,
            maxExtensionAge:5,
            level:3
        },
        "4" : {
            name : "VIP4",
            videoAge:80,
            minExtensionAge : 5,
            maxExtensionAge:10,
            level:4
        },
        "5" : {
            name : "VIP5",
            videoAge:100,
            minExtensionAge : 10,
            maxExtensionAge:999999,
            level:5
        },
    }
}