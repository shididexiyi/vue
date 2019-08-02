<template lang="">
    <div class="photoInfocontainer">
        <h3>{{ photoinfo.title }}</h3>
        <p class="subtitle">
        <span>发表时间:{{ photoinfo.add_time | dataFormat }}</span>
        <span>点击次数:{{ photoinfo.click }}</span>
        </p>
        <hr>
        <!-- 缩略图区域 -->
         <vue-preview :slides="slide1" @close="handleClose"></vue-preview> 
        <!-- 图片内容区域 -->
        <div class="content" v-html="photoinfo.content">

        </div>
        <cmt-box :cmt_id="id"></cmt-box>
      
    </div>
</template>

<script>
import comment from '../comment/comment.vue'
import { stringify } from 'querystring';
export default {
    data() {
        return {
            id:this.$route.params.id,
            photoinfo:{},
            slide1:[],
        }
    },
    created(){
        this.getPhotoInfo(),
        this.getGumePhoto()
    },
    methods:{
        getPhotoInfo(){
            this.$http.get('api/getimageInfo/'+this.id).then(result =>{
                if(result.body.status === 0){
                    this.photoinfo =result.body.message[0]
                }
            })
        },
        getGumePhoto(){
            this.$http.get('api/getthumimages/'+this.id).then(result =>{
                if(result.body.status === 0){
                    // this.slide1 = result.body.message
                    
                    let index = 0
                    result.body.message.forEach(item => {
                            item.w=600;
                            item.h=400;
                            item.alt = String(index)
                            item.title = String(index)
                            item.msrc = item.src
                            index++;
                    });
                    this.slide1 = result.body.message
                    console.log(result.body.message)
                } else {
                    console.log('fail')
                }
            })
        },
        takeUpComments(){},
        getMore_cmt(){},
        handleClose () {
        console.log('close event')
      }
    },
    components:{
        'cmt-box':comment
        }
}
</script>

<style lang="scss" scoped>
    .photoInfocontainer{
        padding-top: 3px;
        h3{
            color: #26A2ff;
            font-size:15px;
            text-align:center;
            margin:15px 0  0
        }
        .subtitle{
            display: flex;
            justify-content: space-between;
            font-size:13px;
        }
        .content{
          font-size: 13px;
          line-height: 30px
         }
    }
</style>