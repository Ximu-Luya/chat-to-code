import axios from 'axios'

const instance = axios.create({
  baseURL: 'http://localhost:8067/api'
})

// 定义axios请求拦截器
instance.interceptors.request.use(
  config => {
    // 在发送数据之前做些什么
    // console.log('请求url为：' + config.url, config)
    return config
  },
  err => {
    // 对响应错误做些什么
    console.error('请求失败')
    return Promise.reject(err)
  }
)

// 定义axios响应拦截器
instance.interceptors.response.use(
  response => {
    // 在收到数据之前做些什么
    const { data } = response

    // 控制台输出接收到的响应全部数据
    // console.log('响应url为：' + config.url, response)
    // 若返回的事件代码不为200（即不为数据响应而是状态响应）为用户提示后端传来的信息
    switch (data.code) {
      case 0:
        console.success(data.message)
        break
      default:
        console.error(data.message)
    }
    // 替换响应数据，将具体数据替换到响应的data中;
    return data.data
  },
  err => {
    // 对响应错误做些什么

    // 控制台输出错误信息
    // console.log(err)

    if(err.code === "ERR_NETWORK") {
      console.error('ERR_NETWORK 服务器连接失败喵QAQ')
    }
    if (err.response?.status === 404) {
      console.error('404 链接失效喵QAQ')
    }
    return Promise.reject(err)
  }
)

export default instance