import envDev from '../../env.dev.js'
import envProd from '../../env.prod.js'
export default{
	namespaced: true,
	state:{
		env: process.env.NODE_ENV === 'development'?envDev:envProd,
		// 通用色
		theme: {
			main: 'blue',
			contrast: 'white',
			aux: 'gray',
			header: {
				bg: 'white bg-black-custom',
			}
		},
		cui: {
			StatusBar: null,
			CustomBar: null,
			Custom: null,
		},
		// 设备信息
		sys: uni.getSystemInfoSync()
	},
	mutations: {
		setColorui(state, cui){
			cui.CustomBar = cui.CustomBar + 6; 
			state.cui = cui;
		}
	},
	getters: {
		getWxappUrl(){
			return (url) => {
				// /cart_empty/no.png
				return "http://official.qqh3.com:39002/images/wxapp" + url;
			}
		}
	}
}