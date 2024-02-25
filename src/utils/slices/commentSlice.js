import { createSlice } from "@reduxjs/toolkit"

const commentSlice = createSlice({
  name: "comment",
  initialState: { comments: [] },
  reducers: {
    commentsData: (state, action) => {
      state.comments = action.payload
    },
  },
})

export const { commentsData } = commentSlice.actions
export default commentSlice.reducer
