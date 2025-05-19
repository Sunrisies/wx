Component({
  /**
   * 组件的属性列表
   */
  properties: {
    back:{
      type:Boolean,
      value:false
    },
    title: {
      type: String,
      value: ''
    },
  },
  /**
   * 组件的初始数据
   */
  data: {
    displayStyle: ''
  },
  lifetimes: {

  },
  /**
   * 组件的方法列表
   */
  methods: {
    goToBack(){
      wx.navigateBack({
        delta: 1
      })
      console.log(21312)
    }
  },
})
