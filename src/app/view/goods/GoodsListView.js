/*!
* 商品view层,这里只是一个负责显示的grid,没有逻辑代码
*/
Ext.define('Tutk.view.goods.GoodsListView' ,{
    extend: 'Ext.grid.Panel',
    alias : 'widget.goodslistview',
    title : '商品列表',
    store: 'GoodsStore',
    xtype: 'goodslistview',
    columns: [
        {header: '商品编码',  dataIndex: 'bm'},
        {header: '商品名称', dataIndex: 'name'}
    ],
    tbar : [
    	{text:'测试1',action:'testBtn1'},'-',
    	{text:'测试2',action:'testBtn2'},'-'
    ]
});
