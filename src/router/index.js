import Vue from 'vue'
import VueRouter from 'vue-router'
import Vuex from 'vuex'
import First from '../views/First.vue'

Vue.use(VueRouter)
Vue.use(Vuex)

const store = new Vuex.Store({
	state:{
		count:0
	}
})

const routes = [
  {
    path: '/',
    component: First
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  store
})

export default router
