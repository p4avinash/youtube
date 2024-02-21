import React, { useEffect } from "react"
import { useDispatch } from "react-redux"
import { closeMenu } from "../utils/slices/appSlice"
import { useSearchParams } from "react-router-dom"

const WatchPage = () => {
  const [URLSearchParams] = useSearchParams()
  const videoId = URLSearchParams.get("v")

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(closeMenu())
  }, [])

  return (
    <div className='mt-6'>
      <iframe
        width='800'
        height='400'
        src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
        title='YouTube video player'
        frameBorder='0'
        allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
        allowFullScreen
      ></iframe>
    </div>
  )
}

export default WatchPage
