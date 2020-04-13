<template>
	<view>
		<live-pull ref="livePlayer" style="width: 100%;height: 100%;position: absolute;"></live-pull>
	</view>
</template>

<script>
	// import flvjs from 'flv.js'
	import livePull from '@/components/livepull/livepull.vue'
	export default {
		onReady(){
			let livePlayer = this.$refs.livePlayer.init({
				src: 'http://pull.ajiu999.cn/live/18664903380.flv',
				objectFit: 'fill',
				h5: {
					type: 'flv'
				}
			});
			
			
			
			livePlayer.$on('CanPlay', () => {
				// livePlayer.play();
			});
			
			
			
			livePlayer.load();
			
		},
		components: {
			livePull
		}
	}
</script>
