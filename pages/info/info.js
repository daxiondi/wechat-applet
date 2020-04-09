// pages/info/info.js
var common = require("../../utils/common.js")
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    wx.request({
      url: common.url+'/goods/id/'+options.goods_id,
      header: {
        'content-type': 'application/json' // 默认值
      },
      success(res) {
        console.log(res.data)
        that.setData({
          goods:res.data,
        })
      }
     })
  },
  addFavorites: function () {
    const user_id = wx.getStorageSync('user_id'); 
    let goods = this.data.goods

    console.log(goods);
    if (user_id == ""){
      wx.showToast({
        title: '请先登陆',
        icon: 'none',
        duration: 2000
      })
      return ;
    }
      
      if(goods.goods_id){
        if (user_id == ""){
          wx.showToast({
            title: '未知错误',
            icon: 'none',
            duration: 2000
          })
          return ;
        }
      }
      var that = this;
      wx.request({
        url: common.url+'/goods/add',
        method: "POST",
        data:({
          user_id: user_id,
          goods_id: goods.goods_id,
          goods_name: goods.goods_name,
          goods_poster: goods.goods_poster,
          }),
        header: {
          'content-type': 'application/x-www-form-urlencoded' 
        },
        success (res) {
          if(res.data > 0) {
              wx.showToast({
                title: '收藏成功',
                icon: 'none',
                duration: 2000
              })
          }
        },complete(){
          wx.showToast({
            title: '收藏成功',
            icon: 'none',
            duration: 2000
          })
        }
      })
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