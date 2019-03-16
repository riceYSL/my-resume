import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import Home from '../components/Home/home'
import Audio from '../components/audio/audio'
import Group from '../components/Group/group'
import Mine from '../components/Mine/mine'
import Broad from '../components/broadcast/broadcast'
import Movie from '../components/sencond-r/movie'
import Read from '../components/sencond-r/read'
import Tv from '../components/sencond-r/tv'
import City from '../components/sencond-r/city'
import Music from '../components/sencond-r/city'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/audio',
      name: 'Audio',
      component: Audio,
      children:[
        {
          path:'/',
          component:Movie
        },
        {
          path:'movie',
          component:Movie
        },
        {
          path:'read',
          component:Read
        },
        {
          path:'tv',
          component:Tv
        },
        {
          path:'city',
          component:City
        },
        {
          path:'music',
          component:Music
        }
      ]
    },
    {
      path: '/group',
      name: 'Group',
      component: Group
    },
    {
      path: '/mine',
      name: 'Mine',
      component: Mine
    },
    {
      path: '/broad',
      name: 'Broad',
      component: Broad
    },
    

  ]
})
