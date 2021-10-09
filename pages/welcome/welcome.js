Page({
    data:{
        buttonType : 'warn',
        buttonruleType:'primary',
        buttonValue : '开始游戏',
        buttonruleValue:'查看规则',
        isShow:'hidden'
        
    },

    goto:function()
    {
        wx.navigateTo({
          url: '/pages/rule/rule',
        })
    },
    
    choose:function(){
        wx.navigateTo({
          url: '/pages/choose/choose',
        })
    }
  
})