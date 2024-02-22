import React from "react"
import CommentReplies from "./CommentReplies"
import CommentsRepliesList from "./CommentsRepliesList"

const SingleComment = ({ comment }) => {
  const { snippet, replies } = comment
  const { totalReplyCount, topLevelComment } = snippet
  const {
    authorProfileImageUrl,
    authorDisplayName,
    publishedAt,
    likeCount,
    textOriginal,
  } = topLevelComment.snippet

  // console.log("snippet", snippet)
  // console.log("totalReplyCount", totalReplyCount)
  // console.log("topLevelComment", topLevelComment)
  // console.log("replies", replies)
  // console.log(comment)
  return (
    <div className=''>
      <div className='comments-detail mb-4 flex p-4 rounded-lg'>
        <img
          className='rounded-full w-[50px] h-[50px] mr-6'
          src={`${
            authorProfileImageUrl
              ? authorProfileImageUrl
              : "https://img.icons8.com/ios/50/user-male-circle--v1.png"
          }`}
          alt='profile'
        ></img>
        <div className=' '>
          <p>{authorDisplayName}</p>
          <p>{textOriginal}</p>
        </div>
      </div>
      <div className='replies'>
        {replies !== undefined ? <CommentsRepliesList replies={replies} /> : ""}
      </div>
    </div>
  )
}

export default SingleComment
