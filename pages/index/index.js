//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    all:{
      companyName:'',
      name:'',
      phone:'15999911956',
      email:'qiuzijia520@qq.com',
      address:'广州市海珠区琶洲新村广州市海珠区琶洲新村',
    },
    
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
  //事件处理函数
  bindFile: function() {
    wx.navigateTo({
      url: '../about/about'
    })
  },
  bindCamera: function () {
    wx.navigateTo({
      url: '../about/about'
    })
  },
  bindMy: function () {
    wx.navigateTo({
      url: '../about/about'
    })
  },
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  onShareAppMessage:function(e){
    return {
      title: '嘎嘎',
      path: '/pages/index/index'
    }
  },
  getUserInfo: function(e) {
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})
