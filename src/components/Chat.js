import "./Chat.css"
import axois from "../utils/request.js"
import React, { useState } from 'react'
import { Input, Button } from 'antd'
import Message from "./Message.js"
const { TextArea } = Input

const Chat = () => {
  const [messages, setMessages] = useState([
    { role: '你', text: '你好' },
    { role: 'GPT', text: '你好，我是AI' }
  ])
  
  function chat(){
    axois.post('/chat', {
      message: {
        text: '你是谁'
      }
    })
  }

  function addMessage(messages) {
    console.log(messages)
    messages.push({ role: '你', text: '你好1' })
    debugger
    setMessages(messages)
  }
  debugger
  console.log(messages)
  
  const messageList = messages.map((item, index) => 
    <Message
      key={index}
      role={item.role}
      text={item.text}
    />
  )
  
  return (
    <div className="chat-area">
      <main>
        {messageList}
      </main>
      <footer>
        <Button onClick={() => addMessage(messages)}>重新生成代码</Button>
        <div className="question-area">
          <TextArea rows={1} className="input-area" />
          <div className="send-btn" onClick={chat}>发送</div>
        </div>
      </footer>
    </div>
  )
}

export default Chat