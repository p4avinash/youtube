import React, { useEffect, useState } from "react"
import VideoCard from "./VideoCard"
import { YOUTUBE_VIDEO_API } from "../utils/constant"
import { DATA_FROM_YOUTUBE } from "../utils/constant"
import { Link } from "react-router-dom"

const VideoContainer = () => {
  const [videos, setVideos] = useState([])

  useEffect(() => {
    getVideos()
  }, [])

  const getVideos = async () => {
    try {
      const response = new Promise((resolve, reject) => {
        return resolve(DATA_FROM_YOUTUBE)
      })
      const data = await response

      setVideos(data?.items)
    } catch (error) {
      console.log(error)
    }
  }

  // const getVideos = async () => {
  //   try {
  //     const response = await fetch(YOUTUBE_VIDEO_API)
  //     const data = await response.json()
  //     console.log(data)
  //   } catch (error) {
  //     console.log(error)
  //   }
  // }

  return (
    <div className='sm:grid sm:grid-flow-row sm:grid-rows-1 lg:flex justify-start flex-wrap m-2 p-2 '>
      {videos.map((video, index) => {
        return (
          <Link to={`/watch?v=${video.id}`} key={video.id}>
            <VideoCard videoInfo={videos[index]} />
          </Link>
        )
      })}
    </div>
  )
}

export default VideoContainer
