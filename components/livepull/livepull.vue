<template>
	<view style="width: 100%;height: 100%;">
		<!-- #ifdef H5 -->
		<video id="livepull" :controls="true" :show-center-play-btn="false" x5-video-player-type="h5-page" :meted="false" :enable-progress-gesture="false" style="width: 100%;height: 100%;"
		 :objectFit="live&&live.options.objectFit"></video>
		<!-- #endif -->
	</view>
</template>

<script>
	import livepull from './livepull.js'
	// #ifdef H5
	import flvjs from 'flv.js'
	// #endif
	import handleEvent from './events.js'
	export default {
		data() {
			return {
				// 直播对象
				live: null,
			};
		},
		methods: {
			init(options) {
				this.live = new livepull(options)
				this.handle(this.live);
				return this.live;
			},
			// #ifdef H5
			handle(live) {
				let video = document.getElementById('livepull').children[0].children[0];
				video.onplay = (e) => {
					handleEvent('onPlay', live, e);
				};
				video.onpause = (e) => {
					handleEvent('onPause', live, e);
				};
				video.onwaiting = (e) => {
					handleEvent('onWaiting', live, e);
				};
				video.oncanplay = (e) => {
					handleEvent('onCanPlay', live, e);
				};
				video.onerror = (e) => {
					handleEvent('onError', live, e);
				};
				if (flvjs.isSupported()) {
					live.h5_video = flvjs.createPlayer({
						type: live.options.h5.type,
						url: live.options.src
					});
					live.h5_video.attachMediaElement(video);
					
				}
			},
			// #endif
		}
	}
</script>

<style>
</style>
