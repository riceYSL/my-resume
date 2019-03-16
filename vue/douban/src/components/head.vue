<template>
  <div class="headwrap">
	<slot></slot>
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
.headwrap{
	width: 100%;
	height: 0.45rem;
	border-bottom:0.01rem solid #ccc;
}
.head{
	background:#f7f7f7;
	width: 100%;
	height: 0.45rem;
	display: flex;
	// justify-content: space-between;
	align-items: center;
	font-size: 0.18rem;
	li{
		flex: 1;
		img{
		width: 0.27rem;
		margin-right:0.1rem;
		}
	}
	.center{
		text-align:center;
	}
	.right{
		text-align: right;
	
	}
	
}
</style>
