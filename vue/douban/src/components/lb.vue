<template>
  <div>
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <slot></slot>
      </div>
      <!-- <div class="swiper-pagination"></div> -->
    </div>
  </div>
</template>

<script>
import "../assets/js/swiper/css/swiper.css";
import "../assets/js/swiper/js/swiper.js";
export default {
  name: "",

  data() {
    return {};
  },
   mounted() {
    var mySwiper = new Swiper(".swiper-container", {
      autoplay: 2000, //可选选项，自动滑动
      loop:true,
    });
  //    var mySwiper = new Swiper('.swiper-container', {
  //           autoplay: 1000,//可选选项，自动滑动
  //           // effect : 'cube',
  //           coverflowEffect: {
  //           rotate: 30,
  //           stretch: 10,
  //           depth: 60,
  //           modifier: 2,
  //           slideShadows : true
  //       },
  //       loop:true,
  //       pagination: {
  //       el: '.swiper-pagination',
  // },
  //   })
  },

  methods: {}
};
</script>

<style lang='less'  scoped>
</style>
