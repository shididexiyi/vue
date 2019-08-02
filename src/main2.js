import Vue from 'vue'
// 1.导入vue-router包
import VueRouter from 'vue-router'
//2.手动安装VueRouter
Vue.use(VueRouter)
import app from './app.vue'
//导入app组件

//导入自己的router.js路由模块
import router from './router.js'

// import MintUI from 'mint-ui'
// Vue.use(MintUI)

// //此处可省略node_modules/
 import 'mint-ui/lib/style.css'

//按需导入Mint-UI组件
//  import { Swipe,SwipeItem,Header,Button,Loadmore } from 'mint-ui'

//引入MUI样式
import './lib/mui/css/mui.min.css'

import './lib/mui/css/icons-extra.css'
import moment from 'moment'
//导入vue-resource
import VueResource from 'vue-resource'
//安装Vue-resource
import MintUI from 'mint-ui'
//安装MintUI组件
import VuePreview from 'vue-preview'
Vue.use(MintUI)
Vue.use(VuePreview)
import 'mint-ui/lib/style.css'
Vue.use(VueResource)
//设置请求根路径
Vue.http.options.root = 'http://www.liulongbin.top:3005/';
//全局设置post时候表单数据格式组织形式
Vue.http.options.emulateJSON = true;
//定义全局过滤器
Vue.filter('dataFormat',function(dataStr,geshi="YYYY-MM-DD HH:mm:ss"){
    return moment(dataStr).format(geshi)
})
// Vue.component(Header.name, Header);
// Vue.component(Swipe.name, Swipe);
// Vue.component(SwipeItem.name, SwipeItem);
// Vue.component(Button.name, Button);
// Vue.component(Loadmore.name,Loadmore)
var vm =new Vue({
    el:'#app',
    render: c => c(app),//render会把el指定的容器中，所有的内容都清空，所以不要 把路由的 router-view和router-link直接写到el所控制的元素中
    router,//4将路由对象挂载到vm上
    components:{
        
    }
})