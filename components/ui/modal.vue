<template>
	<!-- modal -->
	<view class="cu-modal" :class="[modal.show?'show':'']">
		<view class="cu-dialog bg-white" style="width: 550rpx;height300rpx;border-radius: 30rpx;">
			<view class="flex flex-direction justify-center align-center padding-xl">
				<view class="modal-title">友情提示</view>
				<view class="modal-content margin-top-xl" :style="{ color: modal.color||'rgba(25,25,25,1)' }">{{modal.content}}</view>
			</view>
			<view class="cu-bar bg-white justify-end" style="height: 100rpx;border-top: solid 2.5rpx #f0f0f0;">
				<button v-if="!modal.hide_cancel" class="cu-btn bg-white solid-right modal-cancel" style="flex: 1;height: 100%;" @tap="hideModal('reject')">取消</button>
				<view v-if="!modal.hide_cancel" style="height: 100%;width: 2.5rpx;" class="bg-gray"></view>
				<button class="cu-btn bg-white text-blue modal-confirm" style="flex: 1;height: 100%;" @tap="hideModal('resolve')">确定</button>
			</view>
		</view>
	</view>
</template> 

<script>
	import vuex from 'vuex'
	export default{
		computed: {
			...vuex.mapState('common', ['modal'])
		},
		methods:{
			...vuex.mapMutations('common', ['hideModal'])
		}
	}
</script>

<style>
	.modal-cancel{
		font-size:30rpx;
		font-weight:bold;
		color:rgba(25,25,25,1)
	} 
	.modal-confirm{
		font-size:30rpx;
		font-weight:bold;
		color:rgba(52,175,255,1);
	}
	.modal-content{
		font-size:24rpx;
		font-weight:500;
		color:rgba(25,25,25,1);
		opacity:0.6;
	}
	.modal-title{
		font-size:28rpx;
		font-weight:bold;
		color:rgba(25,25,25,1);
	}
</style>
