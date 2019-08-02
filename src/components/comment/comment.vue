<template>
    <div class="cmt-container">
        <h3>发表评论</h3>
        <hr>
        <textarea v-model="cmt_text" name="" id="" cols="30" rows="10" placeholder="请输入要输入的内容（最多120字）" maxlength="120" >
            
        </textarea>
        <mt-button type="primary" size="large" @click.native="takeUpComments()">评论</mt-button>

        <ul class="cmt_list">
            <li class="cmt_item" :key="item.index" v-for="(item, i) in pingLun">
                <div class="cmt_title">
                    第{{i+1}}楼&nbsp;&nbsp; 用户：{{ item.user_name }}&nbsp;&nbsp;发表时间：{{item.add_time}}
                </div>
                <div class="cmt_body">
                    {{item.content === 'undefined' ? '此用户很懒，什么都没说': item.content}}
                </div>
            </li>
        </ul>

        <mt-button type="primary" size="large" @click.native="getMore_cmt">加载更多</mt-button>
    </div>
</template>

<script>
import {Toast} from 'mint-ui'
export default {
    data() {
        return {
           pingLun:[],
           pageindex:2,
           cmt_text:''
        }
    },
    props:['cmt_id'],
    created(){
        this.takeUpComments()
        this.getComments()
    },
    methods:{
        takeUpComments(){
            if(this.cmt_text.trim().length === 0){
               return Toast('评论内容不能为空')
                
            }
            //发表评论
            //参数1:请求的URL地址
            //参数2：提交给服务器的数据对象 { content:this.msg }
            //参数3：定义提交时候，表单中数据的格式 { emulateJSON:true }
            this.$http.post('api/postcomment/'+this.$route.params.id, {content:this.cmt_text.trim()})
            .then(function(result){
                if(result.body.status === 0){
                    var cmt = { user_name:'匿名用户',add_time:Date.now(),content:this.cmt_text.trim() }
                    this.pingLun.unshift(cmt)
                    this.cmt_text = ''
                }
            })
        },
        getComments(){
            this.$http.get('api/getcomments/'+this.cmt_id+'?'+'pageindex='+this.pageindex).then(Response =>{
                if(Response.body.status === 0){
                    //this.pingLun = Response.body.message
                    //每当获取新评论数据的时候，不要把老数据清空覆盖，而是应该以老数据，拼接上新数据
                    this.pingLun = this.pingLun.concat(Response.body.message)
                    console.log(Response.body.message)
                } else {
                    console.log('获取评论失败')
                }
            })
        },

        //获取更多评论
        getMore_cmt(){
            this.pageindex++;
            this.getComments()
        }
    },
}
</script>

<style lang="scss" scoped>
    .cmt-container{
        h3{
            font-size: 18px
        }
        textarea{
            font-size: 14px;
            height: 85px;
            margin-bottom: 0%
        }
        .cmt_list{
            list-style: none;
            margin-top:10px;
            padding-left: 0px;
            .cmt_item{
                font-size: 13px;
                .cmt_title{
                    background-color: #ccc
                }
                .cmt_body{
                    line-height: 35px;
                    text-indent: 2em;
                }
            }
        }
    }
</style>