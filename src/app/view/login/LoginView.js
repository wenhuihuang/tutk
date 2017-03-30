Ext.define('Tutk.view.login.LoginView', {
    extend: 'Ext.container.Viewport',
    xtype: 'login',
    alias : 'widget.loginview',
    title : '登录',
    //在实例化前加载相关类，一定要先加载，否则在构造函数initComponent中无法使用
    requires: [
        'Tutk.view.login.Top',
        'Tutk.view.login.Bottom',
        'Tutk.view.login.Content'
    ],
    layout: 'border',

    //构造函数
    initComponent: function () {
        var me = this;
        Ext.applyIf(me,
         {
            //将上，下，左，右四个面板作为独立的view进行实例化，然后作为item给Viewport
             items: [
                Ext.create('Tutk.view.login.Top'),
                Ext.create('Tutk.view.login.Bottom'),
                Ext.create('Tutk.view.login.Content')
            ]
         });
         me.callParent(arguments); //确保父类Ext.container.Viewport的构造函数能被调用
    }



  });
