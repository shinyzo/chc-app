import storage from 'good-storage'

const USER_KEY = '__user__'

export function saveUser(user) {
  storage.set(USER_KEY, user)
  return user
}

export function loadUserInfo() {
  return storage.get(USER_KEY, {})
}
