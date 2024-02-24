import React, { useEffect, useState } from "react"
import ChatMessage from "./ChatMessage"
import { useDispatch, useSelector } from "react-redux"
import { appendMessage } from "../utils/slices/liveChatSlice"
import { COMMENTS_DATA_FROM_YOUTUBE } from "../utils/constant"

const LiveChat = () => {
  const [dummyChatData, setDummyChatData] = useState(
    COMMENTS_DATA_FROM_YOUTUBE.items
  )

  const dispatch = useDispatch()
  const liveMessages = useSelector((store) => store.chat.messages)
  const intervalTime = 2000
  let chatIndex = 0

  const handleComment = (e) => {
    if (e.keyCode === 13) {
      dispatch(
        appendMessage({
          id: Date.now(),
          profile: `https://yt3.ggpht.com/ytc/AIf8zZTkmSqJ86I5ljYqO_6Ej_tvyRKRueCQG0qGNbZVAua_hJqZ3usT9tmx5tJxCDYx=s48-c-k-c0x00ffffff-no-rj`,
          name: "Temp User",
          message: e.target.value,
        })
      )
      e.target.value = ""
    }
  }

  useEffect(() => {
    const interval = setInterval(() => {
      if (chatIndex >= dummyChatData.length) {
        chatIndex = 0
      } else {
        chatIndex += 1
      }

      const { authorProfileImageUrl, textOriginal, authorDisplayName } =
        dummyChatData[chatIndex].snippet.topLevelComment.snippet

      //API Polling

      dispatch(
        appendMessage({
          id: dummyChatData[chatIndex].id,
          profile: authorProfileImageUrl,
          name: authorDisplayName,
          message: textOriginal,
        })
      )
    }, intervalTime)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className='flex  flex-col-reverse border border-gray-300 rounded-xl ml-4 h-[60vh]'>
      <input
        type='text'
        className='p-2 pl-4 rounded-3xl outline-none mx-4 mb-2 bg-gray-200'
        placeholder='Chat...'
        onKeyUp={(e) => handleComment(e)}
      />
      <hr className='my-2 ' />
      <div className=' p-2 flex flex-col-reverse rounded-lg overflow-y-scroll bg-gray-50'>
        {liveMessages.map((chat, index) => {
          return (
            <ChatMessage
              key={index}
              name={chat.name}
              message={chat.message}
              profile={chat.profile}
            />
          )
        })}
      </div>
    </div>
  )
}

export default LiveChat
