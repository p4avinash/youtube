import "./App.css"
import Body from "./components/Body"
import Head from "./components/Head"
import { Provider } from "react-redux"
import store from "./utils/store"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import WatchPage from "./components/WatchPage"
import MainContainer from "./components/MainContainer"
import Error from "./components/Error"

function App() {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Body />,
      errorElement: <Error />,
      children: [
        {
          path: "/",
          element: <MainContainer />,
        },
        {
          path: "/watch",
          element: <WatchPage />,
        },
      ],
    },
  ])

  return (
    <Provider store={store}>
      <Head />
      <RouterProvider router={appRouter}>
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
      </RouterProvider>
    </Provider>
  )
}

export default App
