# vue-2019.5.21

#### Description
网课vue 第七天项目 

#### Software Architecture
Software architecture description

#### Installation

1. xxxx
2. xxxx
3. xxxx

#### Instructions

1. xxxx
2. xxxx
3. xxxx

#### Contribution

1. Fork the repository
2. Create Feat_xxx branch
3. Commit your code
4. Create Pull Request


#### Gitee Feature

1. You can use Readme\_XXX.md to support different languages, such as Readme\_en.md, Readme\_zh.md
2. Gitee blog [blog.gitee.com](https://blog.gitee.com)
3. Explore open source project [https://gitee.com/explore](https://gitee.com/explore)
4. The most valuable open source project [GVP](https://gitee.com/gvp)
5. The manual of Gitee [https://gitee.com/help](https://gitee.com/help)
6. The most popular members  [https://gitee.com/gitee-stars/](https://gitee.com/gitee-stars/)

##制作首页APP组件
1.完成Header区域，使用的是Mint-UI的Header组件
2.制作底部的Tabbar区域，使用的是MUI的Tabbar.html
    +在制作 购物车 小图标的时候，操作会相对多一些；
    +先把 扩展图标的css 演示，拷贝到 项目中
    +拷贝扩展字体库ttf文件到项目中
    +为购物车小图标添加如下样式“mui-icon-extra mui-icon-extra-cart”
3.要在中间区域放置一个router-view区域来展示路由匹配到的组件

##改造 tabbar 为 router-link

##设置路由高亮

##点击tabbar 中的路由链接 ，展示对应的路由组件

##制作首页轮播图

##加载首页轮播图数据
1.获取数据，如何获取呢，使用vue-resource
2.使用 vue-resource 的this.$http.get 获取数据
3.获取到的数据，要保存到data身上
4.使用v-for 循环渲染 每个 item项

##改造九宫格区域的样式

##改造 新闻资讯 路由链接

##新闻资讯 页面 制造
1.绘制界面，使用MUI中的media-list.html
2.使用vue-resource获取数据
3.渲染真实数据

##实现 新闻资讯列表 点击跳转到新闻详情
1.把列表中的每一项改造为router-link,同时在跳转的时候应提供唯一的id
2.创建新闻详情的组件页面 NewsInfo.vue
3.在 路由模块中 ，将 新闻详情的 路由地址 和 组件对应

##实现 新闻详情 的 页面布局和数据渲染

##单独封装一个comment.vue,评论子组件
1.先创建一个 单独的 comment.vue 组件模板
2.在需要使用 comment 组件的 页面中，先手动 导入 comment 组件
  +'import comment from './comment.vue''
3.在父组件中，使用 'components'属性，将刚才导入的comment组件注册为自己的子组件
4.将注册子组件时候的，注册名称，以 标签形式，在页面中导入
    注：组件之间互相引入 <import + 组件name from path>  组件name不需要{}包裹

##获取所有的评论数据显示到页面中

##实现点击加载更多评论的功能
1.为 加载更多 按钮绑定点击事件，在事件中，请求 下一页数据
2.点击加载更多，让pageIndex++,然后重新调用 this.getNewInfo方法，重新获取新一页的数据
3.为了防止 新数据 覆盖老数据的情况，我们在 点击加载更多的时候，每当获取到新数据，应该让 老数据调用 数组的concat方法，拼接上新数组

##发表评论
1.把文本框做双向数据绑定
2.为发表按钮绑定事件
3.校验评论内容是否为空，如果为空，则Toast提示用户，评论不能为空
4.通过vue-resource 发送一个请求，把评论内容提交给 服务器
5.当发表评论OK后，重新刷新列表，以查看最新的评论
 + 如果调用 getComments方法重新刷新评论列表的话，可能只能得到 最后一页的评论，前几页的评论获取不到
    所以我们换一种思路，在评论成功后，在客户端，手动拼接出一个新的评论对象，然后 调用 数组的
        unshift方法，把最新的评论，追加到 data中 pingLun的开头，这样，就能完美实现刷新评论的需求

##改造图片分享 按钮为 路由链接并显示对应的组件页面

##绘制 图片列表 组件页面结构并美化样式
1.制作 顶部的滑动条
2.制作 底部的图片列表
###制作顶部滑动条的坑们
1.需要借助于MUI中的tab-top-webview-main.html
2.需要把slider区域的mui-fullscream 类去掉
3.顶部滑动条无法正常触发滑动，通过检查官方文档，需要被初始化
    +1.导入MUI.js
    +2 调用官方提供的 方式 去初始化
    。。。
    mui('.mui-scroll-wrapper').scroll({
	deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
    });
    。。。
4.我们在初始化滑动条的时候，导入的mui.min.js。但是报如下错误
  Uncaught TypeError: 'caller', 'callee', and 'arguments' properties may not be accessed on strict mode functions or the arguments objects for calls to them
  经过推测，mui.js文件中用到了'caller', 'callee',  'arguments'这三个属性，但是 webpack打包好的bundle.js中，默认是启用严格模式的，所以这两者冲突了。
  ++解决方案：1.把mui.js中的 非严格 模式的代码改掉，但不现实，因为mui.js不是我们写的
             2.把webpack 打包时候的严格模式禁用掉;
    +最终，我们选择了plan 2 ，移除了严格模式
    .babelrc
    {
        "plugins": ["transform-remove-strict-mode"]
    }

5.刚进入图片分享页面的时候，滑动条无法正常工作，经分析：发现如果要初始化滑动条必须要等DOM元素加载完毕，所以，我们把 初始化
    滑动条 的代码，搬到了mounted生命周期函数中，

  注：第6条，暂时没有碰到这个问题，所以没改样式名字  
6.当 滑动条 调试OK后。发现，tabbar 无法正常工作，这时候，我们需要把 每个 tabbar 按钮的样式中，'mui-tab-item' 重新改一下名字
7.获取所有分类，开渲染 分类列表

### 制作图片列表区域
1.图片列表需要使用懒加载技术，我们可以使用mint-ui提供的现成的组件 'lazy-load'
2.根据'lazy-load'的使用文档，尝试使用
3.渲染图片列表数据

###实现了图片列表的懒加载改造和样式美化

##实现了 点击图片 跳转到 图片详情页面
1.在改造li成router-link的时候，需要使用tag属性指定要渲染为 哪种元素

## 实现 详情页面的布局和美化，同时获取数据渲染页面

##实现 图片详情中 缩略图的功能
1.使用 插件vue-preview 这个缩略图插件
2.获取到所有的图片列表，然后使用vue-preview标签：<vue-preview :slides="slide1" @close="handleClose"></vue-preview>
3.注意：每个 图片数据对象中，必须有w和h

##绘制 商品列表页面 基本结构并美化

##尝试在手机上 去进行项目的预览和测试
1.要保证自己的手机可以正常运行
2.要保证 手机 和开发项目的电脑 处于同一个WIFI环境中，也就是说 手机可以 访问到 电脑的IP
3.打开自己的 项目中package.json文件，在dev脚本中，添加一个 --host指令，把当前 wifi ip 地址 ，设置为 --host 的指令值
    +如何查看自己电脑所处 WIFI的IP呢，在cmd中运行 'ipconfig',查看 无线网的ip地址
    // "dev": "webpack-dev-server --config=config/webpack.dev.js --host 192.168.124.14"