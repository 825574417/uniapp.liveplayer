import moment from './moment.js'
// 缓存
export default {
	// set store
	set() {
		let key = arguments[0];
		let value = arguments[1];
		let expire_s = arguments[2]||(3600*24)*7;
		let expiretime = moment().add(expire_s, 's').valueOf(); // 0 == 7 天
		let data = {
			key: key,
			value: value,
			expiretime: expiretime
		}
		console.log('%cset.'+key, 'color:green;', value, '有效期:'+expire_s+'s');
		uni.setStorageSync(key, data);
	},
	// get store
	get() {
		let data = uni.getStorageSync(...arguments);
		if(!data){
			console.log('%cget.'+arguments[0], 'color:green;', null);
			return null;
		}else{
			console.log('%cget.'+data.key, 'color:green;', data.value);
		}
		if(moment().valueOf() < data.expiretime){
			// 有效期内
			return data.value;
		}else{
			// 已失效
			this.remove(...arguments);
			return null;
		}
	},
	// remove store
	remove() {
		let key = arguments[0];
		console.log('%cremove.'+key, 'color:green;');
		uni.removeStorageSync(...arguments);
	},
	// clear store
	clear() {
		uni.clearStorageSync();
	},
}
