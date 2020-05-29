// 事件封装
export default{
	$emit(){
		return uni.$emit(...arguments);
	},
	$on(){
		return uni.$on(...arguments);
	},
	$once(){
		return uni.$once(...arguments);
	},
	$off(){
		return uni.$off(...arguments);
	},
}