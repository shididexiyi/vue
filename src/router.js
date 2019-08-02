import VueRouter from 'vue-router'
//导入对应的路由组件
import HostContainer from './components/tabbar/HostContainer.vue'
import SearchContainer from './components/tabbar/SearchContainer.vue'
import ShopcarContainer from './components/tabbar/ShopcarContainer.vue'
import VipContainer from './components/tabbar/VipContainer.vue'
import newsList from './components/news/newslist.vue'
import newInfo from './components/news/newInfo.vue'
import photoList from './components/photo/photolist.vue'
import photoInfo from './components/photo/photoinfo.vue'
import Goodslist from './components//goods/Goodslist.vue'
//3创建路由对象
var router = new VueRouter({
    routes:[//配置路由规则
        { path:'/',component:HostContainer},
        { path:'/Host',component:HostContainer},
        { path:'/Vip',component:VipContainer },
        { path:'/ShopCar',component:ShopcarContainer },
        { path:'/Search',component:SearchContainer },
        { path:'/Host/newslist',component:newsList},
        { path:'/Host/newInfo/:id',component:newInfo},
        { path:'/Host/photolist',component:photoList},
        { path:'/Host/photoinfo/:id',component:photoInfo},
        { path:'/Host/goodslist',component:Goodslist}
    ],
    linkActiveClass: 'mui-active'//覆盖默认的路由高亮的类，默认的类叫做router-link-active

})

export default router