<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <Footer></Footer>
    <router-view/>
  </div>
</template>

<script>
import './assets/css/reset.css';
import { obj } from './assets/js/utils.js';
import Footer from '../src/components/footer/footer';
export default {
  name: 'App',
  mounted(){
    obj.setRem()
    },
  components:{
    Footer
  }
}
</script>

<style>
/* #app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
</style>
