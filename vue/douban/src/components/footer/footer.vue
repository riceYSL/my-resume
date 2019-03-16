<template>
  <div class="footwrap">
	<ul>
		<li>
			<router-link to="/home">
			  <img src="./img/ic_tab_home_normal.png" alt="" class="normal">
			  <img src="./img/ic_tab_home_active.png" alt="" class="active">
			  <p>首页</p>
			</router-link>
		</li>
		<li>
			<router-link to="/audio">
			  <img src="./img/ic_tab_subject_normal.png" alt="" class="normal">
			  <img src="./img/ic_tab_subject_active.png" alt="" class="active">
			  <p>书影音</p>
			</router-link>
		</li>
		<li>
			<router-link to="/broad">
			  <img src="./img/ic_tab_status_normal.png" alt="" class="normal">
			  <img src="./img/ic_tab_status_active.png" alt="" class="active">
			  <p>广播</p>
			</router-link>
		</li>
		<li>
			<router-link to="/group">
			  <img src="./img/ic_tab_group_normal.png" alt="" class="normal">
			  <img src="./img/ic_tab_group_active.png" alt="" class="active">
			  <p>小组</p>
			</router-link>
		</li>
		<li>
			<router-link to="/mine">
			  <img src="./img/ic_tab_profile_normal.png" alt="" class="normal">
			  <img src="./img/ic_tab_profile_active.png" alt="" class="active">
			  <p>我的</p>
			</router-link>
		</li>
	</ul>
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
.footwrap{
	background: white;
	width: 100%;
	height: 0.49rem;
	position: fixed;
	bottom: 0;
	border-top: 0.01rem solid #ccc;
	ul{ 
		width: 100%;
		display: flex;
		flex-direction: row;	
		li{
			flex:1;
			text-align: center;
			a{
				color:#666;
				display: block;
			
			    img{
					width: 0.3rem;
					margin: 0 auto;
				}
				.normal{
					display: block;
					}
				.active{
					display: none;
				}
			    p{
			    	font-size: 0.12rem;
			    }
			}
			.router-link-exact-active{
				color: #42bd56;
				.normal{
					display: none;
					}
				.active{
					display: block;
				}
			}
		
		}
	}
}

</style>
