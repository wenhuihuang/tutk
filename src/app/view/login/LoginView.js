Ext.define('Tutk.view.login.LoginView', {
    extend: 'Ext.container.Viewport',
    xtype: 'login',
    alias : 'widget.loginview',
    title : '登录',
    items: [
                {
                    xtype: 'form',
                    title: '登录',
                    width: 300,
                    bodyPadding: 10,
                    defaultType: 'textfield',
                    border: false,
                    items: [

                    ],
                    buttons: [
                        {
                            text: '登录',
                            id:'btnLogin',
                            handler: 'onClickLogin'
                        },
                        {
                            text: '注册',
                            id:'btnRegister'
                        }
                    ]
                }
            ]
});
