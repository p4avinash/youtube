import React, { useState } from "react"
import CommentReplies from "./CommentReplies"

const CommentsRepliesList = ({ replies }) => {
  const [showReplies, setShowReplies] = useState(false)

  return (
    <div>
      <p
        className='font-bold text-blue-700 cursor-pointer ml-20 text-sm'
        onClick={() => setShowReplies(!showReplies)}
      >
        {showReplies ? "Hide Replies" : "Show Replies"}
      </p>
      {replies.comments.map((reply) => {
        if (reply) {
          return showReplies ? (
            <CommentReplies key={reply.id} reply={reply} />
          ) : null
        }
      })}
    </div>
  )
}

export default CommentsRepliesList
