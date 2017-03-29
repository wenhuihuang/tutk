/***
*自定义一个Panel类继承Ext.Panel
***/
Ext.define('Tutk.view.main.Bottom', {
    extend: 'Ext.Panel',
    alias: 'widget.bottom',

    initComponent: function () {
        var me = this;
        Ext.apply(this, {
            region: 'south',
            title: 'south',
            height: 100,
            layout: 'border',
            html: 'this is south panel'
        });
        me.callParent(arguments);
    }
});