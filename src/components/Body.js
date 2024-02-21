import React, { useEffect } from "react"
import Sidebar from "./Sidebar"
import { Outlet } from "react-router-dom"
import useGetData from "../utils/custom_hooks/useGetData"

const Body = () => {
  return (
    <div className='flex '>
      <Sidebar />
      <Outlet />
    </div>
  )
}

export default Body
