import jsonp from 'common/js/jsonp'
import {options, PROJECT_URL} from './config'

const debug = process.env.NODE_ENV !== 'production'

const navs = {
  code: '0',
  msg: '成功',
  data: [
    {
      navId: 'A00001',
      navName: '首页',
      linkUrl: '/index',
      icon: 'icon-shouye',
      sort: '1'
    },
    {
      navId: 'A00002',
      navName: '预约',
      linkUrl: '/doctor',
      icon: 'icon-biaoxing',
      sort: '2'
    },
    {
      navId: 'A00003',
      navName: '订单',
      linkUrl: '/order',
      icon: 'icon-dingdan',
      sort: '3'
    },
    {
      navId: 'A00004',
      navName: '个人中心',
      linkUrl: '/user',
      icon: 'icon-wode',
      sort: '4'
    }]
}

/**
 * 获取用户导航列表
 */
export function getNavList() {
  if (debug) {
    if (navs.code === '0') {
      return navs.data
    }
  }
  const url = PROJECT_URL.concat('/api/nav/list')

  return jsonp(url, {}, options)
}
