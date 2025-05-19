// 个人中心页面逻辑
Page({
  data: {
    userInfo: {
      avatarUrl: '',
      nickName: '',
      phoneNumber: ''
    },
    userData: {
      articles: 0,
      likes: 0,
      follows: 0
    },
    blogStats: {
      articles: 0,
      likes: 0,
      comments: 0
    },
    functionList: [
      {
        icon: 'star',
        text: '我的收藏',
        url: '/pages/collection/index'
      },
      {
        icon: 'comment',
        text: '我的评论',
        url: '/pages/comments/index'
      },
      {
        icon: 'setting',
        text: '设置',
        url: '/pages/settings/index'
      }
    ]
  },


  async onLoad() {
    const as = await wx.getUserInfo()
    console.log(as, 'assadasd')
    // 获取本地存储的用户信息
    const userInfo = wx.getStorageSync('userInfo');
    if (userInfo) {
      this.setData({
        userInfo
      });
    }
  },

  onGetUserInfo(e: any) {
    const { userInfo } = e.detail;
    console.log(userInfo, 'userInfo')
    this.setData({
      userInfo
    }, () => {
      // 保存到本地存储
      wx.setStorageSync('userInfo', userInfo);
    });
  },

  // 处理头像选择
  onChooseAvatar(e: any) {
    const { avatarUrl } = e.detail;
    console.log(avatarUrl, '==========')
    // 直接更新整个 userInfo 对象
    const userInfo = {
      ...this.data.userInfo,
      avatarUrl
    };
    console.log(userInfo, 'userInfo')
    this.setData({
      userInfo
    }, () => {
      // 保存到本地存储
      wx.setStorageSync('userInfo', userInfo);
    });
  },

  // 处理昵称输入
  onNickNameChange(e: any) {
    const nickName = e.detail.value;
    // 同样更新整个 userInfo 对象
    const userInfo = {
      ...this.data.userInfo,
      nickName
    };
    this.setData({
      userInfo
    }, () => {
      // 保存到本地存储
      wx.setStorageSync('userInfo', userInfo);
    });
  },

  // 退出登录
  handleLogout() {
    wx.showModal({
      title: '提示',
      content: '确定要退出登录吗？',
      success: (res) => {
        if (res.confirm) {
          // 清除用户信息
          this.setData({
            userInfo: {
              avatarUrl: '',
              nickName: '',
              phoneNumber: ''
            },
            userData: {
              articles: 0,
              likes: 0,
              follows: 0
            }
          });

          // 清除本地存储
          wx.removeStorageSync('userInfo');

          // 显示提示
          wx.showToast({
            title: '已退出登录',
            icon: 'success'
          });

          // 可选：返回首页
          wx.switchTab({
            url: '/pages/index/index'
          });
        }
      }
    });
  }
});