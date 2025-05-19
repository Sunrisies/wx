// index.ts

import { LightSchema } from "XrFrame/components"

// 获取应用实例
const app = getApp<IAppOption>()

Page({
  data: {
    // list: [
    // ],
    pageHeight: 0,
    scrollarea: 0
  },
  onReady: function () {

  },
  async onShow() {
    await this.getList()
    // 通过 getTabBar 接口获取组件实例，并调用 setData 更新选中态
    this.getTabBar().setData({ active: 0 })
    try {
      const res = wx.getWindowInfo()
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

  goToAbout() {
    console.log(111)
    wx.switchTab({
      url: '/pages/about/about'
    })
  },
  getUserProfile() {
    // 推荐使用wx.getUserProfile获取用户信息，开发者每次通过该接口获取用户个人信息均需用户确认，开发者妥善保管用户快速填写的头像昵称，避免重复弹窗
    wx.getUserProfile({
      desc: '展示用户信息', // 声明获取用户个人信息后的用途，后续会展示在弹窗中，请谨慎填写
      success: (res) => {
        console.log(res)
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    })
  },
  getLonLat() {
    console.log(121)
    const _locationChangeFn = function (res: any) {
      console.log('location change', res)
    }
    wx.onLocationChange(_locationChangeFn)
    wx.offLocationChange(_locationChangeFn)
  },
  goToArticle(event: any) {
    let item = event.currentTarget.dataset.item
    console.log(item, 'item')
    const queryString = Object.keys(item).map(key => `${key}=${item[key]}`).join('&');
    console.log(queryString, 'q11')
    wx.navigateTo({
      url: `/pages/article/article`,
      events: {
        // 为指定事件添加一个监听器，获取被打开页面传送到当前页面的数据
        acceptDataFromOpenedPage: function (data: any) {
          console.log(data)
        },
        someEvent: function (data: any) {
          console.log(data)
        }
      },
      success: function (res) {
        // 通过eventChannel向被打开页面传送数据
        res.eventChannel.emit('acceptDataFromOpenerPage', { data: item })
      }
      // 拼接带参数的URL  
    });
  },
  getList() {
    let _self = this
    wx.request({
      url: 'https://api.chaoyang1024.top:2345/api/article', 
      method: 'GET',
      success({ data: res }: { data: any }) {
        console.log(res,'res')
        // for (let k of res.data.data) {
        //   k.publish_time = _self.dateFormat(k.publish_time)
        // }
        console.log(res.data.data)
        _self.setData({
          list: res.data.data
        });
      }
    })
     // wx.request({
    //   url: 'https://api.juejin.cn/content_api/v1/article/query_list', //仅为示例，并非真实的接口地址
    //   method: 'POST',
    //   data: {
    //     "cursor": "0",
    //     "user_id": "2731614892986862",
    //     "sort_type": 2
    //   },
    //   header: {
    //     'content-type': 'application/json' // 默认值
    //   },
    //   success({ data: res }: { data: any }) {
    //     for (let k of res.data) {
    //       k.article_info.ctime = _self.dateFormat(k.article_info.ctime)
    //     }
    //     console.log(res.data)
    //     _self.setData({
    //       list: res.data
    //     });
    //   }
    // })
  },
  dateFormat(timestamp: string) {
    var dateObj = new Date(+timestamp * 1000);
    var year = dateObj.getFullYear();
    var month = dateObj.getMonth() + 1;
    var day = dateObj.getDate();
    var hour = dateObj.getHours();
    var minute = dateObj.getMinutes();
    var second = dateObj.getSeconds();
    return year + "-" + month + "-" + day + " " + hour + ":" + minute + ":" + second;
  }

})


