const towxml = require('../../towxml/index');

Page({
  data: {
    pageHeight: 0,
    scrollarea:0,
    item: {},
    article:{}
  },
  onReady: function () {

  },
  onLoad: function () {
    // const eventChannel = this.getOpenerEventChannel()
    // eventChannel.on('acceptDataFromOpenerPage', ({data}) => {
    //   this.setData({item:data});
    // })
  },
  onShow() {

    const eventChannel = this.getOpenerEventChannel()
    eventChannel.on('acceptDataFromOpenerPage', ({ data }) => {
      this.getArticle(data.id)
      this.setData({item:data});
    })


    // 通过 getTabBar 接口获取组件实例，并调用 setData 更新选中态
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
  getArticle(article_id: string) {
    let _self = this
    wx.request({
      url:`https://api.chaoyang1024.top:2345/api/article/${article_id}`,
      method:'GET',
      success({data:res}:{data:any}){
       const result =  towxml(res.data.content,'markdown')
        _self.setData({
          article: result
        });
      }
    })
  }

})


