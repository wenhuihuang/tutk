Ext.Loader.setConfig({
    enabled: true //开启动态加载
});

Ext.application({
    name: 'Tutk', //为应用程序起一个名字,相当于命名空间
    controllers: [ //声明所用到的控制层
      'LoginController',
      'MainController'
    ],
    launch: function () { //开始
        //var app = new Demo1.view.MyViewport();
          Ext.create({
             xtype: 'app-main'
         });
    }
});
