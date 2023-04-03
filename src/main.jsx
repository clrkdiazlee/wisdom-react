import React from 'react'
import App from './App'
import ReactDOM from 'react-dom/client'
import {
  BrowserRouter,
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom"
import './index.css'

import Navbar from './Layouts/Navbar'
import Footer from './Layouts/Footer'
import Index from './Routes/Index'
import SchoolAddStudent from './components/SchoolAddStudent'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Index />,
  },
  {
    path: "/school/add-student",
    element: <SchoolAddStudent />,
  },

]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
)
