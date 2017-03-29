/***
*自定义一个Panel类继承Ext.Panel
***/
Ext.define('Tutk.view.main.Left', {
    extend: 'Ext.Panel',
    alias: 'widget.left',

    initComponent: function () {
        var me = this;
        Ext.apply(this, {
            region: 'west',
            title: 'west',
            width: 200,
            layout: 'border',
            html: 'this is west panel'
        });
        me.callParent(arguments);
    }
});