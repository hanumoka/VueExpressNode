import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import IndexPage from '@/components/IndexPage'
import LoginPage from '@/components/LoginPage'

import MovieIndexPage from '@/components/MovieIndexPage'
import MovieShowPage from '@/components/MovieShowPage'


export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'IndexPage',
      component: IndexPage
    },
    {
      path: '/loginPage',
      name: 'LoginPage',
      component: LoginPage
    },
    {
      path: '/movie',
      name: 'MovieIndexPage',
      component: MovieIndexPage
    },
    {
      path: '/movie/:id',
      name: 'MovieShowPage',
      component: MovieShowPage
    }
  ]
})
