import React from "react"
import SingleComment from "./SingleComment"
import { useDispatch } from "react-redux"

const CommentsList = ({ comments }) => {
  const dispatch = useDispatch()
  return (
    <div>
      {comments.map((comment) => (
        <SingleComment key={comment.id} comment={comment} />
      ))}
    </div>
  )
}

export default CommentsList
