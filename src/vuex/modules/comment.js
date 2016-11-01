/**
 * Created by wy on 2016/11/1.
 */
import * as types from '../mutation-types'

const state = {
    commentId : '',
    commentReady: false,
}

const mutations = {
    [types.COMMENT_ID] (state,data) {
        state.commentId = data;
    },
    [types.COMMENT_READY] (state,data) {
        state.commentReady = !state.commentReady
    }
}

export default {
    state,
    mutations
}