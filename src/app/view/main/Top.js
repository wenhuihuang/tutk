/***
*自定义一个Panel类继承Ext.Panel
***/
Ext.define('Tutk.view.main.Top', {
    extend: 'Ext.Panel',
    alias: 'widget.top',

    initComponent: function () {
        var me = this;
        Ext.apply(this, {
            region: 'north',
            title: 'top',
            height: 100,
            layout:'border',
            html:'this is north panel'
        });
        me.callParent(arguments);
    }
});