<template>
	<view class="cu-bar tabbar bg-white solid-top shadow-lg" style="width: 100%;height: 50px;">
		<view v-if="_item.hidden == false" @tap="switchTabbarIndex" :data-index="_index" :class="['action', index == _index?'text-'+theme.main:'', _item.max?'add-action':'' ]"
		 v-for="(_item, _index) in nav" :key="_index" style="position: relative;">
			<view :class="[_index == index?_item.icon+'fill':_item.icon]" v-if="!_item.max"></view>
			<button :class="[_item.icon, 'bg-'+theme.main]" v-if="_item.max" class="cu-btn shadow"></button>
			{{_item.title}}
			<view v-if="red[_item.red_key]" style="position: absolute;width: 100%;height: 100%;top: -10rpx;" class="flex justify-end align-start">
				<view class="red bg-red round">
					
					{{red[_item.red_key]>100?99:red[_item.red_key]}}
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	// 底部导航直接写在组件内 - 后续对接接口显示底部导航也方便
	import vuex from 'vuex'
	export default {
		computed: {
			...vuex.mapState('common', ['red']),
			...vuex.mapState('config', ['theme'])
		},
		data() {
			return {
				nav: [{
						title: '首页',
						hidden: false,
						icon: 'cuIcon-home',
						badge: false,
						badge_num: 0,
					},
					{
						title: '分类',
						hidden: false,
						icon: 'cuIcon-goods',
						badge: true,
						badge_num: 0,
					},
					// { title: '控制台', hidden: false, icon: 'cuIcon-settingsfill', badge: true, badge_num: 0, max: true },
					{
						title: '购物车',
						hidden: false,
						icon: 'cuIcon-cart',
						badge: true,
						badge_num: 40,
						red_key: 'cart',
					},
					{
						title: '我的',
						hidden: false,
						icon: 'cuIcon-my',
						badge: true,
						badge_num: 0,
					}
				],
				// 这里是直接面向对象的，所以循环的 index 向 data 的 index 妥协
				index: null,
			};
		},
		mounted() {
			this.switchTabbarIndex(0);
		},
		methods: {
			switchTabbarIndex(e) {
				let index = typeof e == 'number' ? e : e.currentTarget.dataset.index;
				if (index != this.index) {

					this.index = index;
					this.$emit('change', index);
				}
			}
		}
	}
</script>

<style>
	.red {
		font-size: 18rpx;
		width: 32rpx;
		height: 32rpx;
		text-align: center;
		line-height: 32rpx;
		margin-right: 48rpx;
	}

</style>
