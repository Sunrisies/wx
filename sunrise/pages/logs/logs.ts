Page({
  data: {
    logs: [],
  },
  onShow() {
  },
  goToHome: () => {
    wx.navigateTo({
      url: '/pages/index/index'
    })
  },
})

