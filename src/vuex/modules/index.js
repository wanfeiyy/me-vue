/**
 * Created by wy on 2016/10/23.
 */
import * as types from '../mutation-types'

const state = {
    todayStories: [],
    showLogo: true,
    topStories:[],
}

const mutations = {
    [types.INIT_STORE] (state,data) {
        state.todayStories = data.body.stories;
        state.topStories = data.body.top_stories;
    },
    [types.SHOW_LOGO] (state,data) {
        state.showLogo = data;
    }


}

export default {
    state,
    mutations
}