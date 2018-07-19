//index.js
//获取应用实例
const {
    api,
    config
} = require('../../utils/config.js')
const network = require("../../utils/network.js")
const popup = require('../../utils/popup.js')
const jump = require('../../utils/jump.js')
const app = getApp()
Page({
    data: {
        all: {
            company: '',
            name: '',
            phone: '',
            mail: '',
            area: '',
            address: '',
        },
        userInfo: {},
        hasUserInfo: false,
        canIUse: wx.canIUse('button.open-type.getUserInfo'),
        getStatus:true
    },
    //事件处理函数
    // 打开文件夹上传图片
    // bindFile: function() {
    //     var _this = this;
    //     wx.chooseImage({
    //         count: 1, // 默认9
    //         // sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
    //         // sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
    //         sizeType: ['compressed'],
    //         sourceType: ['album'],
    //         success: function(res) {
    //             var tempFilePaths = res.tempFilePaths;
    //             console.log(tempFilePaths);
    //             var data = {
    //                 path: tempFilePaths[0]
    //             };
    //             network.uploadFile({
    //                 params: data,
    //                 success: function(res) {
    //                     console.log(res.data);
    //                     res.data = JSON.parse(res.data);
    //                     // res.data.msg
    //                     if (res.data.status == 1) {
    //                         popup.showToast('图片上传成功', 'success');
    //                         wx.setStorage({
    //                             key: "phoneUrl",
    //                             data: res.data.url
    //                         })
    //                         // 返回首页
    //                         setTimeout(function() {
    //                             jump.redirectTo('/pages/upLoading/upLoading');
    //                         }, 1000);
    //                     } else {
    //                         popup.showToast('图片上传失败');
    //                     }
    //                 },
    //                 fail: function() {
    //                     //失败后的逻辑  
    //                 },
    //             });
    //         }
    //     })
    // },
    // 打开相机拍照上传图片
    bindCamera: function() {
        var _this = this;
        wx.chooseImage({
            count: 1, // 默认9
            // sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
            // sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
            sizeType: ['compressed'],
            sourceType: ['album', 'camera'],
            success: function(res) {
                var tempFilePaths = res.tempFilePaths;               
                wx.getImageInfo({
                  src: tempFilePaths[0],
                  success:function(res){
                    // var wy = {
                    //   w: res.width,
                    //   h: res.height
                    // };
                    // wx.setStorage({
                    //   key: "phoneWy",
                    //   data: wy,
                    // });
                  }
                })
                var data = {
                    path: tempFilePaths[0]
                };
                network.uploadFile({
                    params: data,
                    success: function(res) {
                        console.log(res.data);
                        res.data = JSON.parse(res.data);
                        var wy = {
                          w: res.data.width,
                          h: res.data.height
                        };
                        wx.setStorage({
                          key: "phoneWy",
                          data: wy,
                        });
                        
                        // res.data.msg
                        if (res.data.status == 1) {
                            popup.showToast('图片上传成功', 'success');
                            wx.setStorage({
                                key: "phoneUrl",
                                data: res.data.url
                            })
                            // 返回首页
                            setTimeout(function() {
                              jump.navigateTo('/pages/upLoading/upLoading');
                            }, 1000);
                        } else {
                            popup.showToast('图片上传失败');
                        }
                    },
                    fail: function() {
                        //失败后的逻辑  
                    },
                });
            }
        })
    },
    bindMy: function() {
        wx.navigateTo({
            url: '../nameCard/nameCard'
        })
    },
    myCard: function() {
        wx.navigateTo({
            url: '../create/create'
        })
    },
    onLoad: function() {
        if (app.globalData.userInfo) {
            this.setData({
                userInfo: app.globalData.userInfo,
                hasUserInfo: true
            })
        } else if (this.data.canIUse) {
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
    onShareAppMessage: function(e) {
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
    },
    onShow: function() {
        var _this = this;
        setTimeout(function() {
            var url = config.route + api.addUserCard,
                data = {
                    uid: app.globalData.id,
                };
            network.GET(url, {
                params: data,
                success: function(res) {
                    // 对象不能直接用length计算长度
                    var arr = Object.keys(res.data);
                    if (arr.length > 0) {
                        _this.setData({
                            all: res.data
                        });
                    } else {
                        _this.setData({
                            all: {}
                        });
                    }
                },
                fail: function() {
                    //失败后的逻辑  
                },
            })
        }, 1000);
    }
})