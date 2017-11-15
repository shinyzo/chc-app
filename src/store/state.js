import {loadFavorite} from '../common/js/cache'
// 定义对象类型
const state = {
  user: {},
  favoriteDoctors: loadFavorite()
}

export default state
