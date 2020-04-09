// pages/register/register.js
const common = require("../../utils/common.js")

Page({
  formSubmit: function (e) {
    var that = this;
    wx.request({
      url: common.url+'/user/register',
      method: 'post',
      data:({
        phone: e.detail.value.phone,
        nickname: e.detail.value.nickname,
        passWord: e.detail.value.passWord
        }),

      header: {
        'content-type': 'application/x-www-form-urlencoded' // 默认值
      },
      success(res) {
        console.log(typeof res.data);
        if(res.data == 0){
          wx.showToast({
            title: '注册失败',
            icon: 'none',
            duration: 2000
          })
        }else {
          wx.setStorageSync('user_id', res.data);
          wx.setStorageSync('name', e.detail.value.nickname);
          wx.setStorageSync('phone', e.detail.value.phone);
          wx.setStorageSync('password', e.detail.value.passWord);

          console.log('5555555');
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