// doc https://ext.dcloud.net.cn/plugin?id=392
import request from '../../js_sdk/luch-request/request.js'
import store from '../../store'
import envDev from '../../env.dev.js'
import envProd from '../../env.prod.js'
let http = new request();
// 根据环境变量获取跟请求域名

http.config.baseUrl = (process.env.NODE_ENV === 'development'?envDev:envProd).baseUrl;
// 只允许 statusCode 200 通过，其他视为异常
http.validateStatus = (statusCode) => {
     return statusCode === 200;
}
// 请求拦截器
http.interceptor.request((config, /* cancel 可以取消本次请求 */ cancel) => {
	if(store.getters['user/hasLogin']){
		config.data.token = store.state.user.token;
	}
	return config;
});
// 响应拦截器
http.interceptor.response((response) => {
	// status === 200
	
	return response.data;
}, (response) => {
	// status !== 200
	if(response.statusCode == 401){
		store.commit('common/showLoginModal');
	}
	return response;
});
export default http;
