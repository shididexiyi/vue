<template>
    <div>
        <ul class="mui-table-view">
				<li class="mui-table-view-cell mui-media" :key="item.id" v-for="item in information">
					<router-link :to="'/Host/newInfo/' + item.id">
						<img class="mui-media-object mui-pull-left" :src="item.img_url">
						<div class="mui-media-body">
							<h1>{{ item.title }}</h1>
							<p class='mui-ellipsis'>
                                <span>发表时间：{{ item.add_time | dataFormat }}</span>
                                <span>点击：{{ item.click }}</span>
                            </p>
						</div>
					</router-link>
				</li>
			</ul>
    </div>
</template>

<script>
import '../../lib/mui/css/mui.min.css'
import {Toast} from 'mint-ui'
export default {
    data() {
        return {
            information:[]//新闻列表
        }
    },
    created(){
        this.getNewsList()
    },
    methods:{
        getNewsList(){
            this.$http.get('http://www.liulongbin.top:3005/api/getnewslist').then(result => {
                if(result.body.status === 0 ){
                    this.information = result.body.message
                    console.log(this.information)
                    //若没失败，将数据保存到data中
                } else {
                    Toast('获取新闻列表失败')
                }
            })
        }
    }
}
</script>

<style lang="scss" scoped>
    .mui-table-view{
        li{
            h1{font-size:14px;}
            .mui-ellipsis{
                font-size:12px;
                color:#226aff;
                display: flex;
                justify-content: space-between
            }
        }
    }
</style>