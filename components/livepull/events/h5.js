// h5 拉流事件处理
export default {
	onPlay(live, e) {
		live.$emit('Play', {
			live,
			e
		});
	},
	onPause(live, e) {
		live.$emit('Pause', {
			live,
			e
		});
	},
	onWaiting(live, e) {
		live.$emit('Waiting', {
			live,
			e
		});
	},
	onError(live, e) {
		live.$emit('Error', {
			live,
			e
		});
	},
	onCanPlay(live, e) {
		live.$emit('CanPlay', {
			live,
			e
		});
	}
}
