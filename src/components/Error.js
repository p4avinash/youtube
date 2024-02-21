import React from "react"
import { useRouteError } from "react-router-dom"

const Error = () => {
  const error = useRouteError()
  console.log(error)
  return (
    <div className='flex flex-col h-[80vh] justify-center items-center'>
      <p className='text-3xl font-bold'>{`${error.status && error.status} - ${
        error.statusText && error.statusText
      }`}</p>
      <p className='text-3xl font-bold'>{error.data}</p>
    </div>
  )
}

export default Error
