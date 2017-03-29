/*
商品控制层,
所有逻辑代码都在这里写
*/
Ext.define('Tutk.controller.GoodsCtrl', {
    extend: 'Ext.app.Controller',
    stores: ['GoodsStore'],//声明该控制层要用到的store
    models: ['GoodsModel'],//声明该控制层要用到的model
    views: ['goods.GoodsListView','goods.GoodsWinView'],//声明该控制层要用到的view
    refs: [//相当于一个映射,这样就可以在控制层方便的通过geter取得相应的对象了
        {
            ref: 'goodslistview',
            selector: 'goodslistview'
        },
        {
            ref: 'goodswinview',
            selector: 'goodswinview'
        }
    ],
    init: function() {

        this.control({//这里的this相当于这个控制层
            'viewport > goodslistview': {
                afterrender: function(gp){//侦听goodslistview渲染
                	gp.down('button[action=testBtn1]').on('click',function(){
                		//侦听goodslistview工具条上action=testBtn1的按钮单击事件
                		this.showWin();
                    console.log(this.getGoodswinview())
                	},this);

                	gp.down('button[action=testBtn2]').on('click',function(){
                		//侦听goodslistview工具条上action=testBtn2的按钮单击事件
                		alert(this.getGoodswinview().title)
                	},this);
                }
            },
            'goodswinview button[action=ok]': {
            	//侦听goodswinview中action=ok的按钮单击事件
                click: function(){
                	this.getGoodswinview().setTitle(Ext.util.Format.date(new Date(),'Y-m-d H:i:s'));
                }
            }
        });
    },
    showWin : function(){
    	Ext.create('Tutk.view.goods.GoodsWinView').show();
    }
});
