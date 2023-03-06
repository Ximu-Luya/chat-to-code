import { ChatGPTAPI, ChatGPTUnofficialProxyAPI } from 'chatgpt'

let api, apiModel

(async () => {
  // More Info: https://github.com/transitive-bullshit/chatgpt-api

  if (global.conifg.OPENAI_API_KEY) {
    const options = {
      apiKey: global.conifg.OPENAI_API_KEY,
      debug: false,
    }

    api = new ChatGPTAPI({ ...options })
    apiModel = 'ChatGPTAPI'
  }
  else if (global.conifg.OPENAI_ACCESS_TOKEN){
    const options = {
      accessToken: global.conifg.OPENAI_ACCESS_TOKEN,
      debug: false,
    }

    api = new ChatGPTUnofficialProxyAPI({ ...options })
    apiModel = 'ChatGPTUnofficialProxyAPI'
  }
  else {
    throw "没有有效API KEY"
  }
})()