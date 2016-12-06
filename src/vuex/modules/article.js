/**
 * Created by wy on 2016/10/27.
 */
import * as types from '../mutation-types'

const state = {
    articleId : '',
    articleReady: false,
}

const mutations = {
    [types.ARTICLE_ID] (state,data) {
        state.articleId = data;
    },
    [types.ARTICLE_READY] (state,data) {
        state.articleReady = !state.articleReady
    }
}

export default {
    state,
    mutations
}