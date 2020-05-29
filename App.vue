<script>
	import store from './store'
	import {Load} from './service'
	export default {
		onLaunch() {
			// 挂token
			store.commit('user/setToken', uni.getStorageSync('token'));
			// 设备信息
			let sys = store.state.config.sys;
			// 初始化
			Load.colorui(sys, store);
			// 全局事件
			uni.$on('login', () => {
				this.$store.dispatch('common/refRed');
			});
		},
		onShow() {},
		onHide() {}
	}
</script>

<style>
	/*每个页面公共css */
	@import "/static/css/colorui/main.css";
	@import "/static/css/colorui/icon.css";
	@import "/static/css/colorui/animation.css";
	
	.text-column-line-2 {
		letter-spacing: 0;
		overflow: hidden;
		display: -webkit-box;
		text-overflow: ellipsis;
		-webkit-line-clamp: 2;
		/*要显示的行数*/
		-webkit-box-orient: vertical;
		font-size: 12px;
	}
	
	.shadow-custom {
		box-shadow: 0rpx 5rpx 20rpx 0rpx rgba(0, 0, 0, 0.1);
	}
	.footer-confirm-panel {
		height: 98rpx;
		width: 100%;
	}
	
	.confirm-order-submit {
		font-size: 26rpx;
		font-weight: bold;
	}
	.submit{
		font-size:32rpx;
		font-weight:bold;
		color:rgba(255,255,255,1);
	}
</style>
