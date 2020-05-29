export default {
	namespaced: true,
	state: {
		modal: {
			show: false,
			content: '',
		},
		wx_login_mdal:{
			show: false
		},
		red: null,
	},
	mutations: {
		setRed(state, red){
			state.red = red;
		},
		showLoginModal(state){
			return state.wx_login_mdal.show = true;
		},
		hideLoginModal(state){
			return state.wx_login_mdal.show = false;
		},
		showModal(state, options) {
			if(state.modal.show){
				return uni.$once('showModal', () => {
					this.commit('common/showModal', options);
				});
			}
			state.modal = {
				show: true,
				...options
			};
			return uni.$emit('showModal');
		},
		hideModal(state, type = 'reject') {
			state.modal[type]();
			return state.modal.show = false;
		},
	},
	actions: {

	}
}
