import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { closeMenu } from "../utils/slices/appSlice"
import { useSearchParams } from "react-router-dom"
import { COMMENTS_DATA_FROM_YOUTUBE } from "../utils/constant"
import CommentsList from "./CommentsList"
import LiveChat from "./LiveChat"
import { commentsData } from "../utils/slices/commentSlice"

const WatchPage = () => {
  const [comments, setComments] = useState([])
  const [URLSearchParams] = useSearchParams()
  const videoId = URLSearchParams.get("v")
  const GOOGLE_API_KEY = process.env.REACT_APP_GOOGLE_API_KEY
  const dispatch = useDispatch()

  const getVideoComments = async () => {
    try {
      const response = await fetch(
        `https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&maxResults=100&videoId=${videoId}&key=${GOOGLE_API_KEY}`
      )

      const data = await response.json()
      dispatch(commentsData(data.items))
      setComments(data.items)
    } catch (error) {
      console.log(error)
    }
  }

  // const getVideoComments = async () => {
  //   try {
  //     const response = new Promise((resolve, reject) => {
  //       return resolve(COMMENTS_DATA_FROM_YOUTUBE)
  //     })
  //     const data = await response
  //     dispatch(commentsData(data.items))
  //   } catch (error) {
  //     console.log(error)
  //   }
  // }

  useEffect(() => {
    dispatch(closeMenu())
    getVideoComments()
  }, [])

  return (
    <div className='main-page-container w-screen mt-10'>
      <div className='video-and-live-chat-section flex flex-wrap'>
        <iframe
          className='rounded-xl w-[60vw] h-[60vh]'
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
          title='YouTube video player'
          frameBorder='0'
          allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
          allowFullScreen
        ></iframe>
        <div className='live-chat lg:w-[25vw] md:w-[60vw] sm:w-[70vw] ml-4'>
          <LiveChat />
        </div>
      </div>
      <div className='comments-section mt-10 w-[60vw]'>
        <h1 className='text-xl font-bold mb-8'>Comments</h1>
        <CommentsList comments={comments} />
      </div>
    </div>
  )
}

export default WatchPage
