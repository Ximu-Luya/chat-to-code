import express from 'express'
const app = express()

// 解决跨域
import cors from 'cors'
app.use(cors())

// 控制台输出请求信息
app.all(/\/api.*/, function (req, res, next) {
  const { headers, method, url } = req
  console.log(`From ${headers.referer || '未知'} ${method} ${decodeURIComponent(url)}`)
  next()
})

// 引入总路由
import router from './chat.js'
app.use('/api', router)
app.use('/', express.static('dist'))

import "./config-load.js"

const { port, host } = { port: 8067, host: '127.0.0.1' }
app.listen(port, host, function () {
  console.log('服务器部署部署成功，配置的服务器地址： http://%s:%s', host, port)
})