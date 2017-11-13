import jsonp from 'common/js/jsonp'
import {options, PROJECT_URL} from './config'

const debug = process.env.NODE_ENV !== 'production'

const doctors = {
  code: '0',
  msg: '成功',
  data: [
    {
      doctorId: 'A00001',
      doctorName: '林医生',
      avatar: 'default.png',
      workHospital: '海南省人民医院',
      birthday: '1987-**-**',
      workAge: '4',
      sex: '男',
      level: '主任'
    },
    {
      doctorId: 'A00001',
      doctorName: '林医生',
      avatar: 'default.png',
      workHospital: '海南省人民医院',
      birthday: '1987-**-**',
      workAge: '4',
      sex: '男',
      level: '主任'
    },
    {
      doctorId: 'A00001',
      doctorName: '林医生',
      avatar: 'default.png',
      workHospital: '海南省人民医院',
      birthday: '1987-**-**',
      workAge: '4',
      sex: '男',
      level: '主任'
    },
    {
      doctorId: 'A00001',
      doctorName: '林医生',
      avatar: 'default.png',
      workHospital: '海南省人民医院',
      birthday: '1987-**-**',
      workAge: '4',
      sex: '男',
      level: '主任'
    },
    {
      doctorId: 'A00001',
      doctorName: '林医生',
      avatar: 'default.png',
      workHospital: '海南省人民医院',
      birthday: '1987-**-**',
      workAge: '4',
      sex: '男',
      level: '主任'
    },
    {
      doctorId: 'A00001',
      doctorName: '林医生',
      avatar: 'default.png',
      workHospital: '海南省人民医院',
      birthday: '1987-**-**',
      workAge: '4',
      sex: '男',
      level: '主任'
    }
  ]
}

export function getDoctorList() {
  if (debug) {
    if (doctors.code === '0') {
      return doctors.data
    }
  }
  const url = PROJECT_URL.concat('/api/doctor/list')

  return jsonp(url, {}, options)
}
