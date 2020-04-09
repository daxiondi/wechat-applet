// pages/detail/detail.js
var common = require('../../utils/common.js')

Page({

  /**
   * 页面的初始数据
   */
  data: {
    swiperImg: [
      { src: "http://m.qpic.cn/psc?/V119Da0S47Hy2g/UVjGSBgujG6XwMFsQlvXRXDOdXKUrpMr9ecZguzB35JNNEEpfIFp8zdsNaVOdS6kDL.oMTPCKfwxUTgU4uYCng!!/b&bo=RgWAAgAAAAARB*E!&rf=viewer_4" },
      { src: "http://m.qpic.cn/psc?/V119Da0S47Hy2g/WUyRLVwskOVTItG8F0x763HcTBaPQKs4PqqbkJETyXKt6ENOzEp6K2siJkUc9MF6RY7bYsvHJY5.pRbpCRYjvvBLqi5iXk9*GsA5j4YRtXM!/b&bo=RgWAAgAAAAARF.E!&rf=viewer_4" },
    ],
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function () {
    var that = this;
    wx.request({
      url: common.url+'/article/list',
      header: {
        'content-type': 'application/json' // 默认值
      },
      success (res) {
        console.log(res.data);
        that.setData({
          list: res.data,
        })
      }
    })   
  },
  goToDetail: function (e) {
    //获取携带data-id的数据
    let id = e.currentTarget.dataset.id
    //携带新闻ID进行页面跳转
    wx.navigateTo({
      url: '../detail/detail?id=' + id,
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