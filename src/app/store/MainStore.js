/*
*商品store
*/
Ext.define('Totk.store.MainStore', {
    extend: 'Ext.data.Store',
    model: 'keel.model.MainModel',
    autoLoad: true,
    proxy: {
        type: 'ajax',
        api: {
            read: 'app/goods.json' //只是一个数据接口,可以按需改变
        },
        reader: {
            type: 'json',
            root: 'results',
            successProperty: 'success'
        }
    }
});
