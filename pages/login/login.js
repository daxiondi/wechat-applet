const common = require("../../utils/common.js")
// pages/login/login.js
Page({
  formSubmit: function (e) {
    const userName =  e.detail.value.userName;
    const passWord = e.detail.value.passWord;
    var that = this;
    wx.request({
      url: common.url+'/user/login?userName='+userName+"&passWord="+passWord,
      header: {
        'content-type': 'application/json' // 默认值
      },
      success(res) {
        console.log(res.data);
        if(res.data == ""){
          wx.showToast({
            title: '账号或密码错误',
            icon: 'none',
            duration: 2000
          })
        }else {
          wx.setStorageSync('user_id', res.data.user_id);
          wx.setStorageSync('name', res.data.name);
          wx.setStorageSync('phone', res.data.phone);
          wx.setStorageSync('password', res.data.password);
          wx.switchTab({
            url: '../my/my',
          })
        }
      }
     })
  },
  /**
   * 页面的初始数据
   */
  data: {

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
    this.setData({
      phone:wx.getStorageSync('phone'),
      password:wx.getStorageSync('password')

    })
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