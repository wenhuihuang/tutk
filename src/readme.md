每一层的介绍:
  1,model和store其实就是管数据的,
  2,view层,纯界面,极少逻辑代码,逻辑代码都写到controller中,这样好管理.
  3,controller,建议逻辑代码都写到这里,这样好管理.

关于文件夹名称:
    注意文件夹起名controller/model/store/view文件夹名称一定的,
    这样每个相应的类名也可以根据这个来取,如:"keel.view.goods.GoodsListView"
    keel是整个应用程序的命名空间,view就是view文件夹,goods.GoodsListView就是view文件夹下的goods文件夹的
    GoodsListView.js文件;
