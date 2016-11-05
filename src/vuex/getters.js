/**
 * Created by wy on 2016/10/23.
 */
// 获取当日数据
export const getTodayStories = (state) => {
    return state.index.todayStories;
}

export const getThemes = (state) => {
    return state.index.themes;
}

// 获取loading的state
export const getShowLogo = (state)=> {
    return state.index.showLogo;
}
// 获取当日数据的state
export const getReadyState = (state)=> {
    return state.index.readyState;
}

// 获取当日热门数据
export const getTopStories = (state) => {
    return state.index.topStories;
}
// 获取当日日期
export const getNowDay = (state) => {
    return state.index.nowDay;
}

// 获取次元日期button state
export const getMoreButtonState = (state) => {
    return state.index.moreButtonState;
}

//获取当日以前数据
export const getBeforeStory = (state) => {
    return state.index.beforeStory;
}

//获取当前日期
export const getBeforeDate = (state) => {
    return state.index.beforeDate;
}

export const getArticleId = (state) => {
    return state.article.articleId;
}


export const getCommentReady = (state) => {
    return state.comment.commentReady;
}

export const getCommentId = (state) => {
    return state.comment.commentId;
}

export const getEditors = (state) => {
    return state.themes.editors;
}