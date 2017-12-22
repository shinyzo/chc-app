import Vue from 'vue'
import jsonp from 'common/js/jsonp'
import {options, api, commonParams} from './config'

/**
 * 获取用户导航列表
 */
export function getNavList(params) {
  const data = Object.assign({}, commonParams, params)
  const url = api.native.nav
  return Vue.http.get(url, data, options)
}

export function getNavListJp(reqdata) {
  const params = Object.assign({}, commonParams, reqdata)
  const url = api.native.nav
  return jsonp(url, params, options)
}
