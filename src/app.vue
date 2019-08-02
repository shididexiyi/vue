<template>
    <div>
        <mt-header fixed title="顶部部分"></mt-header>

		<transition >
		<router-view></router-view>
		</transition>
		
        <nav class="mui-bar mui-bar-tab">
			<router-link class="mui-tab-item-lib"  to="/Host">
				<span class="mui-icon mui-icon-home"></span>
				<span class="mui-tab-label">首页</span>
			</router-link>
			<router-link class="mui-tab-item-lib"  to="/Vip">
				<span class="mui-icon mui-icon-gear"></span>
				<span class="mui-tab-label">会员</span>
			</router-link>
			<router-link class="mui-tab-item-lib"  to="/ShopCar">
				<span class="mui-icon mui-icon-extra mui-icon-extra-cart"><span class="mui-badge">9</span></span>
				<span class="mui-tab-label">购物车</span>
			</router-link>
			<router-link class="mui-tab-item-lib"  to="/Search">
				<span class="mui-icon mui-icon-gear"></span>
				<span class="mui-tab-label">搜索</span>
			</router-link>
		</nav>
    </div>
</template>
<script>
export default {
    
}
</script>
<style lang="scss" scoped>
	.mint-header{
		z-index: 99;
	}
	
    div{
		background-color: aliceblue;
		padding-top: 40px;
		padding-bottom: 50px;
		overflow-x: hidden;
	
	}
	.v-enter
	{
		opacity: 0;
		transform: translateX(100%);
	}
	.v-leave-to
	{
		opacity: 0;
		transform: translateX(-100%);
		position: absolute
	}

	.v-enter-active,
	.v-leave-active{
		transition: all 0.5s ease
	}

	//该类名，解决tabbar 点击无法切换路由
	.mui-bar-tab .mint-tab-item-lib .mui-active{
		color: #007aff
	}
	.mui-bar-tab .mui-tab-item-lib{
		display: table-cell;
    	overflow: hidden;
    	width: 1%;
    	height: 50px;
    	text-align: center;
    	vertical-align: middle;
    	white-space: nowrap;
    	text-overflow: ellipsis;
    	color: #929292;
	}
	.mui-bar-tab .mui-tab-item-lib .mui-icon{
		top:3px;
		width: 24px;
		height: 24px;
		padding-top: 0;
		padding-bottom: 0
	}
	.mui-bar-tab .mui-tab-item-lib .mui-icon~.mui-bar-tab-label {
		font-size: 11px;
		display: block;
		overflow: hidden;
		text-overflow: ellipsis;
	}
</style>