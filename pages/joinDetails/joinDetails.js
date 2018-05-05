// pages/joinDetails/joinDetails.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    condition:[
      {
        name:'职位描述',
        more: [
          "1、有销售经验，富有挑战精神，个人销售能力突出且带领过团队优先。",
          "2、抗压力强，有亲和力，能增强团队凝聚力和向心力。",
          "3、敏锐的市场意识，丰富的营销渠道和客户资源，能带领团队挣大钱。",
          "4、熟悉图纸，有设计基础更佳。"
        ]
      }, {
        name: '任职要求：',
        more: [
          "1、有销售经验，富有挑战精神，个人销售能力突出且带领过团队优先。",
          "2、抗压力强，有亲和力，能增强团队凝聚力和向心力。",
          "3、敏锐的市场意识，丰富的营销渠道和客户资源，能带领团队挣大钱。",
          "4、熟悉图纸，有设计基础更佳。"
        ]
      }, {
        name: '薪酬福利：',
        more: [
          "1、薪资8-12万，薪资构成=基本工资+绩效工资+提成+全勤奖+工龄奖+活动奖励+年终奖",
          "2、享有带薪休假、婚假、生日礼物等各项福利；",
          "3、晋升空间：公司提供完善的员工职业生涯规划和晋升机制，定期公平竞聘。"
        ]
      }
    ],
    message:[
      {
        title:'招聘负责人：',
        msg:'房跃武'
      },{
        title: '联 系 电 话：',
        msg: '13866625166'
      }, {
        title: '投简历邮箱：',
        msg: '1017659938@qq.com'
      }, {
        title: '面 试 地 点：',
        msg: '广东省广州市海珠区琶洲商业广场11栋710广东省广州市海珠区琶洲商业广场11栋710'
      }
    ]
  },
  applyJob:function(e){
    let email = this.data.message[2].msg;
    wx.showModal({
      title: '温馨提示',
      content: '请把您的简历投递至邮箱'+this.data.message[2].msg,
      success: function (res) {
        if (res.confirm) {
          wx.setClipboardData({
            data: email,
            success: function (res) {
              wx.getClipboardData({
                success: function (res) {
                  console.log(res.data) // data
                }
              })
            }
          })
        } else if (res.cancel) {
          
        }
      }
    })
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