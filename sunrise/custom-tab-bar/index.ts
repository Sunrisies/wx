interface Obje {
  detail: number
}
Component({

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
        "iconPath": "setting-o"
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



  methods: {
    goToHome() {
      wx.navigateTo({
        url: '/pages/index/index'
      })
    },
    onChange(event: Obje) {
      console.log(this.data.list[event.detail].url, '跳转')
      const index = event.detail;
      wx.switchTab({
        url: this.data.list[index].url
      });
      wx.setStorageSync('tabBarActiveIndex', +index);
      // 点击之后添加高亮
      this.setData({
        active: event.detail
      })
    },
    init() {
      console.log(1111)
      // 从本地存储获取激活状态
      const activeIndex = +wx.getStorageSync('tabBarActiveIndex') || 0;
      console.log(activeIndex, 'activeIndex')
      this.setData({
        active: activeIndex
      });
    },
  },

  lifetimes: {
    attached() {
      this.init();
    },

  },
  pageLifetimes: {
    show() {
      this.init(); // 每次页面显示时重新同步状态
    }
  }
})