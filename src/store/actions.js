import * as types from './mutation-types'
import {saveUser} from 'common/js/cache'

export const setUserInfo = function ({commit}, user) {
  saveUser(user)
  commit(types.SET_USERINFO, user)
}
