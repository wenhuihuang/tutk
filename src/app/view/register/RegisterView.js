Ext.define('Tutk.view.register.RegisterView', {
    extend: 'Ext.container.Container',
    alias : 'widget.registerview',
    plugins: 'viewport',

    items:[{
      xtype:'container',
      cls:'public-wrapper',
      layout:'center',
      height:'100%',
      items:[{
        xtype:'form',
        width:400,
        height:400,
        cls:'login-form-box',
        bodyPadding: '20 20',
        defaults: {
              //defaults 这里设置form下所有组件的默认配置
              anchor: '100%',
              margin: '0 0 10 0',
              allowBlank: false //因为字段必填的很多，所以默认都必须填

               },
               items:[{
                 xtype:'panel',
                 height:45,
                 border:false,
                 cls:'login-header-title',
                 html:'<h2><img src="../../../public/images/icon-logo.png"><span>注册云存账号</span></h2'
               },{
                 xtype: 'textfield',
                 name: 'username',
                 fieldLabel:'用户名',
                 id:'username',
                 cls: 'username-cls',
                 enableKeyEvents: true,
                 emptyText: '请输入用户名',
                 height:40,
               },{
                 xtype: 'textfield',
                 name: 'password',
                 fieldLabel:'密码',
                 id:'password',
                 cls: 'password-cls',
                 inputType: 'password',
                 emptyText: '设置密码',
                 height:40,

               },{
                 xtype: 'textfield',
                 name: 'rePassword',
                 fieldLabel:'确认密码',
                 id:'rePassword',
                 cls: 'password-cls',
                 inputType: 'password',
                 emptyText: '再次输入密码',
                 height:40,
               },{
                 xtype: 'textfield',
                 name: 'companyname',
                 fieldLabel:'公司名称',
                 enableKeyEvents: true,
                 emptyText: '输入公司名称',
                 height:40,
               },{
                 xtype: 'textfield',
                 name: 'companyaddress',
                 fieldLabel:'公司地址',
                 enableKeyEvents: true,
                 emptyText: '输入公司地址',
                 height:40,
               },{
                 xtype: 'textfield',
                 name: 'linkman',
                 fieldLabel:'联系人',
                 enableKeyEvents: true,
                 emptyText: '输入联系人姓名',
                 height:40,
               },{
                 xtype: 'textfield',
                 name: 'linkman',
                 fieldLabel:'联系电话',
                 enableKeyEvents: true,
                 emptyText: '输入联系人号码',
                 height:40,
               },{
                 xtype: 'textfield',
                 vtype:'email',
                 name: 'email',
                 fieldLabel:'联系邮箱',
                 enableKeyEvents: true,
                 emptyText: '输入邮箱地址',
                 height:40,
               },{
                 xtype:'button',
                 text:'确定',
                 height:40,
                 action:'rebackLogin'
               }]

      }]
    }]






});
