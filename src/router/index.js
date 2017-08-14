import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Headbar from '@/components/Headbar'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/Headbar',
      name: 'Headbar',
      component: Headbar
    }
  ]
})
