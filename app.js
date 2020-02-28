//app.js
App({
  // 小程序初始化完成的时候执行的函数
  onLaunch: function() {
    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // // 异步调用
    // wx.getUserInfo({
    //   // 数据拿到之后在进行回调
    //   success: function(res) {
    //     console.log(res)
    //   }
    // })


    // setTimeout(function(){
    //   const err = new Error()

    //   throw err
    // },3000)
  },
  onShow: function(options) {
    console.log(options)
  },
  // 隐藏
  onHide: function() {
    console.log("界面被隐藏时会执行")
  },
  // 错误
  onError: function() {
    console.log("小程序发生一些错误")
  },
  globalData: {
    userInfo: null
  }
})