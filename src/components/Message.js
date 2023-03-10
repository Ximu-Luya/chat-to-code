const Message = ( props ) => {
  
  return (
    <div className="message-item">
      <div className='avatar'>{props.role}</div>
      <div className='message-text'>{props.text}</div>
    </div>
  )
}

export default Message