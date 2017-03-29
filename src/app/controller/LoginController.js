/**
**所有逻辑代码都在这里写
**/
Ext.define('Tutk.controller.LoginController', {
    extend: 'Ext.app.Controller',
    store : ['LoginStore'], //声明该控制层要用到的store
    models: ['LoginModel'],//声明该控制层要用到的model
    views: ['login.LoginView','main.MainView'],//声明该控制层要用到的view
    refs: [//相当于一个映射,这样就可以在控制层方便的通过geter取得相应的对象了
      {
          ref: 'loginview',
          selector: 'loginview'
      },
      {
          ref: 'mainview',
          selector: 'mainview'
      }
  ],
  init: function() {
    // var view = this.getSchedulerSchedulerView()
    // console.log(view)

       this.control({//这里的this相当于这个控制层
           'loginview button[action=loginAction]': {
             //侦听goodswinview中action=ok的按钮单击事件
               click: function(){
                 this.loginAction();
               }
           }
       });
   },
   loginAction : function(){
     var self = this;
     var username = Ext.getCmp('username').getValue();
     console.log(username)
     var password = md5(Ext.getCmp("password").getValue());
     console.log(md5(Ext.getCmp("password").getValue()))
     Ext.Ajax.request( {
          // url : 'http://tutk.dvr163.com/apis/user?method=login',
          url : 'http://192.168.0.102:3000/api/user',
           method : 'POST',
           params : {
                 username : username,
                 password : password
             },
           success : function(response, options) {

             var o = Ext.util.JSON.decode(response.responseText);
             console.log(o)
            if( response.status == 200){ //&& o里面的信息

              Ext.MessageBox.alert('登录成功',  response.status);
              Ext.util.Cookies.set("username", username);
              //登录成功后跳转到主页面


              self.getLoginview().destroy();
              Ext.create({
                  xtype: 'mainview'
              });
            //  Ext.create('Tutk.view.main.MainView');
              //self.getMainview().show()

            }

           },
           failure : function(response, options) {

             Ext.MessageBox.alert('失败', '请求超时或网络故障,错误编号：' + response.responseText);
           }
          });
   }
});
