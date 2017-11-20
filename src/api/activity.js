import Vue from 'vue'
import jsonp from 'common/js/jsonp'
import {options, api, commonParams} from './config'

export function getActivityList(params) {
  const data = Object.assign({}, commonParams, params)
  const url = api.native.activity
  return Vue.http.get(url, data, options)
}

export function getNavListJp(reqdata) {
  const params = Object.assign({}, commonParams, reqdata)
  const url = api.native.activity
  return jsonp(url, params, options)
}
