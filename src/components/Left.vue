<template>
	<div>
		<div class="title">首页</div>
		<ul class="menu">
			<li @click="menu1">前端</li>
			<li @click="menu2">设计</li>
			<li @click="menu3">后端</li>
			<li @click="menu4">数据库</li>
			<li>社区</li>
			<li>博客</li>
		</ul>
	</div>
</template>

<script type="text/javascript">
	import Msg from './msg.js'
	export default{
		methods:{
			menu1:function(){
				Msg.$emit("val","1");
			},
			menu2:function(){
				Msg.$emit("val","2");
			},
			menu3:function(){
				Msg.$emit("val","3");
			},
			menu4:function(){
				Msg.$emit("val","4");
			}
		}
	}
</script>

<style>
	.title{
		width: 100px;
		color: red;
	}
	.menu li{
		list-style: none;
		height: 50px;
		margin-bottom: 2px;
		background-color: white;
		line-height: 50px;
		cursor: pointer;
	}
	
</style>
