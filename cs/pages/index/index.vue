<template>
	<view class="content">
	</view>
</template>

<script>
	export default {
		data() {
			return {}
		},
		onLoad() {
			// 以太坊通道
			console.log(window.ethereum)
			if (window.ethereum == undefined) {
				console.log(111);
				uni.showToast({
					title: "请在钱包打开",
					icon: "none"
				})
			} else if (window.ethereum) {
				uni.showToast({
					title: "打开成功",
					icon: "none"
				})
				console.log(222);
				// this.$goBack(3, '/pages/index/index'); //以太坊，正常进入首页
			}
		},
		methods: {},
	}
</script>


<style lang="scss" scoped>

</style>
