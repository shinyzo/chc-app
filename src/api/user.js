import jsonp from 'common/js/jsonp'
import {api, commonParams, options} from './config'

export function login(params) {
  const url = api.dev.login
  const data = Object.assign({}, commonParams, params)
  return jsonp(url, data, options)
}
