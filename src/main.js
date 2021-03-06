import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import {replaceImageUrl} from './filters/index'
Vue.use(VueRouter)
Vue.use(VueResource)

const router = new VueRouter({
    hashbang: true,
    history: false,
    saveScrollPosition: true,
    transitionOnLoad: true,
    linkActiveClass: 'nav-active'
})


require('./router')(router)
Vue.filter('fixed', replaceImageUrl)
router.start(App, 'app')