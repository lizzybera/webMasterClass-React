// import React from 'react'

import { RouterProvider } from "react-router-dom"
import { mainRouter } from "./router/mainRouter"
import { Pop_UpProvider } from "./components/context/modalContext"

const App = () => {
  return (
    <div>
      <Pop_UpProvider>
      <RouterProvider router={mainRouter} />
      </Pop_UpProvider>
    </div>
  )
}

export default App