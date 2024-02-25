import { createSlice } from "@reduxjs/toolkit"

const videoSlice = createSlice({
  name: "video",
  initialState: {
    videos: [],
  },
  reducers: {
    videoData: (state, action) => {
      state.videos = action.payload
    },
  },
})

export const { videoData } = videoSlice.actions
export default videoSlice.reducer
