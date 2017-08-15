import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Hello2 from '@/components/Hello2'
import User from '@/components/User'
// import Headbar from '@/components/Headbar/'

Vue.use(Router)

export default new Router({
  mode: 'history',
  scrollBehavior: () => ({y: 0}),
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello,
      children: [
        {
          path: '/hello2',
          name: 'Hello2',
          component: Hello2
        },
        {
          path: '/user',
          name: 'User',
          component: User
        }
      ]
    },
    {
      path: '/Hello2',
      name: 'Hello2',
      component: Hello2
    }
  ]
})
