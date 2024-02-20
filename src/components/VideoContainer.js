import React, { useEffect, useState } from "react"
import VideoCard from "./VideoCard"
import { YOUTUBE_VIDEO_API } from "../utils/constant"
import { DATA_FROM_YOUTUBE } from "../utils/constant"

const VideoContainer = () => {
  const [videos, setVideos] = useState([])

  useEffect(() => {
    getVideos()
  }, [])

  const getVideos = async () => {
    const response = new Promise((resolve, reject) => {
      return resolve(DATA_FROM_YOUTUBE)
    })
    const data = await response

    setVideos(data?.items)
    // const data = DATA_FROM_YOUTUBE
  }

  // const getVideos = async () => {
  //   const response = await fetch(YOUTUBE_VIDEO_API)
  //   const data = await response.json()
  //   console.log(data)
  // }

  return (
    // <div className='flex justify-start flex-wrap m-2 p-2'>
    <div className='grid grid-flow-row grid-rows-2 md:grid-flow-col sm:grid-flow-col'>
      {videos.map((video, index) => {
        return <VideoCard key={index} videoInfo={videos[index]} />
      })}
    </div>
  )
}

export default VideoContainer
