import Qs from './qs.js'
import store from '../../store'
function createNav(url, _options = {}) {
	return (querys = {}, type = 'navigateTo', options = {}) => {
		if(_options.needLogin&&!store.getters['user/hasLogin']){
			return store.commit('common/showLoginModal');
		}
		
		let data = {
			url: url + (url.indexOf("?") != -1 ? '&' : '?') + Qs.stringify(querys),
		}
		uni[type](data);
	}
}

// 导航服务
export default {
	// 去首页
	toHome: createNav('/pages/index/index'),
	// 返回上一页
	back(){
		if(getCurrentPages().length == 1){
			this.toHome({}, 'redirectTo');
		}else{
			uni.navigateBack({
				delta: 1
			});
		}
	},
	// 去商品详情 
	toGoodsDetail: createNav('/shop/goods/detail',{
		needLogin: true,
	}),
	// 确认订单
	toConfirmOrder: createNav('/shop/order/confirm',{
		needLogin: true,
	}),
	// 我的订单 order/order
	toOrder: createNav('/shop/order/order',{
		needLogin: true,
	}),
	// 订单详情 shop/order/detail
	toOrderDetail: createNav('/shop/order/detail',{
		needLogin: true,
	}),
	// 收货地址
	toOrderReceiptAddress: createNav('/shop/order/receipt', {
		needLogin: true,
	}),
	// 新增/编辑收货地址
	toOrderAddReceipt: createNav('/shop/order/add_receipt',{
		needLogin: true,
	}),
	// 搜索商品
	toGoodsSearch: createNav('/shop/goods/search'),
	// 商品列表
	toGoodsList: createNav('/shop/goods/list'),
	// 去帮助页面
	toCurrHelp: createNav('/shop/curr/help'),
	// 查看物流
	toLogisticsInfo: createNav('/shop/logistics/logisticsInfo')
}
