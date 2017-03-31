/**
**所有逻辑代码都在这里写
**/
Ext.define('Tutk.controller.LoginController', {
    extend: 'Ext.app.Controller',
    store : ['LoginStore'], //声明该控制层要用到的store
    models: ['LoginModel'],//声明该控制层要用到的model
    views: ['login.LoginView','main.MainView','register.RegisterView','forgot.ForgotView'],//声明该控制层要用到的view
    refs: [//相当于一个映射,这样就可以在控制层方便的通过geter取得相应的对象了
      {
          ref: 'loginview',
          selector: 'loginview'
      },
      {
          ref: 'mainview',
          selector: 'mainview'
      },{
        ref:'registerview',
        selector:'registerview'
      },{
        ref:'forgotview',
        selector:'forgotview'
      }
  ],
  init: function() {
    // var view = this.getSchedulerSchedulerView()
    // console.log(view)

       this.control({//这里的this相当于这个控制层
           'loginview button[action=loginAction]': {
             //侦听loginview中action=ok的按钮单击事件
               click: function(){
                 this.loginAction();
               }
           },
           'loginview box[action=registerAction]':{
             click:function(){
               this.registerAction();
             }
           },
           'loginview box[action=forgotAction]':{
             click:function(){
               this.forgotAction();
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
          url : 'http://tutk.dvr163.com/apis/user?method=login',
          method : 'post',
          cors: true,
           useDefaultXhrHeader:false,
           params : {
                 username : username,
                 password : password
             },
           success : function(response, options) {

            //  var o = Ext.util.JSON.decode(response.responseText);
            //  console.log(o)
            if( response.status == 200){

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

             Ext.MessageBox.alert('失败', '请求超时或网络故障');
           }
          });
   }

//注册部分
  registerAction:function(){
    this.getLoginview().destroy();
    Ext.create({
        xtype: 'registerview'
    });
  }

//忘记密码部分
forgotAction :function () {
  this.getLoginview().destroy();
  Ext.create({
    xtype:'forgotview'
  })
}




});
