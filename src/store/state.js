import {loadFavorite, loadReserve} from '../common/js/cache'
// 定义对象类型
const state = {
  user: {},
  favoriteList: loadFavorite(),
  reserveList: loadReserve(),
  doctor: {}
}

export default state
