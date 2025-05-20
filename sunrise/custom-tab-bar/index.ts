interface Obje {
  detail: number
}
Page({

  /**
   * 页面的初始数据
   */
  data: {
    active: 0,
    list: [
      {
        "url": "/pages/index/index",
        "text": "首页",
        "iconPath": "home-o"
      },
      {
        "url": "/pages/deviceControl/deviceControl",
        "text": "控制设备",
        "iconPath": "friends-o"
      },
      {
        "url": "/pages/about/about",
        "text": "消息",
        "iconPath": "chat-o"
      },
      {
        "url": "/pages/netdisk/netdisk",
        "text": "网盘",
        "iconPath": "free-postage"
      },
      {
        "url": "/pages/personalCenter/personalCenter",
        "text": "我的",
        "iconPath": "friends-o"
      }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad() {
    console.log(2111)
    wx.request({
      //这里的url用的是新视觉实训的一个测试接口
      url: 'https://edu.newsight.cn/wxList.php',
      //success是接口调用成功的回调函数,这里习惯用res去接收返回值
      success: res => {
        console.log(res, 'res')
      }
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  },


  goToHome() {
    wx.navigateTo({
      url: '/pages/index/index'
    })
  },
  onChange(event: Obje) {
    console.log(this.data.list[event.detail].url, '跳转')
    wx.switchTab({
      url: this.data.list[event.detail].url
    });
  },

})