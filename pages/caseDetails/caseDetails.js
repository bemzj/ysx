// pages/caseDetails/caseDetails.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    bigIndex:-1,
    
    allImg: [
      "http://www.hengdikeji.com/home/img/img02.png",
      "http://www.hengdikeji.com/home/img/img03.png",
      "http://www.hengdikeji.com/home/img/img04.png",
      "http://www.hengdikeji.com/home/img/img05.png",
      "http://www.hengdikeji.com/home/img/img06.png",
      "http://www.hengdikeji.com/home/img/img07.png"
      ],
    currentCase:{
      name:"好太太换购季",
      time:"2018-4-15",
      imgUrl: "http://www.hengdikeji.com/home/img/img01.png",
      imgEr: "http://www.hengdikeji.com/home/img/erwei.png",
      look: 6000,
      company:"好太太集团",
      firstName:"H5案例",
      secondName:"产品-产品推广",
      content:"“头脑王者”是一款微信小程序游戏。每局比赛两人参与，五道题，在不 用道具的情况下，答对一道题最多可得200分，答得越慢分越少，答错不得分，得分高者获胜。答对一道题最多可得200分，答得越慢分越少，答错不得分，得分高者获胜。 头脑王者每局比赛两人参与，五道题，在不用道具的情况下，答对一道题最多可得200分，答得越慢分越少，答错不得分。有十秒时间限制，如果在第一秒答对，得200分，如果用了一秒（即还剩9秒），则得180分，剩8秒则得160分，以此类推，最后一道题得分双倍。"
    },
    elseCase:[
      {
        link:"caseDetails",
        imgLink:"http://www.hengdikeji.com/home/img/img08.png",
        name:"好太太换购季",
        look: 6000,
        collect: 2100,
        firstName:"H5案例",
        secondName:"产品-产品推广"
      },
      {
        link: "caseDetails",
        imgLink: "http://www.hengdikeji.com/home/img/img08.png",
        name: "好太太换购季",
        look: 6000,
        collect: 2100,
        firstName: "H5案例",
        secondName: "产品-产品推广"
      },
      {
        link: "caseDetails",
        imgLink: "http://www.hengdikeji.com/home/img/img08.png",
        name: "好太太换购季",
        look: 6000,
        collect: 2100,
        firstName: "H5案例",
        secondName: "产品-产品推广"
      }
    ]
  },
  imgBig:function(e){
    if(this.data.bigIndex==-1)
    {
        this.setData({
          bigIndex: e.currentTarget.dataset.index
        });
    }else{
      this.setData({
        bigIndex:-1
      });
    }
    
  },
  previewImage:function (e) {
    wx.saveImageToPhotosAlbum({
      filePath:'https://www.fakejie.com/UploadFile/QRCode/m00315.jpg', // 当前显示图片的http链接   
      success(res) {
        console.log(1);
      },
      fail(){
        wx.showModal({
          title: '是否要打开设置页面重新授权',
          content: '请到小程序设置中授权保存到相册',
          confirmText: '去设置',
          confirmColor: '#ea3424',
          success: function (res) {
            if (res.confirm) {
              wx.openSetting({
                success: (res) => {
                  res.authSetting = {
                    "scope.writePhotosAlbum": true
                  }
                }
              })
            } else if (res.cancel) { }
          }
        })
      }
    });
    // wx.previewImage({
    //   current: this.data.currentCase.imgEr, // 当前显示图片的http链接     
    //   urls: [this.data.currentCase.imgEr] // 需要预览的图片http链接列表     
    // });
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