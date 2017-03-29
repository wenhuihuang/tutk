/**
**所有逻辑代码都在这里写
**/
Ext.define('Tutk.controller.LoginController', {
    extend: 'Ext.app.Controller',
    store : ['LoginStore'], //声明该控制层要用到的store
    models: ['LoginModel'],//声明该控制层要用到的model
    views: ['login.LoginView'],//声明该控制层要用到的view
    refs: [//相当于一个映射,这样就可以在控制层方便的通过geter取得相应的对象了
      {
          ref: 'loginview',
          selector: 'loginview'
      }
  ],
  init: function() {
       this.control({//这里的this相当于这个控制层
           'button[action=showLogin]': {
             //侦听goodswinview中action=ok的按钮单击事件
               click: function(){
                 alert('9')
                 this.showWin();
               }
           }
       });
   },
   showWin : function(){
     Ext.create('Tutk.view.login.LoginView').show();
   }
});
