//pages/rule/rule.js
Page({
    data:{
        buttonType : 'default',
        buttonValue : '返回游戏',
        buttonValue1:'返回首页',
        isShow:'hidden'
        
    },
    back:function(){
        wx.navigateTo({
          url: '/pages/index/index',
        })
    },
    goShouye:function(){
        wx.navigateTo({
          url: '/pages/welcome/welcome',
        })
    }
})