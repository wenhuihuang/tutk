Ext.define('Tutk.view.login.LoginView', {
    extend: 'Ext.container.Viewport',
    xtype: 'login',
    alias : 'widget.loginview',
    title : '登录',

    items: [{
              xtype:'container',
              width:1400,
              height:960,
              layout:{
                type:'vbox',
                pack:'start',
                align:'stretch',
            },
              items:[{
                xtype:'container',
                layout:'column',
                width:1400,
                height:60,
                items:[{
                  xtype:'panel',
                  columnWidth:0.6,
                  height:60,
                  html:'<h2><img src="../../../public/images/icon-logo.png"><span>九安云存管理系统</span></h2>',
                },{
                  xtype:'panel',
                  columnWidth:0.4,
                  height:60,
                  items:[{
                    xtype:'button',
                    menu:[{
                      text:'简体中文'
                    },{
                      text:'English',
                    },{
                      text:' French'
                    },{
                      text:'Russian'
                    }]
                  }]
                }]
                }],
                {
                xtype:'panel',
                width:1400,
                height:800,
                cls:'login-wrap-cls',
                layout:'absolute',
                items:[{
                  xtype:'form',
                },
                  {
                       xtype: 'label',
                      text: '用户登录',
                      cls:'login-form-title',
                  },
                      {
                          xtype: 'textfield',
                          name: 'username',
                          id:'username',
                          cls: 'username-cls',
                          labelHeight:45,
                          enableKeyEvents: true,
                          emptyText: '用户名/姓名',

                      },{
                          xtype: 'textfield',
                          name: 'password',
                          id:'password',
                          cls: 'password-cls',
                          inputType: 'password',
                          emptyText: '登录密码',
                      },{
                          xtype:'container',
                          layout:'column',
                          items:[{
                              xtype:'textfield',
                              fieldLabel:'验证码',
                              name:'submitCode',
                              cls:'submitCode-cls',
                              labelWidth: 120,
                              labelAlign: 'right',
                              padding:'0 10 0 0',
                              labelHeight:45,
                              enableKeyEvents: true,
                              columnWidth: 0.6

                            },{
                              xtype:'button',
                              text:'获取验证码',
                              name:'getSubmitCode',
                              cls:'getSubmitCode-cls',
                              labelHeight:45,
                              enableKeyEvents:true,
                              columnWidth:0.2
                            },{
                              xtype:'button',
                              text:'刷新',
                              name:'refreshCode',
                              cls:'refreshCode-cls',
                              labelHeight:45,
                              enableKeyEvents:true,
                              columnWidth:0.2
                            }]

                        },{
                          xtype: 'checkbox',
                          boxLabel: '记住密码',
                          inputValue: "true",
                          uncheckedValue: "false",
                          name: 'rememberme',
                          cls:'rememberme-cls',
                      },{
                          xtype: 'button',
                          text: '登录',
                          cls: 'login-form-login',
                          id:'btnLogin',
                          action:'loginAction',
                          //handler:'onClickLogin'
                      },{
                          xtype: 'container',
                          layout: {
                              type: 'hbox',
                              align: 'stretch'
                          },
                          items: [{
                                    xtype: 'box',
                                    cls:'register-accounter-cls',
                                    html: '<a href="#" class="register-accounter">免费注册</a>',
                                    flex:1
                                  },{
                                    xtype: 'box',
                                    cls:'login-form-forgot',
                                    html: '<a href="#" class="forgot-password">忘记密码？</a>',
                                  }]
                        }]
              },{
                width:'100%',
                height:100,
                layout:{
                  type:'vbox',
                  pack:'start',
                  align:'stretch'
                },
                items:[{
                  xtype:'container',
                  layout:{
                    type:'hbox',
                    align:'stretch'
                  },
                  items:[{
                          xtype: 'box',
                          cls:'register-accounter-cls',
                          html: '<a href="#" class="register-accounter">关于九安</a>',
                          flex:1
                        },{
                          xtype: 'box',
                          cls:'login-form-forgot',
                          html: '<a href="#" class="forgot-password">联系我们</a>',
                        }]
                  },{
                    xtype:'panel',
                    html:'CopyRight©jjuanvision.com 网站备案：粤ICP背11073079号'
                  }]
              }]

           }]
           }]
});
