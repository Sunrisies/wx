// logs.ts
// const util = require('../../utils/util.js')
Page({
  data: {
    logs: [],
  },
  onShow() {
    // 通过 getTabBar 接口获取组件实例，并调用 setData 更新选中态
    this.getTabBar().setData({active: 2})
  },
  goToHome:() => {
    wx.navigateTo({
      url: '/pages/index/index'
    })
  },
})

