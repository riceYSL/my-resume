<template>
  <div>
    <Head>
      <ul class="head">
        <li></li>
        <li class="center">小组</li>
        <li class="right">
          <img src="./img/ic_actionbar_search_icon.png" alt>
          <img src="./img/ic_chat_green.png" alt>
        </li>
      </ul>
    </Head>
    <div class="box" v-for="(it,index) in arr" :key="index">
      <p class="txt">{{ it.title }}</p>
      <ul v-for="(item,index) in it.group_list" :key="index">
        <li>
          <div class="title">
            <div class="top">
              <div class="img">
                <!-- <img :src="item.img_url" alt=""> -->
              </div>
              <span class="name">{{ item.group_name }}</span>
            </div>

            <span class="menber">{{ item.group_member }}</span>
          </div>
          <p>{{ item.topic_title }}</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import Head from "../head";
export default {
  name: "",

  data() {
    return {
      arr: []
    };
  },
  components: {
    Head
  },
  mounted() {
    this.$ajax
      .get("../../../static/groupData.json")
      .then(response => {
        this.arr = response.data.group;
        console.log(this.arr);
      })
      .catch(response => {
        console.log(response);
      });
  },
  methods: {}
};
</script>

<style lang='less'  scoped>
.box {
  padding: 0 0.2rem;
  .txt {
		font-size: 0.18rem;
		margin-top: 0.2rem;
  }
  ul {
    li {
			border-bottom:0.01rem solid #ccc;
			padding: 0 0 0.15rem; 
			p{				
				width: 99%;
				overflow: hidden;
				font-size: 0.12rem;
				text-overflow: ellipsis;
				white-space: nowrap;
				color:#999;
			}
      .title {
        display: flex;
        justify-content: space-between;
        align-items: center;
        .top {
					margin: 0.15rem 0;
					display: flex;
					align-items: center;
          .img {
            width: 0.4rem;
            height: 0.4rem;
            background: #ccc;
            margin-right: 0.15rem;
          }
          .name {
            font-size: 0.14rem;
          }
        }

        .menber {
          font-size: 0.12rem;
          color: #ccc;
        }
      }
    }
  }
}
</style>
