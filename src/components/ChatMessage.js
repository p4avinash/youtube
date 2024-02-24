import React from "react"

const ChatMessage = ({ name, message, profile }) => {
  return (
    <div>
      <div className='live-chat-message flex p-2 mb-2 bg-white rounded-xl'>
        <img
          src={`${profile}`}
          alt='profile'
          className='rounded-full w-8 h-8 mr-2'
        />
        <div className='message-details'>
          <span className='text-gray-500 mr-2 text-sm font-semibold'>
            {name}
          </span>
          <span className='text-sm'>{message}</span>
        </div>
      </div>
    </div>
  )
}

export default ChatMessage
