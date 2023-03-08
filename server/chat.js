import 'isomorphic-fetch'
import { ChatGPTAPI, ChatGPTUnofficialProxyAPI } from 'chatgpt'

function selectApi() {
  // More Info: https://github.com/transitive-bullshit/chatgpt-api
  
  if (global.config.OPENAI_API_KEY) {
    const options = {
      apiKey: global.config.OPENAI_API_KEY,
      debug: false,
    }

    return new ChatGPTAPI({ ...options })
  }
  else if (global.config.OPENAI_ACCESS_TOKEN){
    const options = {
      accessToken: global.config.OPENAI_ACCESS_TOKEN,
      debug: false,
    }

    return new ChatGPTUnofficialProxyAPI({ ...options })
  }
  else {
    throw "没有有效API KEY"
  }
}

export async function chat( message, lastContext) {
  if (!message) {
    throw "消息为空"
  }
  const api = selectApi()

  try {
    let options = { timeoutMs: 30 * 1000 }

    if (lastContext) {
      options = { ...lastContext }
    }

    const response = await api.sendMessage(message, { ...options })

    return response
  }
  catch (error) {
    throw error.message
  }
}