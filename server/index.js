import express from 'express'
const app = express()

// 解决跨域
import cors from 'cors'
app.use(cors())

import "./config-load.js"

// 控制台输出请求信息
app.all(/\/api.*/, function (req, res, next) {
  const { headers, method, url } = req
  console.log(`From ${headers.referer || '未知'} ${method} ${decodeURIComponent(url)}`)
  next()
})

// 引入总路由
import router from './api.js'
app.use('/api', router)
app.use('/', express.static('dist'))

const { port, host } = { port: 8067, host: '127.0.0.1' }
app.listen(port, host, function () {
  console.log('服务器部署部署成功，配置的服务器地址： http://%s:%s', host, port)
})