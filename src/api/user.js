import jsonp from 'common/js/jsonp'
import {options, PROJECT_URL} from './config'

export function login(loginName, loginPass, verCode) {
  const url = PROJECT_URL.concat('/api/user/login')
  const data = {
    loginName: loginName,
    loginPass: loginPass
  }

  return jsonp(url, data, options)
}

