import * as types from './mutation-types'
import {saveUser, saveFavorite} from 'common/js/cache'

export const setUserInfo = function ({commit}, user) {
  saveUser(user)
  commit(types.SET_USERINFO, user)
}

export const setFavoriteList = function ({commit}, doctor) {
  commit(types.SET_FAVORITE_DOCTORS, saveFavorite(doctor))
}
