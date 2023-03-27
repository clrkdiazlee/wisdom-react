import React from 'react'
import Navbar from './Layouts/Navbar'
import Index from './Routes/Index'
import Footer from './Layouts/Footer'
import { Route, Routes } from 'react-router-dom'
import Login from './components/Login'
import Registration from './components/Registration'

const App = () => {
  return (
    <div>
        <Navbar />
            <Routes>
                <Route path='/' element={<Index />} />
                <Route path='/Registration' element={<Registration />} />
                <Route path='/Login' element={<Login />} />
            </Routes>
        <Footer />
    </div>
  )
}

export default App