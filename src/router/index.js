import Vue from 'vue'
import Router from 'vue-router'

import { routes } from '../routes'

Vue.use(Router)

const vueRouter = new Router({
  mode: 'history',
  routes: routes,
  scrollBehavior(to, from, savePosition){
    if(savePosition){
      return savePosition
    }
    // Se houver algum hash ir para ele na tela.
    if(to.hash){
      return {
        selector: to.hash
      }
    }
    return {
      x: 0,
      y: 700
    }
  }
})

vueRouter.beforeEach((to, from, next) => {
  console.log('global beforeEach')
  next()
})

export default vueRouter


