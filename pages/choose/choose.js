// pages/choose/choose.js
Page({

    data: {
        buttonType : 'default',
        buttondanrenValue : '单人模式',
        buttonduorenValue:'多人模式',
        isShow:'hidden'
    },

    back:function(){
        wx.navigateTo({
          url: '/pages/index/index',
        })
    },
    loading:function(){
        wx.navigateTo({
          url: '/pages/loading/loading',
        })
    }
})