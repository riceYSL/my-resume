<template>
  <div>
	  <Head>
		  <ul class="head">
			  <li></li>
			  <li class="center">书影音</li>
			  <li class="right">
				  <img src="./img/ic_actionbar_search_icon.png" alt="">
				  <img src="./img/ic_chat_green.png" alt="">
			  </li>
		  </ul>	
	  </Head>
		<ul class="nav">
			<li><router-link to="/audio/movie">电影</router-link></li>
			<li><router-link to="/audio/read">读书</router-link></li>
			<li><router-link to="/audio/tv">电视</router-link></li>
			<li><router-link to="/audio/city">同城</router-link></li>
			<li><router-link to="/audio/music">音乐</router-link></li>			
		</ul>
		<router-view></router-view>
  </div>
</template>

<script>
import Head from '../head'
export default {
  name: '',

  data () {
	return {
	}
  },
components:{
	  Head
  },
  methods: {}
}
</script>

<style lang='less'  scoped>
.nav{
	display:flex;
	height: 0.3rem;
	li{
		height: 100%;
		flex: 1;
		text-align: center;
		line-height: 0.3rem;
	
		a{
				width: 100%;
				height: 100%;
				display: block;
					border-bottom: 0.01rem solid #ccc;
			}
		.router-link-exact-active{
			background: rgb(7,214,20);
			color:#fff;
				border-bottom: 0.01rem solid rgb(7,214,20);
		}
	}
}
</style>
