/**
 * This class is the controller for the main view for the application. It is specified as
 * the "controller" of the Main view class.
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */

Ext.define('Tutk.controller.MainController', {
  extend: 'Ext.app.Controller',
  store : ['MainStore'], //声明该控制层要用到的store
  models: ['MainModel'],//声明该控制层要用到的model
  views: ['main.MainView','login.LoginView','main.Left','goods.GoodsListView'],//声明该控制层要用到的view
  refs: [//相当于一个映射,这样就可以在控制层方便的通过geter取得相应的对象了
    {
        ref: 'mainview',
        selector: 'mainview'
    },
    {
      ref: 'left',
      selector: 'left'
    },
    {
        ref: 'goodslistview',
        selector: 'goodslistview'
    }
],
init: function() {
     this.control({//这里的this相当于这个控制层
       'viewport > mainview': {
           afterrender: function(gp){//侦听goodslistview渲染

           }
       },
       'goodslistview':{

       },
       'left button[action=goodsListAction]': {
         //侦听goodswinview中action=ok的按钮单击事件
           click: function(){
             Ext.create({
                 xtype: 'goodslistview'
             });
           }
       }
     });

 }

});
