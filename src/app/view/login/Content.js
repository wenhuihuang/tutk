/***
*自定义一个Panel类继承Ext.Panel
***/
Ext.define('Tutk.view.login.Content', {
    extend: 'Ext.Panel',
    alias: 'widget.content',
    initComponent: function () {
        var me = this;
        Ext.apply(this, {
            region: 'center',
            width:'100%',
            height:'100%',
            border:false,
          //  title:'center',
            //html: 'this is center panel'
            //登录框主要内容部分开始

            items:[{
              xtype:'container',
              cls:'public-wrapper login-form-box-wrapper',
              layout:'absolute',
              height:'100%',
              items:[{
                //登录框主要内容子组件类型开始
                xtype:'form',
                width:360,
                height:380,
                cls:'login-form-box',
                bodyPadding: '20 20',
                defaults: {
                      //defaults 这里设置form下所有组件的默认配置
                      anchor: '100%',
                      margin: '0 0 10 0',
                      allowBlank: false //因为字段必填的很多，所以默认都必须填

                       },
                //登录框主要内容子组件类型结束
                //登录框子组件开始
                items:[
                  //登录框第一个子组件开始
                  {
                    xtype: 'label',
                    text: '用户登录',
                    cls:'login-form-title',
                },
                //登录框第一个子组件结束
                //登录框第二个子组件开始
                {
                    xtype: 'textfield',
                    name: 'username',
                    id:'username',
                    cls: 'username-cls',
                    enableKeyEvents: true,
                    emptyText: '用户名/姓名',
                    height:40,
                    triggers: {
                            glyphed: {
                                     cls: "iconfont icon-username username-field-trigger"
                                      }
                               },

                },
                //登录框第二个子组件结束
                //登录框第三个子组件开始
                {
                    xtype: 'textfield',
                    name: 'password',
                    id:'password',
                    cls: 'password-cls',
                    inputType: 'password',
                    emptyText: '登录密码',
                    height:40,
                    triggers: {
                            glyphed: {
                                    html:'<span class="icon iconfont password-field-trigger">&#xe63d;</span>'
                                      }
                               },


                },
                //登录框第三个子组件结束
                //登录框第四个子组件开始
                {
                    xtype:'container',
                    layout:'column',
                    items:[{
                        xtype:'textfield',
                        name:'submitCode',
                        cls:'submitCode-cls',
                        padding:'0 10 0 0',
                        enableKeyEvents: true,
                        columnWidth: 0.6,
                        emptyText: '验证码',
                        height:40,
                        triggers: {
                                glyphed: {
                                         cls: "iconfont icon-password-copy submitCode-field-trigger"
                                           }
                                    }

                      },{
                        xtype:'button',
                        text:'获取验证码',
                        name:'getSubmitCode',
                        cls:'getSubmitCode-cls',
                        enableKeyEvents:true,
                        columnWidth:0.2,
                        height:40,
                      },{
                        xtype:'button',
                        text:'刷新',
                        name:'refreshCode',
                        cls:'refreshCode-cls',
                        enableKeyEvents:true,
                        columnWidth:0.2,
                        height:40,
                      }]

                  },
                //登录框第四个子组件结束
                //登录框第五个子组件开始
                {
                  xtype: 'checkbox',
                  boxLabel: '记住密码',
                  inputValue: "true",
                  uncheckedValue: "false",
                  name: 'rememberme',
                  cls:'rememberme-cls',
              },
                //登录框第五个子组件结束
                //登录框第六个子组件开始
                {
                    xtype: 'button',
                    text: '登录',
                    height:40,
                    cls: 'login-form-login',
                    id:'btnLogin',
                    action:'loginAction',
                    //handler:'onClickLogin'
                },
                //登录框第六个子组件结束
                //登录框第七个子组件开始
                {
                    xtype: 'container',
                    layout: {
                        type: 'hbox',
                        align: 'stretch'
                    },
                    items: [{
                              xtype: 'label',
                              cls:'register-accounter-cls public-button-default',
                              text: '免费注册',
                              flex:1,
                              id:"register-btn"

                            },{
                              xtype: 'label',
                              cls:'login-form-forgot public-button-default',
                              text: '忘记密码？',
                              id:'forgot-btn'
                            }]
                  },
                //登录框第七个子组件结束
              ]
              //登录框子组件结束

              }]


            }]



              //登录框主要内容子组件布局结束

        });
        me.callParent(arguments);
    }
});
