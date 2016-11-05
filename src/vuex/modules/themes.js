/**
 * Created by wy on 2016/11/5.
 */
/**
 * Created by wy on 2016/11/1.
 */
import * as types from '../mutation-types'

const state = {
   editors:[]
}

const mutations = {
    [types.EDITORS] (state,data) {
        state.editors = data;
    },
}

export default {
    state,
    mutations
}