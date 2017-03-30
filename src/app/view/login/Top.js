/***
*自定义一个Panel类继承Ext.Panel
***/
Ext.define('Tutk.view.login.Top', {
    extend: 'Ext.Panel',
    alias: 'widget.top',

    initComponent: function () {
        var me = this;
        Ext.apply(this, {
            region: 'north',
            border:false,
            // layout: 'fix',

            items:[{
              xtype:'container',
              height:60,
              cls:'public-wrapper',

              items:[
                //第一个头部子组件开始
                {
                xtype:'panel',
                columnWidth:1,
                layout: 'column',
                height:60,
                border:false,
                cls:'login-header-title',
                items : [
                  {
                  xtype:'panel',
                  columnWidth:0.7,
                  height:60,
                  border:false,
                  cls:'login-header-title',
                  html:'<h2><img src="../../../public/images/icon-logo.png"><span>九安云存管理系统</span></h2>',
                },
                //第一个头部子组件结束
                //第一个头部子组件开始
                {
                  xtype:'panel',
                  columnWidth:0.3,
                  height:60,
                  border:false,
                  items:[{
                    xtype:'button',
                    text:'<font color="#ccc">简体中文</font>',
                    cls:'login-header-btn',
                    menu:[{
                      text:'Chinese'
                    },{
                      text:'English',
                    },{
                      text:' French'
                    },{
                      text:'Russian'
                    }]
                  }]
                }
                ]
              }
            ]



            }]






              //所有头部子组件布局结束
            //登录框头部信息结束
        });
        me.callParent(arguments);
    }
});
