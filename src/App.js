import "./App.css"
import Body from "./components/Body"
import Head from "./components/Head"
import { Provider } from "react-redux"
import store from "./utils/store"

function App() {
  return (
    <Provider store={store}>
      <Head />
      <Body />
      {/**
       *
       * Head
       * Body
       *  -> Sidebar
       *      -> MenuItems
       *  -> MainContainer
       *      -> ButtonList / Filters
       *      -> VideoContainer
       *          -> VideoCard
       *
       */}
    </Provider>
  )
}

export default App
