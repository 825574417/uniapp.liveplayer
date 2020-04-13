// 参与处理
export default class livepull{
	constructor(options) {
		options.id = new Date().getTime();
		this.h5_video = null;
	    this.options = options;
	}
	// 播放视频
	play(){
		// #ifdef H5
		this.h5_video.play();
		// #endif
	}
	// 开始加载视频
	load(){
		// #ifdef H5
		this.h5_video.load();
		// #endif
	}
	// 专属事件管理
	$on(ev, call){
		uni.$on([this.options.id,ev].join('-'), call);
	}
	$once(ev, call){
		uni.$once([this.options.id,ev].join('-'), call);
	}
	$emit(ev, data){
		uni.$emit([this.options.id,ev].join('-'), data);
	}
	$off(ev, call){
		uni.$off([this.options.id,ev].join('-'), call);
	}
}