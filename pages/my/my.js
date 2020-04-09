// pages/my/my.js
var common = require('../../utils/common.js')

Page({

  /**
   * 页面的初始数据
   */
  data: {
    name: wx.getStorageSync('name'),
    src: "/images/touxiang.jpg",
    currentData : 0,
    newsList: []
  },
  //获取个人信息
  login: function (e) {
    console.log("login");
    wx.navigateTo({
      url: "../../pages/login/login"
})
    //获取新闻列表
    this.getMyFavorites()
},

loginout: function (e) {
  
  console.log("loginout");
  wx.removeStorageSync('user_id')
  this.onShow();
  // wx.switchTab({
  //   url: "../../pages/my/my",
  // })
  //获取新闻列表
  this.getMyFavorites()
},
  //更新number
  getMyFavorites: function () {
    let info = wx.getStorageInfoSync()   //读取本地缓存信息
    let keys = info.keys                 //获取全部key信息
    let num = keys.length                //获取收藏新闻数量

    let myList = [];
    for (var i = 0; i < num; i++) {
      let obj = wx.getStorageSync(keys[i])
      myList.push(obj)
    }
    //更新收藏列表
    this.setData({
      newsList: myList,
      number: num
    })
  },
  goToDetail: function (e) {
    //获取携带data—id的数据
    let id = e.currentTarget.dataset.id
    //console.log(e)
    //携带新闻ID进行页面跳转
    wx.navigateTo({
      url: '../detail/detail?id=' + id,
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(wx.getStorageSync('name'))
  },


    //获取当前滑块的index
    bindchange:function(e){
      const that  = this;
      that.setData({
        currentData: e.detail.current
      })},
      //点击切换，滑块index赋值
      checkCurrent:function(e){
        const that = this;
      
        if (that.data.currentData === e.target.dataset.current){
            return false;
        }else{
     
          that.setData({
            currentData: e.target.dataset.current
          })
        }
      },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },
  goToInfo: function(e) {
    let id = e.currentTarget.dataset.id;
    //携带新闻ID进行页面跳转
    wx.navigateTo({
      url: '../info/info?goods_id=' + id,
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
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    const user_id = wx.getStorageSync('user_id');
    const name = wx.getStorageSync('name');
    
    this.setData({
      user_id: user_id,
      name: name,
    })

    if(user_id == ""){
      return;
    } 
    var that = this;
    wx.request({
      url: common.url+'/article/get/user_id/'+user_id,
      header: {
        'content-type': 'application/json' // 默认值
      },
      success (res) {
        console.log(res.data);
        that.setData({
          articles: res.data,
        })
      }
    })

    wx.request({
      url: common.url+'/goods/get/user_id/'+user_id,
      header: {
        'content-type': 'application/json' // 默认值
      },
      success (res) {
        console.log(res.data);
        that.setData({
          goods: res.data,
        })
      }
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