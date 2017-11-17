import Vue from 'vue'
import {options, api, commonParams} from './config'
/**
 * 获取用户导航列表
 */
export function getBannerList(params) {
  const data = Object.assign({}, commonParams, params)
  const url = api.native.banner
  return Vue.http.get(url, data, options)
}
