<template>
	<!-- 城市选择器 -->
	<picker mode="multiSelector" @change="change" range-key="name" :range="[province_list, city_list, area_list]" :value="[ province_index, city_index, area_index ]"
	 @columnchange="columnchange" @cancel="cancel" style="width: 100%;" class="noAccoun">
		<slot></slot>
	</picker>
</template>

<script>
	import vuex from 'vuex'
	import {
		Message
	} from '../../service'
	export default {
		props: ['province_id', 'city_id', 'area_id'],
		data() {
			return {
				province_index: 0,
				province_list: [],
				city_index: 0,
				city_list: [],
				area_index: 0,
				area_list: [],
			};
		},
		mounted() {
			this.refresh(0, 'province');
			// this.refresh(0, 'city');
			// this.refresh(0, 'area');
		},
		methods: {
			...vuex.mapActions('api', ['getRegionList']),
			refresh(pid, key) {
				let key_list = key + '_list';
				let key_index = key + '_index';
				this.getRegionList({
					pid: pid
				}).then(res => {
					if (res.code == 1) {
						this[key_list] = res.data;
						this[key_index] = 0;
						switch (key) {
							case 'province':
								this.refresh(res.data[0].id, 'city');
								break;
							case 'city':
								this.refresh(res.data[0].id, 'area');
								break;
						}
					} else {
						Message.showToast(res.msg)
					}
				}).catch(() => {
					Message.showToast("获取城市数据失败")
				});
			},
			change(e) {
				let value = e.detail.value;
				this.province_index = value[0];
				this.city_index = value[1];
				this.area_index = value[2];
				let province = this.province_list[this.province_index];
				let city = this.city_list[this.city_index];
				let area = this.area_list[this.area_index];
				let data = {
					province_id: province.id,
					province_name: province.name,
					city_id: city.id,
					city_name: city.name,
					area_id: area.id,
					area_name: area.name,
				};
				this.$emit('change', data);
			},
			columnchange(e) {
				let column = e.detail.column;
				let value = e.detail.value;
				let pid = null;
				switch (column) {
					case 0:
						pid = this.province_list[value].id;
						this.refresh(pid, 'city')
						break;
					case 1:
						pid = this.city_list[value].id;
						this.refresh(pid, 'area')
						break;
					case 2:

						break;
				}
			},
			cancel(e) {}
		}
	}
</script>

<style>
</style>
