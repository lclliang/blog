import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'


Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/article',
      name:'/article',
      component: resolve => require(['../components/article/Article.vue'], resolve),
      meta: {
        title: '文章详情'
      }
    }
  ]
})
