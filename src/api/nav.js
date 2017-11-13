import jsonp from 'common/js/jsonp'
import {options, PROJECT_URL} from './config'

/**
 * 获取用户导航列表
 */
export function getNavList() {
  const url = PROJECT_URL.concat('/api/nav/list')

  return jsonp(url, {}, options)
}
