// pages/create/create.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    hasData:true,
    all: {
      companyName: '',
      name: '',
      phone: '15999911956',
      email: 'qiuzijia520@qq.com',
      address: '广州市海珠区琶洲新村广州市海珠区琶洲新村',
    },
    region: [],
    addressDetail:''
  },

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
    // 获取地理位置
    var self = this;
    wx.getLocation({
      type: 'wgs84',
      success: function (res) {
        // success    
        var longitude = res.longitude
        var latitude = res.latitude
        wx.request({
          url: 'http://apis.map.qq.com/ws/geocoder/v1/?location=' + latitude + ',' + longitude + '&key=Z3BBZ-C563U-MDPVI-BSXTL-ZB2W5-ZRBHU&get_poi=0',
          data: {},
          header: {
            'Content-Type': 'application/json'
          },
          success: function (res) {
            console.log(res);
            var address = [];
            address.push(res.data.result.ad_info.province);
            address.push(res.data.result.ad_info.city);
            address.push(res.data.result.ad_info.district);
            var addressD = res.data.result.address_component.street_number;
            self.setData({
              region: address,
              addressDetail: addressD
            });
          },
          fail: function () {
            page.setData({ currentCity: "获取定位失败" });
          },

        });
      },
      fail: function () {
        wx.showModal({
          title: '是否要打开设置页面重新授权',
          content: '请到小程序设置中授权获取位置',
          confirmText: '去设置',
          confirmColor: '#ea3424',
          success: function (res) {
            if (res.confirm) {
              wx.openSetting({
                success: (res) => {
                  res.authSetting = {
                    "scope.userLocation": true
                  }
                }
              })
            } else if (res.cancel) { }
          }
        })
      }
    });
    //设置标题
    wx.setNavigationBarTitle({
      title: '我的'
    });
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
  
  },
  bindRegionChange: function (e) {
    this.setData({
      region: e.detail.value
    })
  }
})