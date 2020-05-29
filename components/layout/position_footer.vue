<template>
	<view class="position_footer">
		<view class="position_footer_box flex justify-center align-end" :style="{ height: height }">
			<slot></slot>
		</view>
	</view>
</template>

<script>
	export default{
		props: ['height']
	}
</script>

<style>
	.position_footer {
		position: fixed;
		width: 100%;
		height: 0rpx;
		bottom: 0rpx;
		left: 0rpx;
		z-index: 99;
	}

	.position_footer_box {
		position: absolute;
		width: 100%;
		height: 0rpx;
		bottom: 0rpx;
		left: 0rpx;
	}
</style>
