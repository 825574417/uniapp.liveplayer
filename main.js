import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false

import store from './store'
Vue.prototype.$store = store;

import cuCustom from './components/current/cu-custom.vue'
Vue.component('cu-custom',cuCustom)
// 页面组件 - 内含全局模态框
import layoutPage from './components/layout/page.vue'
Vue.component('layout-page', layoutPage);

App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()
