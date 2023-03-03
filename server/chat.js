import Router from 'express'
const router = Router()
import { Configuration, OpenAIApi } from "openai"
import dayjs from 'dayjs'
const configuration = new Configuration({
  apiKey: global.config.ApiKey
})
const openai = new OpenAIApi(configuration)

/**
 * 聊天接口
 */
router.get('/chat', async function (req, res) {
  const message = req.query.message
  if (!global.messageLog) {
    global.messageLog = [
      { "role": "system", "content": "你是一聊天AI" },
      { "role": "user", "content": "你好" },
      { "role": "gpt", "content": "你好，我是一个聊天机器人" },
    ]
  }

  try {
    console.log('└ 请求中')
    let messageLog = global.messageLog.concat([{"role": "user", "content": message}])
    
    const response = await openai.createCompletion({
      model: "gpt-3.5-turbo",
      messages: messageLog,
      max_tokens: 4096, 
      stop: null,
      temperature: 0.7
    })
    console.log('└ OpenAI接口响应成功')
    const responseText = response.data.choices[0].message.content
    global.messageLog = messageLog

    return res.json({ code: 0, data: responseText, time: dayjs().format("YYYY-MM-DD HH:MM:ss") })
  } catch (err) {
    console.log('└ 请求错误')
    return res.json({ code: 99, message: '遇到不知道的错误了喵╥﹏╥...' })
  }
})
// 其他请求路径兜底
router.all('/*', ({ res }) => {
  console.log('└ 请求路径有误')
  res.status(404).send('请求路径有误')
})

export default router
