import React from "react"
import SingleButton from "./SingleButton"

const ButtonList = () => {
  const buttonFilters = [
    "All",
    "Gaming",
    "Songs",
    "p4avinash",
    "Naruto",
    "Cooking",
    "News",
    "Cricket",
    "Taekwondo",
    "Soccer",
  ]

  return (
    <div className='mt-8 flex'>
      {buttonFilters.map((category, index) => {
        return <SingleButton key={index} text={category} />
      })}
    </div>
  )
}

export default ButtonList
