<template>
	<div name="show">
		<ul class="navsList">
			<li v-for="navs in list">
				<img v-bind:src="navs.icon">
				<p>{{navs.name}}</p>
			</li>
		</ul>
	</div>
</template>

<script type="text/javascript">
	export default {
		name: "show",
		data() {
			var _this = this;
			var url = "";
			if(_this.navId==1){
				url = "json/qd.json"
			} else if(_this.navId==2){
				url = "json/sj.json"
			} else if(_this.navId==3){
				url = "json/hd.json"
			} else if(_this.navId==4){
				url = "json/sjk.json"
			} else {
				url = "json/qd.json"
			}
			this.$http.get(url).then(function(res) {
				_this.list = res.data;
			})
			return {
				list: []
			}
		},
		props:{
			navId:Number
		},
		watch:{
			navId(){
				var _this = this;
				var url = "";
				if(_this.navId==1){
					url = "json/qd.json"
				} else if(_this.navId==2){
					url = "json/sj.json"
				} else if(_this.navId==3){
					url = "json/hd.json"
				} else if(_this.navId==4){
					url = "json/sjk.json"
				} else {
					url = "json/qd.json"
				}
				this.$http.get(url).then(function(res) {
					_this.list = res.data;
				})
				return {
					list: []
				}
			}
		}
	}
</script>

<style>
	.navsList li{
		width: 100px;
		height: 50px;
		list-style: none;
		float: left;
		margin-bottom: 10px;
		color: #FF0000;
	}
</style>
