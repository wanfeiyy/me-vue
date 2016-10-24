/**
 * Created by wy on 2016/10/23.
 */
import * as types from '../mutation-types'

const state = {
    todayStories: [],
    showLogo: true,
    topStories: [],
    readyState: false,
    nowDay: '',
    moreButtonState: true
}

const mutations = {
    // 初始化当日数据
    // @data array
    [types.INIT_STORE] (state,data) {
        state.todayStories = data.body.stories;
        state.topStories = data.body.top_stories;
    },
    // 初始化当日loading state
    // @data  true | false
    [types.SHOW_LOGO] (state,data) {
        state.showLogo = data;
    },

    // 首页数据获取完毕state
    // @data true | false
    [types.READY_STATE] (state,data) {
        state.readyState = data;
    },

    // 保存当日日期 ，如2016-10-24
    [types.NOW_DAY] (state,data) {
        const date = new Date();
        state.nowDay = date.getFullYear()+'-'+(parseInt(date.getMonth())+1)+'-'+date.getDate()
    },

    // 保存次元日期button state
    // @data true |false
    [types.MORE_BUTTON_STATE] (state,data) {
       state.moreButtonState = data;
    }


}

export default {
    state,
    mutations
}