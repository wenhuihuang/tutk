Ext.Loader.setConfig({
    enabled: true //开启动态加载
});

Ext.application({
    name: 'Tutk', //为应用程序起一个名字,相当于命名空间
    appFolder: 'app', //设定应用程序的路径
    autoCreateViewport: true,//开启自动创建Viewport,它将自动去view目录下查找Viewport文件并实例化
    controllers: [ //声明所用到的控制层
      'LoginController',
      'MainController'
    ],
    launch: function () { //开始
        //var app = new Demo1.view.MyViewport();
        /*  Ext.create({
             xtype: 'app-main'
         });*/
    }
});
