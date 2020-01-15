<template>
	<div class="main">
		<div class="left">
			<Left></Left>
		</div>
		<div class="right">
			<div class="top">
			</div>
			<div class="buttom">
				<Right></Right>
			</div>
		</div>
	</div>
</template>

<script>
	import Left from '../components/Left.vue'
	import Right from '../components/Right.vue'
	export default {
		components:{
			Left,
			Right
		}
	}
</script>

<style>
	* {
		padding: 0;
		margin: 0;
	}

	.left {
		width: 100px;
		float: left;
		margin-right: 10px;
	}

	.right {
		width: 100px;
		float: left;
		margin-left: 10px;
	}
	.main{
		width:1200px;
		margin: 20px auto;
	}
	.top img {
		height: 200px;
		width: 1000px;
	}
	.left,.right {
		background-color: #F5F5F5;
	}
</style>
