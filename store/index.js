import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
import user from './modules/user.js'
import config from './modules/config.js'
import api from './modules/api.js'
import common from './modules/common.js'
const store = new Vuex.Store({
	state: {
	},
	getters: {
		
	},
	mutations: {

	},
	actions: {},
	modules: {
		user,
		config,
		api,
		common
	}
})

export default store;
