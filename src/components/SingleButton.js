import React from "react"

const SingleButton = ({ text }) => {
  return (
    <button className='bg-gray-300 py-1 px-4 rounded-lg font-semibold m-2'>
      {text}
    </button>
  )
}

export default SingleButton
