export default{
	namespaced: true,
	state: {
		token: uni.getStorageSync('token'),
	},
	getters: {
		
		hasLogin(state){
			return state.token?true:false; 
		}
	},
	mutations: {
		setDefaultReceiptAddress(state, defaultReceiptAddress = null){
			state.defaultReceiptAddress = defaultReceiptAddress;
		},
		setToken(state, token = null){
			uni.setStorageSync('token', token);
			return state.token = token;
		}
	},

}