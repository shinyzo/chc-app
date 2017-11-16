import * as types from './mutation-types'
import {saveUser, saveFavorite, saveReserve, cancelReserve} from 'common/js/cache'

export const setUserInfo = function ({commit}, user) {
  saveUser(user)
  commit(types.SET_USERINFO, user)
}

export const saveFavoriteList = function ({commit}, doctor) {
  commit(types.SET_FAVORITE_DOCTORS, saveFavorite(doctor))
}

export const deleteFavoriteList = function ({commit}, doctor) {
  commit(types.SET_FAVORITE_DOCTORS, saveFavorite(doctor))
}

export const saveReserveList = function ({commit}, doctor) {
  commit(types.SET_RESERVE_DOCTORS, saveReserve(doctor))
}

export const deleteReserveList = function ({commit}, doctor) {
  commit(types.SET_RESERVE_DOCTORS, cancelReserve(doctor))
}
