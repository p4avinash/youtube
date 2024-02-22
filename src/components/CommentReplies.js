import React from "react"

const CommentReplies = ({ reply }) => {
  console.log("replies from ---", reply)

  const {
    authorDisplayName,
    authorProfileImageUrl,
    publishedAt,
    textOriginal,
    likeCount,
  } = reply.snippet

  return (
    <div>
      <div className='comments-detail mb-4 ml-20 flex p-4 rounded-lg'>
        <img
          className='rounded-full w-[40px] h-[40px] mr-6'
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
    </div>
  )
}

export default CommentReplies
