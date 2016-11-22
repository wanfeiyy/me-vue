/**
 * Created by wy on 2016/11/21.
 */
import * as types from '../mutation-types'

const state = {
    lyric : [],
    picUrl: '',
}

const mutations = {
    [types.LYRIC] (state,data) {
        state.lyric = data;
    },
    [types.PICURL] (state,data) {
        state.picUrl = data;
    },

}

export default {
    state,
    mutations
}