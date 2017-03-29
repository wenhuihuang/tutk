/***
*自定义一个Panel类继承Ext.Panel
***/
Ext.define('Tutk.view.main.Content', {
    extend: 'Ext.Panel',
    alias: 'widget.content',

    initComponent: function () {
        var me = this;
        Ext.apply(this, {
            region: 'center',
            title:'center',
            layout: 'fit',
            html: 'this is center panel'
        });
        me.callParent(arguments);
    }
});