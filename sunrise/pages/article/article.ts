const towxml = require('../../utils/index');
Page({
  data: {
    pageHeight: 0,
    scrollarea: 0,
    item: {},
    article: {}
  },
  onReady: function () {

  },
  onLoad: function () {
  },
  onShow() {
    console.log(towxml, 'towxml')
    const eventChannel = this.getOpenerEventChannel()
    eventChannel.on('acceptDataFromOpenerPage', ({ data }) => {
      this.getArticle(data.id)
      this.setData({ item: data });
    })
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
    }

  },
  getArticle(article_id: string) {
    let _self = this
    wx.request({
      url: `https://api.chaoyang1024.top/api/article/${article_id}`,
      method: 'GET',
      success({ data: res }: { data: any }) {
        console.log(res, 'res')
        const result = towxml(res.data.content, 'markdown')
        console.log(result, 'result')
        _self.setData({
          article: result
        });
      }
    })
  }

})


