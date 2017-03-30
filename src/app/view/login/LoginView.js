Ext.define('Tutk.view.login.LoginView', {
    extend: 'Ext.container.Viewport',
    xtype: 'login',
    alias : 'widget.loginview',
    title : '登录',

    //主items部分开始
    items:[
      //整个页面默认布局开始
      {
      width:'100%',
      height:'100%',
      cls:'login-wrap',
      layout:{
        type:'vbox',
        pack:'start',
        align:'stretch',
      },
    //整个页面默认布局结束
      items:[
        //登录框头部信息开始
        {
        flex:1,//头部高度
        //头部整体布局开始
        xtype:'container',
        layout:'column',
        width:'100%',
        //头部整体布局结束
        //所有头部子组件布局开始
        items:[
          //第一个头部子组件开始
          {
          xtype:'panel',
          columnWidth:0.7,
          height:60,
          border:false,
          cls:'login-header-title',
          html:'<h2><img src="../../../public/images/icon-logo.png"><span>九安云存管理系统</span></h2>',
        },
        //第一个头部子组件结束
        //第一个头部子组件开始
        {
          xtype:'panel',
          columnWidth:0.3,
          height:60,
          border:false,
          items:[{
            xtype:'button',
            text:'<font color="#ccc">简体中文</font>',
            cls:'login-header-btn',
            menu:[{
              text:'Chinese'
            },{
              text:'English',
            },{
              text:' French'
            },{
              text:'Russian'
            }]
          }]
        }
        //第一个头部子组件结束
      ]
        //所有头部子组件布局结束
      },
      //登录框头部信息结束


      //登录框主要内容部分开始
      {
        //登录框主要内容部分整体默认布局高度
        // height:600,
        //登录框主要内容整体布局开始
        xtype:'panel',
        width:'100%',
        height:650,
        cls:'login-main-wrap',
        layout:'center',
        //登录框主要内容整体布局结束
        //登录框主要内容子组件布局开始
        items:[

          {
            xtype:'container',
            layout:'column',
            width:'100%',
            items:[
              //为布局额外添加开始
              {
              xtype:'panel',
              columnWidth:0.5,
              height:650,
              border:false,
            },
              //为布局额外添加结束
            {

              // 登录框额外布局
              xtype:'panel',
              columnWidth:0.5,
              height:650,
              border:false,

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
							                       cls: "iconfont icon-yanzhengma password-field-trigger"
						                           }
					                      }
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
                              xtype: 'box',
                              cls:'register-accounter-cls',
                              html: '<a href="#" class="register-accounter">免费注册</a>',
                              flex:1
                            },{
                              xtype: 'box',
                              cls:'login-form-forgot',
                              html: '<a href="#" class="forgot-password">忘记密码？</a>',
                            }]
                  },
                //登录框第七个子组件结束
              ]
              //登录框子组件结束

              }]
            }


            ]
          },

]
        //登录框主要内容子组件布局结束
      },
      //登录框主要内容部分结束



      //登录框尾部信息开始
      {
        //登录框尾部信息整体默认布局开始
        // flex:'20%',  //登录框整体默认高度
        width:'100%',
        height:80,
        cls:'login-footer',
        layout:{
          type:'vbox',
          pack:'start',
          align:'stretch'
        },
        //登录框尾部信息整体默认布局结束

        //登录框尾部信息子组件布局开始
        items:[
          //登录框尾部信息第一个子组件布局开始
          {
          //登录框尾部信息第一个子组件默认布局开始
          xtype:'container',
          layout:'column',
          width:'100%',
          cls:'login-contact-box',
          border:false,
          //登录框尾部信息第一个子组件默认布局结束
          items:[{
            //登录框尾部信息第一个子组件布局开始
                  xtype:'panel',
                  columnWidth:0.5,
                  border:false,
                  cls:'login-form-about',
                  html: '<a href="#" class="about-juan">关于九安</a>',
                },
            {
              xtype:'panel',
              columnWidth:0.5,
              border:false,
              html: '<a href="#" class="contact-us">联系我们</a>',
            }]
          //登录框尾部信息第一个子组件布局结束
        },
        //登录框尾部信息第一个子组件布局结束
        //登录框尾部信息第二个子组件布局开始
        {
          xtype:'panel',
          border:false,
          cls:'login-form-CopyRight',
          html:'CopyRight©jjuanvision.com 网站备案：粤ICP备11073079号'
        }
        //登录框尾部信息第二个子组件布局结束
      ]
      //登录框尾部信息子组件布局结束
      }]
      //登录框尾部信息开始
    }]
    //主items部分结束



  });
