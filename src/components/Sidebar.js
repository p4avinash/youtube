import React from "react"
import { useSelector } from "react-redux"

const Sidebar = () => {
  const toggleMenu = useSelector((store) => store.app.isMenuOpen)
  console.log(toggleMenu)
  return (
    <>
      {toggleMenu ? (
        <div className='p-5 shadow-xl w-48 cursor-pointer'>
          <div className=' mb-2 flex flex-col text-md'>
            <div className='flex items-center'>
              <svg
                className='w-6 h-6 mr-3'
                xmlns='http://www.w3.org/2000/svg'
                x='0px'
                y='0px'
                width='100'
                height='100'
                viewBox='0 0 24 24'
              >
                <path d='M 12 2 A 1 1 0 0 0 11.289062 2.296875 L 1.203125 11.097656 A 0.5 0.5 0 0 0 1 11.5 A 0.5 0.5 0 0 0 1.5 12 L 4 12 L 4 20 C 4 20.552 4.448 21 5 21 L 9 21 C 9.552 21 10 20.552 10 20 L 10 14 L 14 14 L 14 20 C 14 20.552 14.448 21 15 21 L 19 21 C 19.552 21 20 20.552 20 20 L 20 12 L 22.5 12 A 0.5 0.5 0 0 0 23 11.5 A 0.5 0.5 0 0 0 22.796875 11.097656 L 12.716797 2.3027344 A 1 1 0 0 0 12.710938 2.296875 A 1 1 0 0 0 12 2 z'></path>
              </svg>
              <h1 className='py-2'>Home</h1>
            </div>
            <div className='flex items-center'>
              <svg
                className='w-6 h-6 mr-3'
                xmlns='http://www.w3.org/2000/svg'
                x='0px'
                y='0px'
                width='100'
                height='100'
                viewBox='0 0 24 24'
              >
                <path d='M 16.75 1 C 16.02 1 15.329609 1.185625 14.724609 1.515625 L 5.2753906 6.4902344 C 3.9253906 7.2002344 3 8.62 3 10.25 C 3 12.345 4.520625 14.085547 6.515625 14.435547 L 5.3359375 14.955078 C 3.9509375 15.660078 3 17.095 3 18.75 C 3 21.095 4.905 23 7.25 23 C 7.985 23 8.6753906 22.814375 9.2753906 22.484375 L 18.589844 17.580078 C 20.014844 16.895078 21 15.435 21 13.75 C 21 11.655 19.479375 9.9144531 17.484375 9.5644531 L 18.664062 9.0449219 C 20.049063 8.3399219 21 6.905 21 5.25 C 21 2.905 19.095 1 16.75 1 z M 10.501953 9.3828125 C 10.587953 9.3828125 10.675812 9.404125 10.757812 9.453125 L 14.285156 11.570312 C 14.609156 11.764313 14.609156 12.233734 14.285156 12.427734 L 10.757812 14.544922 C 10.675813 14.594922 10.587953 14.617187 10.501953 14.617188 C 10.240953 14.617188 10 14.410188 10 14.117188 L 10 9.8828125 C 10 9.5908125 10.240953 9.3828125 10.501953 9.3828125 z'></path>
              </svg>
              <h1 className='py-2'>Shorts</h1>
            </div>
            <div className='flex items-center'>
              <svg
                className='w-6 h-6 mr-3'
                xmlns='http://www.w3.org/2000/svg'
                version='1.1'
                id='mdi-youtube-subscription'
                width='24'
                height='24'
                viewBox='0 0 24 24'
              >
                <path d='M20,8H4V6H20V8M18,2H6V4H18V2M22,12V20A2,2 0 0,1 20,22H4A2,2 0 0,1 2,20V12A2,2 0 0,1 4,10H20A2,2 0 0,1 22,12M16,16L10,12.73V19.26L16,16Z' />
              </svg>
              <h1 className='py-2'>Subscriptions</h1>
            </div>
          </div>
          <hr />
          <h1 className='font-semibold'>Subscriptions</h1>
          <div className='mt-2 flex flex-col'>
            <ul>
              <li className='py-1'>Test</li>
              <li className='py-1'>Test</li>
              <li className='py-1'>Test</li>
              <li className='py-1'>Test</li>
              <li className='py-1'>Test</li>
            </ul>
          </div>
        </div>
      ) : (
        <div className='p-5 shadow-xl w-18 flex flex-col cursor-pointer'>
          <svg
            className='w-6 h-6 mr-3 mb-8'
            xmlns='http://www.w3.org/2000/svg'
            x='0px'
            y='0px'
            width='100'
            height='100'
            viewBox='0 0 24 24'
          >
            <path d='M 12 2 A 1 1 0 0 0 11.289062 2.296875 L 1.203125 11.097656 A 0.5 0.5 0 0 0 1 11.5 A 0.5 0.5 0 0 0 1.5 12 L 4 12 L 4 20 C 4 20.552 4.448 21 5 21 L 9 21 C 9.552 21 10 20.552 10 20 L 10 14 L 14 14 L 14 20 C 14 20.552 14.448 21 15 21 L 19 21 C 19.552 21 20 20.552 20 20 L 20 12 L 22.5 12 A 0.5 0.5 0 0 0 23 11.5 A 0.5 0.5 0 0 0 22.796875 11.097656 L 12.716797 2.3027344 A 1 1 0 0 0 12.710938 2.296875 A 1 1 0 0 0 12 2 z'></path>
          </svg>
          <svg
            className='w-6 h-6 mr-3 mb-8'
            xmlns='http://www.w3.org/2000/svg'
            x='0px'
            y='0px'
            width='100'
            height='100'
            viewBox='0 0 24 24'
          >
            <path d='M 16.75 1 C 16.02 1 15.329609 1.185625 14.724609 1.515625 L 5.2753906 6.4902344 C 3.9253906 7.2002344 3 8.62 3 10.25 C 3 12.345 4.520625 14.085547 6.515625 14.435547 L 5.3359375 14.955078 C 3.9509375 15.660078 3 17.095 3 18.75 C 3 21.095 4.905 23 7.25 23 C 7.985 23 8.6753906 22.814375 9.2753906 22.484375 L 18.589844 17.580078 C 20.014844 16.895078 21 15.435 21 13.75 C 21 11.655 19.479375 9.9144531 17.484375 9.5644531 L 18.664062 9.0449219 C 20.049063 8.3399219 21 6.905 21 5.25 C 21 2.905 19.095 1 16.75 1 z M 10.501953 9.3828125 C 10.587953 9.3828125 10.675812 9.404125 10.757812 9.453125 L 14.285156 11.570312 C 14.609156 11.764313 14.609156 12.233734 14.285156 12.427734 L 10.757812 14.544922 C 10.675813 14.594922 10.587953 14.617187 10.501953 14.617188 C 10.240953 14.617188 10 14.410188 10 14.117188 L 10 9.8828125 C 10 9.5908125 10.240953 9.3828125 10.501953 9.3828125 z'></path>
          </svg>
          <svg
            className='w-6 h-6 mr-3'
            xmlns='http://www.w3.org/2000/svg'
            version='1.1'
            id='mdi-youtube-subscription'
            width='24'
            height='24'
            viewBox='0 0 24 24'
          >
            <path d='M20,8H4V6H20V8M18,2H6V4H18V2M22,12V20A2,2 0 0,1 20,22H4A2,2 0 0,1 2,20V12A2,2 0 0,1 4,10H20A2,2 0 0,1 22,12M16,16L10,12.73V19.26L16,16Z' />
          </svg>
        </div>
      )}
    </>
  )
}

export default Sidebar
