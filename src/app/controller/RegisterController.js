/**
**所有逻辑代码都在这里写
**/
Ext.define('Tutk.controller.RegisterController', {
    extend: 'Ext.app.Controller',
    store : ['RegisterStore'], //声明该控制层要用到的store
    models: ['RegisterModel'],//声明该控制层要用到的model
    views: ['login.LoginView','register.RegisterView'],//声明该控制层要用到的view
    refs: [//相当于一个映射,这样就可以在控制层方便的通过geter取得相应的对象了
      {
          ref: 'loginview',
          selector: 'loginview'
      },
      {
        ref:'registerview',
        selector:'registerview'
      },
  ],
  init: function() {
    var me = this;
    // var view = this.getSchedulerSchedulerView()
    console.log('view')

       this.control({//这里的this相当于这个控制层
          'registerview':{
            afterrender: function(gp){//侦听goodslistview渲染
              //
              Ext.get('rebackLogin-btn').on('click',function(){
                me.rebackLogin()
              });

            }
          },



       });
   },


//注册部分
  rebackLogin:function(){
    this.getRegisterview().destroy();
    Ext.create({
        xtype: 'loginview'
    });
  },






});
