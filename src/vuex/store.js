/**
 * Created by wy on 2016/10/23.
 */
import Vue from 'vue';
import Vuex from 'vuex';
import VueResource from 'vue-resource';
import index from './modules/index';
Vue.use(Vuex);
Vue.use(VueResource)

export default new Vuex.Store({
    modules:{
        index
    }
})
