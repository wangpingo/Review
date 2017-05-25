import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/home/home.vue'
import Acticle from  '../components/acticle/acticle.vue'
import MyInfo from  '../components/myInfo/myInfo.vue'
import Speak from '../components/speak/speak.vue'
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
        path:'/acticle',
        name:'Acticle',
        component:Acticle
    },
      {
          path:'/myInfo',
          name:'MyInfo',
          component:MyInfo
      },
      {
          path:'/speak',
          name:'Speak',
          component:Speak
      }
  ]
})
