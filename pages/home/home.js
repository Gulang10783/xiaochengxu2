// getApp()获取app（）产生的实例对象
const app = getApp()

// 注册一个页面
// 页面也有自己的生命周期函数
Page({
  // 初始化数据
  data: {
    list:[]
  },
  // 监听wxml相关事件
  handleGetUserInfo(event) {
    console.log(event)
    app.globalData.userInfo = JSON.parse(event.detail.rawData)
    console.log(JSON.stringify(app.globalData.userInfo.city))
  },

  //其他事件 
  // 监听页面的滚动
  onPageScroll(obj) {
    // console.log(obj)
  },

  // 监听页面的生命周期函数
  onLoad() {
    wx.request({
      url: 'http://192.168.11.104/admin/city/findAll/0/0',
      header: {
        token: "ZXlKaGJHY2lPaUpJVXpJMU5pSXNJblI1Y0NJNklrcFhWQ0o5LmV5SjFjMlZ5WDJsa0lqb2lNVEF3TVNJc0ltVjRjQ0k2TVRVNE16UXdNemsyTWl3aWRYTmxjbTVoYldVaU9pSmhaRzFwYmlKOS5fMjNGTjNlcVJPX2xyUHpLT1M5ZWpxeTlYaGtoclg4UkxXZDNfSENXV1JN "
      },
      method: "get",
      success: (res) => {
        console.log(res)
        this.setData({
          list: JSON.parse(JSON.stringify(res.data.data.pageData))
        })
      }
    })
  },
  // 页面初次渲染完成
  // onReady() {},
  // 页面显示出来
  // onShow() {},
  // 页面隐藏
  // onHide() {},
  // 页面跳转被销毁之前
  // onUnload() {}
})