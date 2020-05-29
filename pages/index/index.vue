<template>
	<layout-page>
		<view slot="header">
			<ui-header :title="title"></ui-header>
		</view>
		<!-- 内容 -->
		<view slot="content">
			<ui-mescroll-uni ref="mescroll" :up="{ use: false }" :down="{ use: false }" :top="true" :bottom="false">
				新的页面
			 </ui-mescroll-uni>
		</view>
	</layout-page>
</template>

<script>
	import {
		Nav,
		Message
	} from '../../service'
	import vuex from 'vuex'
	import uiHeader from '../../components/ui/header.vue'
	import uiMescrollUni from '@/components/ui/mescrollUni.vue'
	export default {

	}
</script>

<style>

</style>
