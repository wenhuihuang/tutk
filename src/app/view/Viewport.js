/***
*自定义一个Viewport类继承Ext.container.Viewport
***/

Ext.define('Tutk.view.Viewport', {
    extend: 'Ext.container.Viewport',
    alias: 'widget.viewport',

    //在实例化前加载相关类，一定要先加载，否则在构造函数initComponent中无法使用
    requires: [
        'Tutk.view.main.Top',
        'Tutk.view.main.Bottom',
        'Tutk.view.main.Left',
        'Tutk.view.main.Content'
    ],
    layout: 'border',

    //构造函数
    initComponent: function () {
        var me = this;
        Ext.applyIf(me,
         {
            //将上，下，左，右四个面板作为独立的view进行实例化，然后作为item给Viewport
             items: [
                Ext.create('Tutk.view.main.Top'),
              //  Ext.create('Tutk.view.main.Bottom'),
                Ext.create('Tutk.view.main.Left'),
                Ext.create('Tutk.view.main.Content')
            ]
         });
         me.callParent(arguments); //确保父类Ext.container.Viewport的构造函数能被调用
    }
});
