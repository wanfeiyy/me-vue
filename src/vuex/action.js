/**
 * Created by wy on 2016/10/23.
 */
import * as types from './mutation-types'
function makeAction(type) {
    return({ dispatch }, ...args) => dispatch(type, ...args);
}
export const initStore = makeAction([types.INIT_STORE]);
export const themes = makeAction([types.THEMES]);
export const showLogo = makeAction([types.SHOW_LOGO]);
export const nowDay = makeAction([types.NOW_DAY]);
export const readyState = makeAction([types.READY_STATE]);
export const moreButtonState = makeAction([types.MORE_BUTTON_STATE]);
export const beforeStory = makeAction([types.BEFORE_STORY]);
export const beforeDate = makeAction([types.BEFORE_DATE]);
export const setArticleId = makeAction([types.ARTICLE_ID]);
export const setArticleReady= makeAction([types.ARTICLE_READY]);
export const setCommentId= makeAction([types.COMMENT_ID]);
export const setCommentReady =  makeAction([types.COMMENT_READY]);
export const setEditors = makeAction([types.EDITORS]);
export const setLyric = makeAction([types.LYRIC]);
export const setPicUrl = makeAction([types.PICURL]);
