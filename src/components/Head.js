import React, { useEffect, useState, useRef } from "react"
import { useDispatch, useSelector } from "react-redux"
import { toggleMenu } from "../utils/slices/appSlice"
import { SEARCH_SUGGESTION_URL } from "../utils/constant"
import { cachedSearchSuggestions } from "../utils/slices/searchSlice"
import { videoData } from "../utils/slices/videoSlice"

const Head = () => {
  const [searchQuery, setSearchQuery] = useState("")
  const [searchSuggestions, setSearchSuggestions] = useState([])
  const [searchBoxFocus, setSearchboxFocus] = useState(false)
  const [searchSuggestionQuery, setSearchSuggestionQuery] = useState("")
  const GOOGLE_API_KEY = process.env.REACT_APP_GOOGLE_API_KEY

  const searchBox = useRef("")
  const cachedSearchResult = useSelector((store) => store.search)
  const dispatch = useDispatch()

  const handleSetSearchQuery = (e) => {
    setSearchboxFocus(true)
    setSearchQuery(e.target.value)
  }

  const handleClickOnSearchSuggestion = async () => {
    try {
      const response = await fetch(
        `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${searchSuggestionQuery}&key=${GOOGLE_API_KEY}`
      )
      const data = await response.json()
      console.log("data from clicking on search suggestions", data.items)
      const videoDataFilter = data.items.filter((item) => item.id.videoId)
      console.log("videoDataFilter", videoDataFilter)
      dispatch(videoData(videoDataFilter))
    } catch (error) {
      console.log(error)
    }
  }

  const handleSearchButtonClick = () => {
    setSearchSuggestionQuery(searchBox.current.value)
  }

  const handleSearchFunctionality = (e) => {
    searchBox.current.value = e.target.textContent
    setSearchSuggestionQuery(searchBox.current.value)
    setSearchboxFocus(false)
  }

  const handleBlurEvent = (e) => {
    const timeout = setTimeout(() => {
      setSearchboxFocus(false)
    }, 200)
    return () => clearTimeout(timeout)
  }

  const getSearchSuggestion = async () => {
    try {
      const response = await fetch(
        `https://api.allorigins.win/get?url=${encodeURIComponent(
          SEARCH_SUGGESTION_URL + "'" + searchQuery + "'"
        )}`
      )
      const data = await response.json()
      setSearchSuggestions(JSON.parse(data.contents)[1])

      //update cachet
      let dataToBeCached = {
        [searchQuery]: searchSuggestions,
      }
      dispatch(cachedSearchSuggestions(dataToBeCached))
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    if (searchSuggestionQuery.length > 0) {
      handleClickOnSearchSuggestion()
    }
  }, [searchSuggestionQuery])

  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchQuery in cachedSearchResult) {
        setSearchSuggestions(cachedSearchResult[searchQuery])
      } else {
        getSearchSuggestion()
      }
    }, 300)

    return () => clearTimeout(timer)
  }, [searchQuery])

  return (
    <div className='grid grid-flow-col p-4 mt-2 shadow-lg ease-in-out sticky top-0 bg-white z-10'>
      {/* first section */}
      <div className='flex col-span-1 items-center'>
        <svg
          onClick={() => dispatch(toggleMenu())}
          className='w-8 h-8 mr-2 cursor-pointer'
          xmlns='http://www.w3.org/2000/svg'
          x='0px'
          y='0px'
          width='100'
          height='100'
          viewBox='0 0 24 24'
        >
          <path d='M2 11H22V13H2zM2 5H22V7H2zM2 17H22V19H2z'></path>
        </svg>
        <a href='/' className='flex'>
          <svg
            className='w-10 h-10 cursor-pointer'
            xmlns='http://www.w3.org/2000/svg'
            x='0px'
            y='0px'
            width='100'
            height='100'
            viewBox='0 0 48 48'
          >
            <path
              fill='#FF3D00'
              d='M43.2,33.9c-0.4,2.1-2.1,3.7-4.2,4c-3.3,0.5-8.8,1.1-15,1.1c-6.1,0-11.6-0.6-15-1.1c-2.1-0.3-3.8-1.9-4.2-4C4.4,31.6,4,28.2,4,24c0-4.2,0.4-7.6,0.8-9.9c0.4-2.1,2.1-3.7,4.2-4C12.3,9.6,17.8,9,24,9c6.2,0,11.6,0.6,15,1.1c2.1,0.3,3.8,1.9,4.2,4c0.4,2.3,0.9,5.7,0.9,9.9C44,28.2,43.6,31.6,43.2,33.9z'
            ></path>
            <path fill='#FFF' d='M20 31L20 17 32 24z'></path>
          </svg>

          <p className='text-2xl font-semibold cursor-pointer'>YouTube</p>
        </a>
      </div>

      {/* second section */}
      <div className='flex justify-center col-span-10'>
        <input
          ref={searchBox}
          onChange={(e) => handleSetSearchQuery(e)}
          type='text'
          placeholder='Search'
          className=' rounded-l-full pl-4 w-3/6 border border-gray-300 focus:border-blue-500 duration-300 outline-none'
          onBlur={(e) => handleBlurEvent(e)}
          onFocus={() => setSearchboxFocus(true)}
        />
        <svg
          onClick={() => handleSearchButtonClick()}
          className='w-[80px] hover:bg-slate-100 flex h-11 duration-300 rounded-r-full cursor-pointer p-1 border border-l-0 border-gray-300'
          xmlns='http://www.w3.org/2000/svg'
          x='0px'
          y='0px'
          width='100'
          height='100'
          viewBox='0 0 50 50'
        >
          <path d='M 21 3 C 11.621094 3 4 10.621094 4 20 C 4 29.378906 11.621094 37 21 37 C 24.710938 37 28.140625 35.804688 30.9375 33.78125 L 44.09375 46.90625 L 46.90625 44.09375 L 33.90625 31.0625 C 36.460938 28.085938 38 24.222656 38 20 C 38 10.621094 30.378906 3 21 3 Z M 21 5 C 29.296875 5 36 11.703125 36 20 C 36 28.296875 29.296875 35 21 35 C 12.703125 35 6 28.296875 6 20 C 6 11.703125 12.703125 5 21 5 Z'></path>
        </svg>

        <div
          className={
            searchSuggestions?.length > 0 && searchBoxFocus
              ? `search-results fixed mt-12 bg-white w-2/6 border border-gray-300  duration-300 rounded-xl py-2 mr-[7rem] px-2 shadow-lg`
              : `hidden`
          }
        >
          <ul className='flex flex-col justify-start leading-8 text-md font-semibold cursor-pointer ease-in-out duration-300'>
            {searchSuggestions.map((keyword, index) => {
              return (
                <div
                  onClick={(e) => handleSearchFunctionality(e)}
                  key={index}
                  className='flex items-center hover:bg-gray-300 rounded-xl px-4 '
                >
                  <svg
                    className='mr-4'
                    xmlns='http://www.w3.org/2000/svg'
                    enableBackground='new 0 0 24 24'
                    height='24'
                    viewBox='0 0 24 24'
                    width='24'
                    focusable='false'
                  >
                    <path d='m20.87 20.17-5.59-5.59C16.35 13.35 17 11.75 17 10c0-3.87-3.13-7-7-7s-7 3.13-7 7 3.13 7 7 7c1.75 0 3.35-.65 4.58-1.71l5.59 5.59.7-.71zM10 16c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6z'></path>
                  </svg>
                  <li className=''>{keyword}</li>
                </div>
              )
            })}
          </ul>
        </div>
      </div>

      {/* third section */}
      <div className='col-span-1'>
        <img
          width='40'
          height='40'
          className='cursor-pointer'
          src='https://img.icons8.com/ios/50/user-male-circle--v1.png'
          alt='user-male-circle--v1'
        />
      </div>
    </div>
  )
}

export default Head
