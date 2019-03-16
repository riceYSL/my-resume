<template>
  <div>
	<div class="box">
		<p class="txt">正在上映的电影-北京</p>
		<ul>
			<li>
				<img src="./img/图片4_03.png" alt="">
				<p>超时空同居</p>
				<span>评分：7.2</span>
			</li>
			<li>
				<img src="./img/图片4_03.png" alt="">
				<p>超时空同居</p>
				<span>评分：7.2</span>
			</li>
			<li>
				<img src="./img/图片4_03.png" alt="">
				<p>超时空同居</p>
				<span>评分：7.2</span>
			</li>
		</ul>
	</div>
	<div class="box">
		<p class="txt">即将上映的电影</p>
		<ul>
			<li>
				<img src="./img/图片4_03.png" alt="">
				<p>超时空同居</p>
				<span>评分：7.2</span>
			</li>
			<li>
				<img src="./img/图片4_03.png" alt="">
				<p>超时空同居</p>
				<span>评分：7.2</span>
			</li>
			<li>
				<img src="./img/图片4_03.png" alt="">
				<p>超时空同居</p>
				<span>评分：7.2</span>
			</li>
		</ul>
	</div>
  </div>
</template>

<script>
export default {
  name: '',

  data () {
	return {
	}
  },

  methods: {}
}
</script>

<style lang='less'  scoped>
.box{
	.txt{
		 font-size: 0.15rem;
		 padding: 0.15rem 0.1rem;
	}
    ul{
		width: 100%;
		display: flex;
		li{
			width: 33%;
			margin-left: 3%;
			text-align: center;
			
			img{
				width: 100%;
				
			}
			p{
				font-size: 0.13rem;
			}
			span{
				font-size: 0.12rem;
				color:#ccc;
			}
		}
	}
}
</style>
