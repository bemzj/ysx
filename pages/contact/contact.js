// pages/contact/contact.js
Page({

  /**
   * 页面的初始数据
   */
  data: {   
    map:{
      longitude: 113.3826023340,
      latitude: 23.0984195024,
      scale:18,
      showLocation:false,
      markers:[{
        id:1,
        longitude: 113.3826023340,
        latitude: 23.0984195024,
        title: '恒帝科技信息科技有限公司',
        iconPath:'/images/addressIcon.png',
      }],
      controls: [{
        id: 1,
        iconPath: '/images/addressIcon.png',
        position: {
          left: 0,
          top: 300 - 50,
          width: 50,
          height: 50
        },
        clickable: true
      }]
    },
    bannerSrc:'http://www.hengdikeji.com/home/img/contractBanner1.jpg',
    infor:[
      {
        "src":"http://www.hengdikeji.com/html/img/address.png",
        "content":'广州市海珠区琶洲商业广场蟠龙新街11栋3号710',
        "size":'28rpx'
      },
      {
        "src": "http://www.hengdikeji.com/html/img/email.png",
        "content": 'info@hengdikeji.com',
        "size":'20rpx' 
      },
      {
        "src": "http://www.hengdikeji.com/html/img/phone.png",
        "content": '020-29015797',
        "size":'26rpx'
      },
      {
        "src": "http://www.hengdikeji.com/html/img/http.png",
        "content": 'www.hengdikeji.com',
        "size":'24rpx'
      }
    ],
    
  },
  openPhone:function(e){
      wx.makePhoneCall({
        phoneNumber: this.data.infor[2].content
      })
  },
  setClip: function (e) {
    wx.setClipboardData({
      data: this.data.infor[e.currentTarget.dataset.index].content,
      success: function (res) {
        wx.getClipboardData({
          success: function (res) {
            console.log(res.data) // data
          }
        })
      }
    })
  },
  // navigation(e) {
  //   wx.getSetting({
  //     success: (res) => {
  //       console.log(res);
  //       /*
  //        * res.authSetting = {
  //        *   "scope.userInfo": true,
  //        *   "scope.userLocation": true
  //        * }
  //        */
  //     }
  //   });
  //   wx.openLocation({
  //     latitude: 23.0984195024,
  //     longitude: 113.3826023340,
  //     scale: 18,
  //     name: '恒帝信息科技有限公司',
  //     address: '广州市海珠区琶洲新村11栋710'
  //   })
  // }
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})