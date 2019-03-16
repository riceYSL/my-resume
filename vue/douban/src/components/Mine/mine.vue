<template>
  <div>
	  <Head>
		  <ul class="head">
			  <li></li>
			  <li class="center">我们</li>
			  <li class="right">
				  <img src="./img/ic_settings.png" alt="">
			  </li>
		  </ul>	
		  </Head>
	  <ul class="manage">
		  <li>
			  <img src="./img/1.png" alt="">
			  <p>密码管理</p>
		  </li>
		  <li>
			  <img src="./img/2.png" alt="">
			  <p>银行卡管理</p>
		  </li>
		
	  </ul>
	  <ul class="save">
		  <li>
				  <p>
					  <img class="img" src="./img/3.png" alt="">
					  <span>风险承受能力评估</span>
				  </p>	  
				  <img src="./img/4.png" alt="">
		  </li>
		   <li>
				  <p>
					  <img class="img" src="./img/5.png" alt="">
					  <span>安全保障</span>
				  </p>	  
				  <img src="./img/4.png" alt="">
		  </li>
	  </ul>
	   <ul class="save">
		  <li>
				  <p>
					  <img class="img" src="./img/6.png" alt="">
					  <span>我的关注</span>
				  </p>	  
				  <img src="./img/4.png" alt="">
		  </li>
	   </ul>
	   <ul class="save">
		  <li>
				  <p>
					  <img class="img" src="./img/7.png" alt="">
					  <span>帮助中心</span>
				  </p>	  
				  <img src="./img/4.png" alt="">
		  </li>
		  <li>
				  <p>
					  <img class="img" src="./img/6.png" alt="">
					  <span>关于我们</span>
				  </p>	  
				  <img src="./img/4.png" alt="">
		  </li>
		  <li>
				  <p>
					  <img class="img" src="./img/8.png" alt="">
					  <span>检查更新</span>
				  </p>	  
				  <img src="./img/4.png" alt="">
		  </li>
		  <li>
				  <p>
					  <img class="img" src="./img/9.png" alt="">
					  <span>联系客服</span>
				  </p>	  
				  <img src="./img/4.png" alt="">
		  </li>
	   </ul>
	
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

.manage{
	width: 100%;
	height: 0.8rem;
	display: flex;
	justify-content: space-around;
	align-items: center;
	border-bottom: 0.01rem solid #ddd;
	li{
		text-align: center;
		img{
			width: 0.33rem;			
		}		
		p{		
			font-size: 0.12rem;
		}
	}
}
.save{
	margin-top: 0.1rem;
	li{
		padding: 0 0.2rem;
		display: flex;
		justify-content: space-between;
		align-items: center;
		height: 0.45rem;
		border-bottom: 0.01rem solid #ddd;
			img{
				width: 0.15rem;
				margin-right: 0.1rem;
			}
			p{
				display: flex;		
		        align-items: center;
				font-size: 0.12rem;
				.img{
			         width:0.25rem ;
			}
		}
	}
}
</style>
