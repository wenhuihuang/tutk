Ext.define('Tutk.controller.RegisterController', {
    extend: 'Ext.app.ViewController',
    store : ['RegisterModel'], //声明该控制层要用到的store
    models: ['RegisterModel'],//声明该控制层要用到的model
    views: ['login.LoginView','main.MainView','register.RegisterView','forgot.ForgotView'],//声明该控制层要用到的view
      init: function() {}
});
