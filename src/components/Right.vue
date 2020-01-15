<template>
	<div>
		<div v-if="kk==1">
			<NavsList :navId="1"></NavsList>
		</div>
		<div v-else-if="kk==2">
	`		<NavsList :navId="2"></NavsList>
		</div>
		<div v-else-if="kk==3">
			<NavsList :navId="3"></NavsList>
		</div>
		<div v-else-if="kk==4">
			<NavsList :navId="4"></NavsList>
		</div>
		<div v-else>
			<NavsList :navId="0"></NavsList>
		</div>
	</div>
</template>

<script>
	import Msg from './msg.js'
	import NavsList from './navsList.vue'
	export default{
		data(){
			return {
				kk:0
			}
		},
		mounted:function(){
			var _this = this
			Msg.$on('val',function(m){
				_this.kk = m
			})
		},
		components:{
			NavsList
		}
	}
</script>

<style>
</style>
