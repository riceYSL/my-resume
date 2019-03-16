<template>
  <div>
    <Head>
      <ul class="head">
        <li></li>
        <li class="center">广播</li>
        <li class="right">
          <img src="./img/ic_status_search_user.png" alt>
          <img src="./img/ic_chat_green.png" alt>
        </li>
      </ul>
		</Head>
      <div class="login">
        <img src="./img/user_normal.jpg" alt>

        <p>登录发广播</p>
      </div>

      <div class="comment">
        <img src="./img/dou.png" alt>
        <div class="title">
          <p>
            <span>豆瓣</span> 写了日记
          </p>
          <p>2018.5.23 10:39:23</p>
          <div class="txt">
						<p>
							5月24日凌晨3:00~ 6:00豆瓣停机维护
						</p>
						<span>
							因业务发展需要,豆瓣计划于5月24日(星期四)凌晨3:00~ 6:00对服务器进行机房迁移。迁移期间全部豆瓣相关..
						</span>
					</div>
        </div>
      </div>
			<div class="comment">
        <img src="./img/dou.png" alt>
        <div class="title">
          <p>
            <span>豆瓣</span> 写了日记
          </p>
          <p>2018.5.23 10:39:23</p>
          <div class="txt">
						<p>
							北京时间3月28日19点19分,豆瓣首部破百万评分人数电影诞生
						</p>
						<span>
							因业务发展需要,豆瓣计划于5月24日(星期四)凌晨3:00~ 6:00对服务器进行机房迁移。迁移期间全部豆瓣相关..
						</span>
					</div>
        </div>
      </div>
   
  </div>
</template>

<script>
import Head from "../head";
export default {
  name: "",

  data() {
    return {};
  },
  components: {
    Head
  },

  methods: {}
};
</script>

<style lang='less'  scoped>
.login {
  display: flex;
  justify-content: start;
  align-items: center;
  height: 0.6rem;
  width: 100%;
  border-bottom: 0.01rem solid #e8e8e8;
  img {
    width: 0.4rem;
    border-radius: 50%;
    margin-left: 0.18rem;
    margin-right: 0.1rem;
  }

  p {
    color: #b6b6b6;
  }
}
.comment {
  width: 100%;
  padding: 0 0.18rem;
  display: flex;
  justify-content: start;
  align-items: flex-start;
 margin-top: 0.2rem;
  img {
    width: 0.48rem;
    border-radius: 50%;
    margin-right: 0.1rem;
  }
  .title {
		width: 100%;
    p {
			color: #b6b6b6;
			margin-bottom: 0.05rem;
      span {
        color: #494949;
      }
    }
  }
  .txt{
		width: 100%;
		background: #f9f9f9;
		border-radius: 0.05rem;
		margin-top: 0.1rem;
		padding: 0.15rem 0.15rem;
		p{
			font-size: 0.13rem;
			color:#919191;
		}
		span{
			color:#b6b6b6;
			font-size: 0.12rem;
		}
  }
}
</style>
