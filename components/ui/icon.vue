<template>
	<view :class="icon" style="position: relative;">
		<view class="round bg-red red" v-if="num" :style="{ right: right +'px' }" style="position: absolute;top: 0rpx;">{{num}}</view>
	</view>
</template>

<script>
	export default{
		props: ['icon', 'num', 'right']
	}
</script>

<style>
	.red {
		font-size: 16rpx;
		width: 32rpx;
		height: 32rpx;
		text-align: center;
		/* margin-right: 48rpx; */
		line-height: 32rpx;
	}
</style>
