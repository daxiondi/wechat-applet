// pages/detail/detail.js
var common = require('../../utils/common.js')

Page({

  /**
   * 页面的初始数据
   */

  //添加收藏
  addFavorites: function () {
  const user_id = wx.getStorageSync('user_id'); 
  let article = this.data.article
  if (user_id == ""){
    wx.showToast({
      title: '请先登陆',
      icon: 'none',
      duration: 2000
    })
    return ;
  }
    
    if(article.article_id){
      if (user_id == ""){
        wx.showToast({
          title: '未知错误',
          icon: 'none',
          duration: 2000
        })
        return ;
      }
    }
    wx.setStorageSync('article_id',"article.article_id"); 
    var that = this;
    wx.request({
      url: common.url+'/article/add',
      method: "POST",
      data:({
        user_id: user_id,
        article_id: article.article_id,
        article_title: article.article_title,
        article_poster: article.article_poster,

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
  //取消收藏
  cancelFavorites: function () {
    let article = this.data.article
    wx.removeStorageSync(article.id)
    this.setData({
      isAdd: false
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let id = options.id

    var that = this;
    wx.request({
      url: common.url+'/article/get/'+id,
      header: {
        'content-type': 'application/json' // 默认值
      },
      success (res) {
        console.log(res.data);
        that.setData({
          article: res.data,
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