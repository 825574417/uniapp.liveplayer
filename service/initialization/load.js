export default {
	colorui(sys, store) {
		let StatusBar = null;
		let CustomBar = null;
		let Custom = null;
		// #ifndef MP
		StatusBar = sys.statusBarHeight;
		if (sys.platform == 'android') {
			CustomBar = sys.statusBarHeight + 50;
		} else {
			CustomBar = sys.statusBarHeight + 45;
		};
		// #endif
		// #ifdef MP-WEIXIN
		StatusBar = sys.statusBarHeight;
		let custom = wx.getMenuButtonBoundingClientRect();
		Custom = custom;
		CustomBar = custom.bottom + custom.top - sys.statusBarHeight;
		// #endif		
		// #ifdef MP-ALIPAY
		StatusBar = sys.statusBarHeight;
		CustomBar = sys.statusBarHeight + sys.titleBarHeight;
		// #endif
		store.commit('config/setColorui', {
			StatusBar: StatusBar,
			CustomBar: CustomBar,
			Custom: Custom
		});
	}
}
