Page({
  data: {
    pageHeight: 0,
    scrollarea: 0,
    list: [] as any[],
    loading: false,
    page: 1,
    total: 0,
    pageSize: 10,// 假设每页10条数据，根据
    hasMore: true
  },
  onReady: function () {

  },
  async onShow() {
    await this.getList()
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
    // const queryString = Object.keys(item).map(key => `${key}=${item[key]}`).join('&');
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
  async getList() {
    if (this.data.loading) return;
    if (this.data.list.length >= this.data.total && this.data.total !== 0) {
      return;
    }

    this.setData({ loading: true });
    let _self = this;

    wx.request({
      url: `https://api.chaoyang1024.top/api/article?page=${this.data.page}`,
      method: 'GET',
      success({ data: res }: { data: any }) {
        res.data.data.forEach((item: any) => {
          item.publish_time = _self.dateFormat(item.publish_time);
        });
        const newList = res.data.data || [];
        _self.setData({
          list: [..._self.data.list, ...newList],
          page: _self.data.page + 1,
          total: res.data.pagination.total || 0
        });

        if (newList.length > 0) {
          wx.showToast({
            title: '获取数据成功',
            icon: 'success',
            duration: 2000
          });
        }
      },
      complete() {
        _self.setData({ loading: false });
      }
    });
  },

  loadMore() {
    if (!this.data.loading) {
      this.getList();
    }
  },

  dateFormat(timestamp: Date) {
    const dateObj = new Date(timestamp);
    const year = dateObj.getFullYear();
    const month = String(dateObj.getMonth() + 1).padStart(2, '0');
    const day = String(dateObj.getDate()).padStart(2, '0');
    const hour = String(dateObj.getHours()).padStart(2, '0');
    const minute = String(dateObj.getMinutes()).padStart(2, '0');
    const second = String(dateObj.getSeconds()).padStart(2, '0');
    return `${year}年${month}月${day}日 ${hour}:${minute}:${second}`;
  }
});


