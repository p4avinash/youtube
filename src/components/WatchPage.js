import React, { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import { closeMenu } from "../utils/slices/appSlice"
import { useSearchParams } from "react-router-dom"
import { COMMENTS_DATA_FROM_YOUTUBE, GOOGLE_API_KEY } from "../utils/constant"
import CommentsList from "./CommentsList"
import LiveChat from "./LiveChat"

const WatchPage = () => {
  const [comments, setComments] = useState([])
  const [URLSearchParams] = useSearchParams()
  const videoId = URLSearchParams.get("v")

  // const getVideoComments = async () => {
  //   try {
  //     const response = await fetch(
  //       `https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&maxResults=100&videoId=${videoId}&key=${GOOGLE_API_KEY}`
  //     )

  //     const commentsData = await response.json()
  //     console.log("commentsData", commentsData)
  //     setComments(commentsData.items)
  //   } catch (error) {
  //     console.log(error)
  //   }
  // }

  const getVideoComments = async () => {
    try {
      const response = new Promise((resolve, reject) => {
        return resolve(COMMENTS_DATA_FROM_YOUTUBE)
      })
      const data = await response
      setComments(data.items)
    } catch (error) {
      console.log(error)
    }
  }

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(closeMenu())
    getVideoComments()
  }, [])

  return (
    // <div className=''>
    //   <div className='mt-6 flex'>
    //     <iframe
    //       className='rounded-xl'
    //       width='800'
    //       height='400'
    //       src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
    //       title='YouTube video player'
    //       frameBorder='0'
    //       allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
    //       allowFullScreen
    //     ></iframe>
    //     <div className='live-chat-container relative'>
    //       <LiveChat />
    //     </div>
    //   </div>
    //   <div className='comments-data mt-10 w-[50rem]'>
    //     <h1 className='text-xl font-bold mb-8'>Comments</h1>
    //     <CommentsList comments={comments} />
    //   </div>
    // </div>

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
