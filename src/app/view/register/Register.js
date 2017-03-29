Ext.define('Demo1.view.register.Register', {
    extend: 'Ext.container.Container',
    xtype: 'register',
    requires: [
        'Demo1.view.register.RegisterController',
        'Demo1.view.register.RegisterModel',
        'Ext.form.Panel'
    ],
    controller: 'register',
    viewModel: 'register',
    plugins: 'viewport',

    items: [
                {
                    xtype: 'form',
                    title: '注册',
                    width: 300,
                    bodyPadding: 10,
                    defaultType: 'textfield',
                    border: false,
                    items: [
                       
                    ],
                    buttons: [
                        {
                            text: '返回登录',
                            id:'btnLogin'
                        }
                    ]
                }
            ]






});