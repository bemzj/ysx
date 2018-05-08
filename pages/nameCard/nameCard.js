// pages/nameCard/nameCard.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    cardList:[
      { name: '王志恒', company: '广州恒帝科技信息有限公司', phone: '137829837498', email: 'jieudngsg@163.com', address:'广东省广州市海珠区琶洲商业广场11栋',show:false},
      { name: '王志恒', company: '广州恒帝科技信息有限公司', phone: '137829837498', email: 'jieudngsg@163.com', address: '广东省广州市海珠区琶洲商业广场11栋',show:false},
      { name: '王志恒', company: '广州恒帝科技信息有限公司', phone: '137829837498', email: 'jieudngsg@163.com', address: '广东省广州市海珠区琶洲商业广场11栋', show: false },
      { name: '王志恒', company: '广州恒帝科技信息有限公司', phone: '137829837498', email: 'jieudngsg@163.com', address: '广东省广州市海珠区琶洲商业广场11栋', show: false },
      { name: '王志恒', company: '广州恒帝科技信息有限公司', phone: '137829837498', email: 'jieudngsg@163.com', address: '广东省广州市海珠区琶洲商业广场11栋', show: false },
      { name: '王志恒', company: '广州恒帝科技信息有限公司', phone: '137829837498', email: 'jieudngsg@163.com', address: '广东省广州市海珠区琶洲商业广场11栋', show: false },
      { name: '王志恒', company: '广州恒帝科技信息有限公司', phone: '137829837498', email: 'jieudngsg@163.com', address: '广东省广州市海珠区琶洲商业广场11栋', show: false },
    ]
  },
  click:function(event){
    let cardList = this.data.cardList,
        index = event.currentTarget.dataset.index,
        str = "cardList["+index+"].show";

    if(this.data.cardList[index].show == false){
      this.setData({
        [str]: true
      })
    }else{
      this.setData({
        [str]:false
      })
    }
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