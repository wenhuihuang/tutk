/***
*自定义一个Panel类继承Ext.Panel
***/
Ext.define('Tutk.view.login.Bottom', {
    extend: 'Ext.Panel',
    alias: 'widget.bottom',

    initComponent: function () {
        var me = this;
        Ext.apply(this, {
            region: 'south',
          //  title: 'south',

          border:false,
            items:[{
              xtype:'panel',
              height:100,
              cls:'public-wrapper',
              border:false,
              //登录框尾部信息开始

              items:[{
                //登录框尾部信息开始
                  //登录框尾部信息整体默认布局开始
                  // flex:'20%',  //登录框整体默认高度
                  width:'100%',
                  height:100,
                  cls:'login-footer',
                  border:false,
                  layout:{
                    type:'vbox',
                    pack:'start',
                    align:'stretch'
                  },
                  //登录框尾部信息整体默认布局结束

                  //登录框尾部信息子组件布局开始
                  items:[
                    //登录框尾部信息第一个子组件布局开始
                    {
                    //登录框尾部信息第一个子组件默认布局开始
                    xtype:'container',
                    layout:'column',
                    width:'100%',
                    cls:'login-contact-box',
                    border:false,
                    //登录框尾部信息第一个子组件默认布局结束
                    items:[{
                      //登录框尾部信息第一个子组件布局开始
                            xtype:'panel',
                            columnWidth:0.5,
                            border:false,
                            cls:'login-form-about',
                            html: '<a href="#" class="about-juan">关于九安</a>',
                          },
                      {
                        xtype:'panel',
                        columnWidth:0.5,
                        border:false,
                        html: '<a href="#" class="contact-us">联系我们</a>',
                      }]
                    //登录框尾部信息第一个子组件布局结束
                  },
                  //登录框尾部信息第一个子组件布局结束
                  //登录框尾部信息第二个子组件布局开始
                  {
                    xtype:'panel',
                    border:false,
                    cls:'login-form-CopyRight',
                    html:'CopyRight©jjuanvision.com 网站备案：粤ICP备11073079号'
                  }
                  //登录框尾部信息第二个子组件布局结束
                ]
                //登录框尾部信息子组件布局结束
                }]
                //登录框尾部信息结束

            }]








        });
        me.callParent(arguments);
    }
});
