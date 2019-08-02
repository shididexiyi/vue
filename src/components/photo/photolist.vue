<template>
<!-- 顶部滑动条 -->
    <div class="mui-container">
        <div id="slider" class="mui-slider">
				<div id="sliderSegmentedControl" class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted">
					<div class="mui-scroll">
						<a :class="['mui-control-item',item.id == 0 ? 'mui-active':'']"  v-for="item in cates" :key="item.id" @click="getPicListByCateId(item.id)">
							{{ item.title }}
						</a>
					</div>
				</div>
            </div>
            <!-- 图片列表区域 -->
            <ul class="photo-list">
                <router-link v-for="item in list" :key="item.id" :to="'/Host/photoinfo/'+item.id" tag="li">
                    <img v-lazy="item.img_url">
                    <div class="info">
                        <h1 class="info-title">{{ item.title }}</h1>
                        <div class="info-body">{{ item.zhaiyao }}</div>
                    </div>
                </router-link>
            </ul>
    </div>
</template>

<script>
//1.导入mui的js文件
import mui from '../../lib/mui/js/mui.min.js'
export default {

    data() {
        return {
            cates:[],//所有分类的列表数组
            list:[]//图片列表的数组
        }
    },
    created(){
        this.getAllCategory()
        this.getPicListByCateId(0)//默认进入页面就主动请求“全部”图片列表
    },
    mounted(){//当 组件中的DOM结构被渲染好并放到页面中后，会执行钩子函数
        //如果要操作元素了，最好在 mounted里面，因为 这个时候 DOM元素是最新的
        //初始化滑动控件
        mui('.mui-scroll-wrapper').scroll({
	    deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
        });
    },
    ///api/getimgcategory
    methods:{
        getAllCategory(){
            //获取所有图片分类
            this.$http.get("api/getimgcategory").then(result =>{
                if(result.body.status === 0) {
                    //手动拼接处最完整的列表
                    result.body.message.unshift({title:"全部",id:0})
                    this.cates = result.body.message
                } else {
                    console.log("获取失败")
                }
            })
        },
        getPicListByCateId(cateId){
            //根据分类id,获取图片列表
            this.$http.get("api/getimages/"+ cateId).then(result =>{
                if(result.body.status === 0){
                    this.list = result.body.message
                }
            })
        }
    }
}
</script>

<style lang="scss" scoped>
* {
    touch-action:pan-y
}


.photo-list{
    margin: 0;
    padding: 10px;
    list-style: none;
    padding-bottom: 0px;
    li {
        background-color: #ccc;
        text-align: center;
        margin-bottom: 10px;
        box-shadow: 0 0 9px #999;
        position: relative;
        img{
            width: 100%
        }
        img[lazy=loading] {
            width: 40px;
            height: 300px;
            margin: auto;
        }   
        .info{
            color: white;
            text-align: left;
            position: absolute;
            bottom: 0px;
            background-color: rgba(0, 0, 0 ,0.4);
            max-width: 100%;
            .info-title{
                font-size: 14px
            }
            .info-body{
                font-size: 12px
            }
        }
    }
}
</style>