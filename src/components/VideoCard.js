import React from "react"

const VideoCard = ({ videoInfo }) => {
  const { snippet, statistics } = videoInfo
  const { channelTitle, thumbnails, title } = snippet
  console.log(snippet)

  return (
    <div className='w-[21rem] h-[20rem]'>
      <div className='image-container'>
        <img
          src={thumbnails.medium.url}
          alt='thumbnail'
          className='w-[20rem] m-2 object-cover rounded-xl'
        />
      </div>
      <div className='details-container px-2'>
        <p className='font-semibold '>{title}</p>
        <p className='text-gray-500'>{channelTitle}</p>
      </div>
    </div>
  )
}

export default VideoCard
