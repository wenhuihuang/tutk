Ext.define('Tutk.view.main.MainView', {
    extend: 'Ext.tab.Panel',
    xtype: 'app-main',
    alias : 'widget.mainview',
  //  region: 'center', //border 布局，将页面分成东，南，西，北，中五部分，这里表示TabPanel放在中间
  renderTo: Ext.getBody(),//绑定在body标签上
     activeTab: 0,//初始显示第几个Tab页
     deferredRender: false,//是否在显示每个标签的时候再渲染标签中的内容.默认true
     tabPosition: 'top',//表示TabPanel头显示的位置,只有两个值top和bottom.默认是top.
     enableTabScroll: true,//当Tab标签过多时,出现滚动条
     items: [{//Tab的个数
         title: 'Tab 1',
         html: 'A simple tab',
         listeners: {render:function(){//为每个Tab标签添加监听器.当标签渲染时触发
         }}
     },{
         title: 'Tab 2',
         html: 'Another one'
     },{
         title: 'Tab 3',
         autoLoad: 'test.html',
         closable: true
     }],
     bbar:[{//添加一个底部工具栏,并且在该工具栏上添加两个按钮
         text:'添加标签',
         handler:function(){//添按钮被点击时触发这个匿名函数(注意:该属性在button中能查到).
             var id = i ;
             tabs.add({//添加一个Tab标签
                 id: id,
                 title:'Tab '+i,
                 closable: true
             }) ;
             i=i+1;
             tabs.setActiveTab(id) ;//当id为"id"的Tab标签显示(变为活动标签).
         }
     },{
         text:'删除标签',
         handler: function(){
             var t = tabs.getActiveTab();//获得当前活动标签的引用
             if(t.closable){
                 tabs.remove(t);//删除标签
             }else{
             }
         }
     }]
});
