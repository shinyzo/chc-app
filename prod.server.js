var express = require('express')
var compression = require('compression')
var config = require('./config/index')

var port = process.env.PORT || config.build.port

var app = express()

var appData = require('./data.json')
var navs = appData.navs
var doctors = appData.doctors
var banners = appData.banners

var apiRoutes = express.Router()
apiRoutes.get('/nav/list', function (req, res) {
  res.json({
    code: '0',
    msg: '成功',
    data: navs
  })
})
apiRoutes.get('/doctor/list', function (req, res) {
  res.json({
    code: '0',
    msg: '成功',
    data: doctors
  })
})
apiRoutes.get('/banner/list', function (req, res) {
  res.json({
    code: '0',
    msg: '成功',
    data: banners
  })
})
app.use('/api', apiRoutes)

app.use(compression())

app.use(express.static('./dist'))

module.exports = app.listen(port, function (err) {
  if (err) {
    console.log(err)
    return
  }
  console.log('Listening at http://localhost:' + port + '\n')
})
