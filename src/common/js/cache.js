import storage from 'good-storage'

const USER_KEY = '__user__'
const FAVORITE_KEY = '__favorite__'
const RESERVE_KEY = '__reserve__'

// 无限制
const FAVORITE_MAX_LEN = -1

// 用户信息
export function saveUser(user) {
  storage.set(USER_KEY, user)
  return user
}

export function loadUserInfo() {
  return storage.get(USER_KEY, {})
}

// 保存我的关注
export function saveFavorite(doctor) {
  let favorites = storage.get(FAVORITE_KEY, [])
  toogleInsertArray(favorites, doctor, (item) => {
    return doctor.doctorId === item.doctorId
  }, FAVORITE_MAX_LEN)
  storage.set(FAVORITE_KEY, favorites)
  return favorites
}

export function loadFavorite() {
  return storage.get(FAVORITE_KEY, [])
}
// 我的预约
export function saveReserve(doctor) {
  let reserves = storage.get(RESERVE_KEY, [])
  let index = reserves.findIndex((item) => {
    return item.doctorId === doctor.doctorId
  })
  if (index > -1) {
    return
  }
  reserves.push(doctor)
  storage.set(RESERVE_KEY, reserves)
  return reserves
}

export function loadReserve() {
  return storage.get(RESERVE_KEY, [])
}

export function cancelReserve(doctor) {
  let reserves = storage.get(RESERVE_KEY, [])
  let index = reserves.findIndex((item) => {
    return item.doctorId === doctor.doctorId
  })
  if (index > -1) {
    reserves.splice(index, 1)
  }
  storage.set(RESERVE_KEY, reserves)
  return reserves
}

/**
 * 向数组中插入元素 返回新数组
 * @param arr
 * @param val
 * @param compare
 * @param maxLen
 */
export function insertArray(arr, val, compare, maxLen) {
  const index = arr.findIndex(compare)
  if (index === 0) {
    return
  }
  if (index > 0) {
    arr.splice(index, 1)
  }
  arr.unshift(val)
  if (maxLen === -1) return
  if (maxLen && arr.length > maxLen) {
    arr.pop()
  }
}

/**
 * 不存在插在头部 ，存在删除
 * @param arr
 * @param val
 * @param compare
 * @param maxLen
 */
export function toogleInsertArray(arr, val, compare, maxLen) {
  const index = arr.findIndex(compare)
  if (index > -1) {
    arr.splice(index, 1)
  } else {
    arr.push(val)
  }
  if (maxLen === -1) return
  if (maxLen && arr.length > maxLen) {
    arr.pop()
  }
}

/**
 * 从数组中删除元素 返回新数组
 * @param arr
 * @param compare
 */
export function deleteFromArray(arr, compare) {
  const index = arr.findIndex(compare)
  if (index > -1) {
    arr.splice(index, 1)
  }
}
