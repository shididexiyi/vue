<template>
    <div class="newInfo-container">
        <h3 class="title">{{ newInfo.title }}</h3>
        <p class='mui-ellipsis'>
            <span>发表时间：{{ newInfo.add_time | dataFormat }}</span>
            <span>点击次数：{{ newInfo.click }}</span>
        </p>
        <hr>
        <div class="content" v-html="newInfo.content">

        </div>
        <comment-box :cmt_id="id">评论</comment-box>
    </div>
</template>

<script>
import {Toast} from 'mint-ui'
import comment from '../comment/comment.vue'
export default {
    data() {
        return {
            id:this.$route.params.id,//将url传来的id值，挂载到data上
            newInfo:{}
        }
    },
    mounted(){
        this.getNewInfo()
    },
    methods:{
        getNewInfo(){
            console.log(this.id)
            this.$http.get('api/getnew/'+this.id).then(Response =>{
                if(Response.body.status === 0){
                    // console.log(Response.body.message[0].content)
                    this.newInfo = Response.body.message[0];
                    Toast('获取新闻详情成功')
                } else {
                    Toast('获取新闻详情失败')
                }
            })
        }  
    },
    components:{
        "comment-box":comment
    }
}
</script>

<style lang="scss" scoped>
    .newInfo-container{
        padding: 0 4px;
        .title{
            font-size: 16px;
            text-align: center;
            margin:15px 0;
            color: red
        }
        .mui-ellipsis{
            font-size: 12px;
            color:#226aff;
            display: flex;
            justify-content: space-between
        }
        .content{
            width:100%;
        }
    }
</style>