// pages/join/join.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    bannerSrc:"http://www.hengdikeji.com/home/img/join01.png",
    title: "http://www.hengdikeji.com/home/img/job_03.png",
    hasJoin:false,
    joinList:[{
      name:'客服专员',
      address:'深圳 福田区',
      time:'2018-03-21',
      url:'../../pages/joinDetails/joinDetails'
    }, {
      name: '客服专员1',
      address: '深圳 福田区',
      time: '2018-03-22',
      url: '../../pages/joinDetails/joinDetails'
      }, {
        name: '客服专员2',
        address: '深圳 福田区',
        time: '2018-03-23',
        url: '../../pages/joinDetails/joinDetails'
      }]
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