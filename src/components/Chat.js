import "./Chat.css"
import axois from "../utils/request.js"

const Chat = () => {
  function chat(){
    axois.post('/chat', {
      message: {
        text: '你是谁'
      }
    })
  }
  
  return (
    <div className="chat-area">
      <button onClick={chat}>请求</button>
    </div>
  )
}

export default Chat