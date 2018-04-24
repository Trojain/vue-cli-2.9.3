import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import xia from '@/components/xia'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',//设置默认指向的路径
      component: HelloWorld,
      name:'主页'
    },
    {
      path: '/HelloWorld',//指向HelloWorld组件
      component: HelloWorld,
      name:'HelloWorld'
    },
    {
      path: '/xia',//指向xia组件
      component: xia,
      name:'xia'
    },
  ]
})
