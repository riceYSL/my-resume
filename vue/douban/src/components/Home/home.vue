<template>
  <div>
    <Head>
      <div id="head">
        <input type="text" placeholder="影音 图书 唱片 小组等">
        <img src="./img/ic_chat_white.png">
      </div>
    </Head>
    <Lb>
      <div class="swiper-slide">
        <img src="./img/01.jpg" >
      </div>
      <div class="swiper-slide">
        <img src="./img/02.jpg">
      </div>
      <div class="swiper-slide">
        <img src="./img/03.jpg">
      </div>
    </Lb>
    <ul class="list">
      <li v-for="it in arr" :key="it">
        <div class="txt">
             <p>{{ it.title }}</p>
             <span>{{ it.target.desc }}</span>
             <div>{{ it.target.author.name }}</div>
        </div>
        <div class="img">
          <img :src="it.target.cover_url" alt="">
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import Head from "../head";
import Lb from "../lb";
export default {
  name: "",

  data() {
    return {
      arr:[]
    };
  },
  components: {
    Head,
    Lb
  },
  mounted(){
    this.$ajax.get('../../../static/homeData.json')
    .then((response)=>{
    this.arr=response.data.recommend_feeds;
    console.log(this.arr)
      }).catch((response)=>{
    console.log(response);
    })
  },
  methods: {}
};
</script>

<style lang='less'  scoped>
#head {
  background: #48bd5a;
  width: 100%;
  height: 0.45rem;
  padding: 0 0.1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  input {
    overflow: hidden;
    width: 2.7rem;
    height: 0.3rem;
    border: none;
    border-radius: 0.05rem;
    padding: 0 0.45rem;
    background-image: url("./img/ic_group_search_small.png"),
      url("./img/ic_scan_gray.png");
    background-size: 0.2rem;
    background-position: 0.1rem center, 2.4rem center;
    background-repeat: no-repeat, no-repeat;
  }
  img {
    width: 0.23rem;
  }
}
.list{
  
  li{
    padding: 0.2rem 0.15rem 0.3rem;
    display: flex;
    justify-content: space-between;
    border-bottom: 0.01rem solid #ccc;
    .img{
      width: 1rem;
      height: 1rem;
      background: #ccc;
    }
    .txt{
      width: 1.9rem;
      padding: 0 0.05rem;
      p{
        font-size: 0.14rem;
        color:#000;
        margin-bottom: 0.1rem;
      }
      span{
        font-size:0.12rem ;
        color:#999;
      }
      div{
        margin-top: 0.1rem;
        color:#ccc;
      }
    }
  }
}
</style>
