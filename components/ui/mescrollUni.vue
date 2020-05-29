<template>
	<view>
		<mescroll-uni ref="mescrollRef" :bottom="_bottom+'px'" :top="_top+'px'" @init="mescrollInit" @down="downCallback" @up="upCallback"
		 :down="_downOption" :up="_upOption">
			<view :style="style">
				<slot></slot>
			</view>
		</mescroll-uni>
	</view>
</template>

<script>
	// doc http://www.mescroll.com/uni.html?v=20200315#mescrolluni
	import MescrollMixin from "@/components/mescroll-uni/mescroll-mixins.js";
	import MescrollUni from "@/components/mescroll-uni/mescroll-uni.vue";
	import vuex from 'vuex'
	export default {
		props: ['bottom', 'top', 'down', 'up', 'noMaxBox'],
		mixins: [MescrollMixin], // 使用mixin
		components: {
			MescrollUni
		},
		computed: {
			...vuex.mapState('config', ['cui', 'sys']),
			...vuex.mapGetters('config', ['getWxappUrl']),
			style() {
				if (this.noMaxBox) {
					return {};
				} else {
					return {
						position: 'relative',
						minWidht: this.sys.windowWidth + 'px',
						minHeight: ((this.sys.windowHeight - this._bottom) - this._top) + 'px'
					};
				}
			},
			_bottom() {
				if (this.bottom) {
					switch (typeof this.bottom) {
						case 'boolean':
							return 50;
							break;
						case 'string':
							return Number(this.bottom);
							break;
						case 'number':
							return this.bottom + '';
							break;
					}
				} else {
					return '0';
				}
			},
			_top() {
				if (this.top) {
					switch (typeof this.top) {
						case 'boolean':
							return this.cui.CustomBar + '';
							break;
						case 'string':
							return Number(this.top);
							break;
						case 'number':
							return this.top;
							break;
					}
				} else {
					return '0';
				}
			},
			_downOption() {
				if (this.down) {
					return { ...this.default.downOption,
						...this.down
					};
				} else {
					return this.default.downOption;
				}
			},
			_upOption() {
				if (this.up) {
					return { ...this.default.upOption,
						...this.up
					};
				} else {
					return this.default.upOption;
				}
			}
		},
		data() {
			return {
				// 列表数据
				dataList: [],
				default: {
					upOption: {
						empty: {
							use: true,
							icon: null,
							// 	btnText: '按钮文本',
							// 	tip: "提示文本",
						}
					},
					downOption: {}
				},
				unload: false
			}
		},
		created() {
			this.default.upOption.empty.icon = this.getWxappUrl('/cart_empty/no.png');
		},
		mounted() {
			uni.$once('login', () => {
				if (!this.unload) {
					this.mescroll.triggerDownScroll();
				}
			});
		},
		destroyed() {
			this.unload = true;
		},
		methods: {
			downCallback(mescroll) {
				this.$emit('down', mescroll);
			},
			upCallback(mescroll) {
				this.$emit('up', mescroll);
			}
		}
	}
</script>

<style>
</style>
