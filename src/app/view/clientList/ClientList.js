/**
 * This view is an example list of people.
 */

Ext.define('Demo1.view.clientList.ClientList', {

    extend: 'Ext.grid.Panel',
    xtype: 'clientList',

    //修改：此处引入自定义样式
    ui: 'highlight',
    frame: true,


  requires: [
        'Ext.plugin.Viewport',
        'Ext.window.MessageBox',
        'Demo1.view.clientList.ClientListController',
        'Demo1.view.clientList.ClientListModel',
        'Demo1.store.Personnel'
    ],
    controller: 'clientList',
    viewModel: 'clientList',
    title: 'Personnel',

    store: {
        type: 'personnel'
    },

    columns: [
        { text: 'Name',  dataIndex: 'name' },
        { text: 'Email', dataIndex: 'email', flex: 1 },
        { text: 'Phone', dataIndex: 'phone', flex: 1 }
    ],
    //添加：修改图标资源
    tbar: [{
        text: 'Show Message',
        handler: function() {
            Ext.Msg.show({
                title: 'Info',
                msg: 'Message Box with custom icon',
                buttons: Ext.MessageBox.OK,
                icon: Ext.MessageBox.INFO
            });
        }
    }],
    listeners: {
        select: 'onItemSelected'
    }
});