import { createSlice } from "@reduxjs/toolkit"

const searchSlice = createSlice({
  name: "search",
  initialState: {},
  reducers: {
    cachedSearchSuggestions: (state, action) => {
      state = Object.assign(state, action.payload)
    },
  },
})

export const { cachedSearchSuggestions } = searchSlice.actions
export default searchSlice.reducer
