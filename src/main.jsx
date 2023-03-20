import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom"
import './index.css'

import Navbar from './components/Layouts/navbar'
import Routes from './components/Routes/landing'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Routes />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Navbar />
    <RouterProvider router={router} />

  </React.StrictMode>,
)
