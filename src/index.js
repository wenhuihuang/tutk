Ext.Loader.setConfig({enabled:true});//开启动态加载

Ext.application({
    name: 'Tutk',//为应用程序起一个名字,相当于命名空间

    controllers: [//声明所用到的控制层
        'GoodsCtrl',
        'LoginController',
        'MainController'
    ],
    launch: function() {//开始

      var username = Ext.util.Cookies.get('username');
      if(username == null || username == "" || username == undefined){
        //用户没有登录
        Ext.create({
            xtype: 'loginview'
        });
     }else{
       //登录
       Ext.create({
           xtype: 'mainview'
       });
     }

    }
});
