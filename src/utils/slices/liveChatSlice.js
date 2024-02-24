import { createSlice } from "@reduxjs/toolkit"
import { LIVE_CHAT_COUNT_OFFSET } from "../constant"

const liveChatSlice = createSlice({
  name: "chat",
  initialState: {
    messages: [],
  },
  reducers: {
    appendMessage: (state, action) => {
      if (state.messages.length >= LIVE_CHAT_COUNT_OFFSET) {
        state.messages.pop()
      }
      state.messages.unshift(action.payload)
    },
  },
})

export const { appendMessage } = liveChatSlice.actions
export default liveChatSlice.reducer
