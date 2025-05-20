// app.ts
App<IAppOption>({
  globalData: {},
  onLaunch() {
    // 展示本地存储能力
    const logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)
    const accountInfo = wx.getAccountInfoSync()
    console.log(accountInfo, 'accountInfo')
    const battery = wx.getBatteryInfoSync()
    console.log(battery, 'battery')
    wx.getUserInfo({
      success(res) {
        console.log(res, '获取数据')
      }
    })
    // wx.scanCode({
    //   success (res) {
    //     console.log(res,'res')
    //   },
    //   fail(res) {
    //     console.log('res',res)
    //   }
    // })
    // 登录
    wx.login({
      success: res => {
        console.log(res, '登录成功')
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      },
    })
  },
})