import React from 'react'
import Navbar from './Layouts/Navbar'
import Index from './Routes/Index'
import Student from './Routes/Student'
import Footer from './Layouts/Footer'
import { Route, Routes } from 'react-router-dom'

const App = () => {
  return (
    <div>
        <Navbar />
            <Routes>
                <Route path='/' element={<Index />} />
                <Route path='/Student' element={<Student />} />
            </Routes>
        <Footer />
    </div>
  )
}

export default App