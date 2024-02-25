import { configureStore } from "@reduxjs/toolkit"
import appSlice from "./slices/appSlice"
import searchSlice from "./slices/searchSlice"
import liveChatSlice from "./slices/liveChatSlice"
import videoSlice from "./slices/videoSlice"
import commentSlice from "./slices/commentSlice"

const store = configureStore({
  reducer: {
    app: appSlice,
    search: searchSlice,
    chat: liveChatSlice,
    video: videoSlice,
    comment: commentSlice,
  },
})

export default store
