<template>
<div class="goods-list">
    <div class="goods-item">
        <img 
        src="https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2357277035,3549795287&fm=26&gp=0.jpg" 
        alt="">
        <h1 class="title">小米NOTE,16G双卡</h1>
        <div class="info">
            <p class="price">
                <span class="now">￥299</span>
                <span class="old">￥299</span>
            </p>
            <p class="sell">
                <span>热卖中</span>
                <span>剩60件</span>
            </p>
        </div>
    </div>
    <div class="goods-item">
        <img 
        src="https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2357277035,3549795287&fm=26&gp=0.jpg" 
        alt="">
        <h1 class="title">小米NOTE,16G双卡</h1>
        <div class="info">
            <p class="price">
                <span class="now">￥299</span>
                <span class="old">￥299</span>
            </p>
            <p class="sell">
                <span>热卖中</span>
                <span>剩60件</span>
            </p>
        </div>
    </div>
    <div class="goods-item">
        <img 
        src="https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2357277035,3549795287&fm=26&gp=0.jpg" 
        alt="">
        <h1 class="title">小米NOTE,16G双卡</h1>
        <div class="info">
            <p class="price">
                <span class="now">￥299</span>
                <span class="old">￥299</span>
            </p>
            <p class="sell">
                <span>热卖中</span>
                <span>剩60件</span>
            </p>
        </div>
    </div>
</div>
</template>

<script>
export default {
    
}
</script>

<style lang="scss" scoped>
    .goods-list{
        display: flex;
        flex-wrap: wrap;
        padding:8px;
        justify-content: space-between;
        .goods-item{
            width: 49%;
            border: 1px solid #ccc;
            box-shadow:0 0 8px #ccc;
            margin-top: 3px;
            margin-bottom: 3px;
            img{
                width: 100%
            }
            .title{
                font-size: 14px
            }
            .info{
                background-color: #ddd;
                p{
                    margin: 0;
                    padding:5px;
                }
                .price{
                    .now{
                        color: red;
                        font-size: bold;
                        font-size: 16px;
                    }
                    .old{
                        text-decoration: line-through;//贯穿线，划掉老价格
                        font-size:12px;
                        margin-left: 10px;
                    }
                    .sell{
                        display: flex;
                        justify-content: space-between;
                        font-size: 12px;
                    }
                }
            }
        }
    }
</style>