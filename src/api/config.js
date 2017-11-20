// 服务url
export const PROJECT_URL = 'http://localhost:80/chcservice'
/**
 * 接口列表
 * @type {{native: {nav: string, doctor: string}, dev: {nav: string, doctor: string}}}
 */
export const api = {
  native: {
    login: '/api/user/login',
    nav: '/api/nav/list',
    doctor: '/api/doctor/list',
    banner: '/api/banner/list',
    activity: 'api/activity/list'
  },
  dev: {
    login: `${PROJECT_URL}/api/user/login`,
    nav: `${PROJECT_URL}/api/nav/list`,
    doctor: `${PROJECT_URL}/api/nav/list`,
    banner: `${PROJECT_URL}/api/banner/list`,
    activity: `${PROJECT_URL}/api/activity/list`
  }
}
/**
 * 公共参数配置
 * 版本号，
 * 字符编码，
 * app类型，
 * appsource 平台使用者 1:个人
 * @type {{version: string, charset: string, apptype: string, appid: string, signdata: string}}
 */
export const commonParams = {
  version: '1.0.0',
  charset: 'utf-8',
  apptype: 'h5',
  appsource: '1',
  format: 'jsonp'
}
/**
 * 返回码
 * @type {{SUCCESS: string, LOGIN_TIME_OUT: string}}
 */
export const errCode = {
  SUCCESS: '0',
  LOGIN_TIME_OUT: '777'
}

export const options = {
  param: 'jsonpCallback',
  prefix: 'jp'
}
