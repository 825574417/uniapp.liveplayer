// 代理执行事件

// #ifdef H5
import nowEvent from './events/h5.js'
// #endif
export default event = (evName, live, e) => {
	if(nowEvent[evName]){
		nowEvent[evName](live, e);
	}else{
		console.log(evName, "事件未处理");
	}
};