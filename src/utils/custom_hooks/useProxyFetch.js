import { useState } from "react"

const useProxyFetch = async (URL) => {
  const [responseData, setResponseData] = useState([])

  const response = await fetch(
    `https://api.allorigins.win/get?url=${encodeURIComponent(URL)}`
  )
  const data = await response.json()
  setResponseData(data)

  return responseData
}

export default useProxyFetch
