/**
 * Created by wy on 2016/10/23.
 */
import * as types from './mutation-types'
function makeAction(type) {
    return({ dispatch }, ...args) => dispatch(type, ...args);
}
export const initStore = makeAction([types.INIT_STORE]);
export const showLogo = makeAction([types.SHOW_LOGO]);
export const nowDay = makeAction([types.NOW_DAY]);
export const readyState = makeAction([types.READY_STATE]);
export const moreButtonState = makeAction([types.MORE_BUTTON_STATE]);