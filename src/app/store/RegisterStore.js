/*
*商品store
*/
Ext.define('Totk.store.RegisterStore', {
    extend: 'Ext.data.Store',
    model: 'keel.model.RegisterModel',
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
