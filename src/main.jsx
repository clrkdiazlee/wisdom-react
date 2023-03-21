import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom"
import './index.css'

import Navbar from './components/Layouts/navbar'
import Index from './components/Routes/Index'
import Calendar from './components/Layouts/calendar'
import Tasks from './components/Layouts/tasks'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Index />,
  },
  {
    path: "/calendar",
    element: <Calendar />,
  },
  {
    path: "/tasks",
    element: <Tasks />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Navbar />
    <RouterProvider router={router} />

  </React.StrictMode>,
)
