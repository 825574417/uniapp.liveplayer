import store from '../../store'
export default {
	showModal(content = '', options = {}) {
		return new Promise((resolve, reject) => {
			options.content = content;
			options.resolve = resolve;
			options.reject = reject;
			store.commit('common/showModal', options)
		});
	},
	showToast(title = ''){
		uni.showToast({
			title: title,
			// mask: true,
			icon: 'none'
		});
	}
}
