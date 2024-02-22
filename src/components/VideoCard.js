import React from "react"

const VideoCard = ({ videoInfo }) => {
  const { snippet, statistics } = videoInfo
  const { channelTitle, thumbnails, title } = snippet
  // console.log(new Date(snippet.publishedAt))
  // console.log(statistics)

  const setViewUnit = (viewCount) => {
    // Nine Zeroes for Billions
    return Math.abs(Number(viewCount)) >= 1.0e9
      ? (Math.abs(Number(viewCount)) / 1.0e9).toFixed(2) + "B"
      : // Six Zeroes for Millions
      Math.abs(Number(viewCount)) >= 1.0e6
      ? (Math.abs(Number(viewCount)) / 1.0e6).toFixed(2) + "M"
      : // Three Zeroes for Thousands
      Math.abs(Number(viewCount)) >= 1.0e3
      ? (Math.abs(Number(viewCount)) / 1.0e3).toFixed(2) + "K"
      : Math.abs(Number(viewCount))
  }

  return (
    <div className='w-[21rem] h-[20rem] cursor-pointer'>
      <div className='image-container'>
        <img
          src={thumbnails.medium.url}
          alt='thumbnail'
          className='w-[20rem] m-2 object-cover rounded-xl'
        />
      </div>
      <div className='details-container px-2'>
        <p className='font-semibold'>{title.substring(0, 75)}</p>
        <div className='views-count-container leading-5 mt-2'>
          <p className='text-gray-500'>{channelTitle}</p>
          <p className='text-gray-500 text-sm'>
            {setViewUnit(statistics.viewCount)} views
          </p>
        </div>
      </div>
    </div>
  )
}

export default VideoCard
