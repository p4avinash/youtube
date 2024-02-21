import { useState } from "react"

const useGetData = async (URL) => {
  const [responseData, setResponseData] = useState([])

  const response = await fetch(URL)
  const data = await response.json()
  setResponseData(data)

  return responseData
}

export default useGetData
