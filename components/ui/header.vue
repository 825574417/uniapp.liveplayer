<template>
	<view class="cu-bar flex justify-between padding-left padding-right solid-bottom line-gray" :style="{minHeight: cui.CustomBar+'px', paddingTop: cui.StatusBar+'px'}" :class="'bg-'+theme.header.bg">
		<view style="flex: 1;" class="align-center">
			<view @tap="back" style="font-size: 34rpx;" v-if="showBackToHome" :class="canBack?'cuIcon-back':'cuIcon-homefill'"></view>
		</view>
		<view style="flex: 1;overflow: hidden;" class="text-center text-bold text-lg">
			<view class="text-cut">{{title}}</view>
		</view>
		<view style="flex: 1;"></view>
	</view>
</template>

<script>
	import vuex from 'vuex'
	import { Nav } from '@/service'
	export default{ 
		props:['title'],
		data(){
			return {
				canBack: true,
			};
		},
		mounted() {
			this.canBack = getCurrentPages().length > 1?true:false;
		},
		methods: {
			back(){
				Nav.back();
			} 
		},
		computed: {
			...vuex.mapState('config', ['theme', 'cui']),
			
			showBackToHome(){
				let pages = getCurrentPages();
				return pages[pages.length - 1].route == 'pages/index/index'?false:true;
			}
		}
	}
</script>

<style>
	.bg-black-custom{
		color: #000000 !important;
	}
</style>
