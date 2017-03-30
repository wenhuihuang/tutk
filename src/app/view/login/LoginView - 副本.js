Ext.define('Tutk.view.login.LoginView', {
    extend: 'Ext.container.Viewport',
    xtype: 'login',
    alias : 'widget.loginview',
    title : '登录',
    items: [
               {
                   xtype:'container',
                   width:'100%',
                   height:'100%',
                   layout:'absolute',
                   cls:'login-wrap',

                   items: [{
                       xtype:'panel',
                       layout:'anchor',
                       x: '35%',
                       y: 250,
                       width:400,
                       height:300,
                       cls:'login-form-content',
                       defaults: {
                       //defaults 这里设置form下所有组件的默认配置
                           anchor: '100%',
                           margin: '0 0 10 0',
                           labelWidth: 120,
                           labelAlign: 'right',
                           allowBlank: false //因为字段必填的很多，所以默认都必须填
                           },

                            items:[{
                   xtype: 'form',
                   id:'login-form'

               },{
                    xtype: 'label',
                   text: '系统登录',
                   cls:'login-form-title',
               },
                   {
                       xtype: 'textfield',
                       fieldLabel : '管理员',
                       name: 'username',
                       id:'username',
                       cls: 'username-field',
                       labelHeight:45,
                       enableKeyEvents: true,
                       // emptyText: '用户名/姓名',

           },{
                   xtype: 'textfield',
                   fieldLabel : '密码',
                   name: 'password',
                   id:'password',
                   cls: 'password-field',
                   inputType: 'password',
                   // emptyText: '登录密码',
               },{
                   xtype: 'textfield',
                   fieldLabel : '验证码',
                   name: 'txtcheckcode',
                   cls: 'checkcode',
                   enableKeyEvents: true,
                   // emptyText: '请输入验证码',
               },{
                   xtype: 'container',
                   layout: {
                       type: 'hbox',
                       align: 'stretch'
                   },
                   items: [
                       {
                           xtype: 'checkbox',
                           boxLabel: '记住密码',
                           inputValue: "true",
                           uncheckedValue: "false",
                           name: 'rememberme',
                           cls:'login-form-re',
                           flex:1
                       },
                       {
                           xtype: 'box',
                           cls:'login-form-forgot',
                           html: '<a href="#" class="forgot-password">忘记密码？</a>',
                           liseners:{
                               click:function(){
                                    window.open("index.html?name=suetmui&age=22","_blank");
                                   // window.location=url;
                               }
                           }
                       }

                   ]
               }, {

                   xtype:'container',
                   layout:'anchor',

                   items:[
                       {
                           xtype: 'button',
                           text: '登录',
                           cls: 'login-form-login',
                           id:'btnLogin',
                           action:'loginAction',
                           //handler:'onClickLogin'

                       },{
                           xtype:'button',
                           text:'注册',
                           id:'btnRegister',
                           cls:'login-form-register'
                           // handler:'onClickRegister'
                       }
                    ]

               }
               ]
               }
           ]
            }
           ]
});
