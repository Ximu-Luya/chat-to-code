import Router from 'express'
const router = Router()
import { chat } from './chat.js'
import dayjs from 'dayjs'

/**
 * 聊天接口
 */
router.post('/chat', async function (req, res) {
  const message = req.body.message
  // if (!global.messageLog) {
  //   global.messageLog = [
  //     { "role": "system", "content": "你是一代码生成AI" },
  //     { "role": "user", "content": "你好" },
  //     { "role": "gpt", "content": "你好，我是一个代码生成助手" },
  //   ]
  // }

  try {
    console.log('└ 请求中')
    // let messageLog = global.messageLog.concat([{"role": "user", "content": message}])
    
    const response = await chat(message.text, {
      conversationId: message.conversationId,
      parentMessageId: message.id
    })
    console.log('└ OpenAI接口响应成功')

    return res.json({ code: 0, data: response, time: dayjs().format("YYYY-MM-DD HH:MM:ss") })
  } catch (err) {
    console.log('└ 请求错误')
    console.error(err)
    return res.json({ code: 99, message: '遇到不知道的错误了喵╥﹏╥...' })
  }
})

// 其他请求路径兜底
router.all('/*', ({ res }) => {
  console.log('└ 请求路径有误')
  res.status(404).send('请求路径有误')
})

export default router
