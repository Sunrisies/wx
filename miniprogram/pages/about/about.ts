// pages/about/about.ts
Page({

  /**
   * 页面的初始数据
   */
  data: {
    pageHeight: 0,
    scrollarea:0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad() {

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
    this.getTabBar().setData({ active: 1 })
    
    
    try {
      const res = wx.getSystemInfoSync()
      this.data.pageHeight = res.windowHeight - 84
      this.setData({
        pageHeight: this.data.pageHeight
      });
      this.data.scrollarea = this.data.pageHeight - 92
      this.setData({
        scrollareaHeight: this.data.scrollarea
      });
    } catch (e) {
      // Do something when catch error
    }
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

  }
})