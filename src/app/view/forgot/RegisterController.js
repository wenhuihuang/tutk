Ext.define('Tutk.view.register.RegisterController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.register',
    routes : {
        'register' : 'createRegister'
    },

    createRegister : function() {
        //删除当前视图
        this.getView().destroy();
        //创建Login窗口
        Ext.create({
            xtype: 'register'
        });
    },
    init: function (application) {
        this.control({
            '[id=btnRegister]': {
                click: this.showRegister
            }
        });
    },

    //跳转到注册框
    showRegister: function () {
       this.redirectTo('register')
    }
});
