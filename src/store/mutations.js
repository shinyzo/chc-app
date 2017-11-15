import * as types from './mutation-types'
// 通过mutations修改state中的对象
const mutations = {
  [types.SET_USERINFO](state, user) {
    state.user = user
  },
  [types.SET_FAVORITE_DOCTORS](state, favoriteList) {
    state.favoriteDoctors = favoriteList
  }
}

export default mutations
