import React from 'react'
import Navbar from './Layouts/Navbar'
import Navbar2 from './Layouts/Navbar2'
import Index from './Routes/Index'
import Footer from './Layouts/Footer'
import { Route, Routes, useLocation } from 'react-router-dom'
import Login from './components/Login'
import Registration from './components/Registration'
import ForgotPassword from './components/ForgotPassword'
import ConfirmPassword from './components/ConfirmPassword'
import About from './Routes/About'
import SchoolApplication from './components/SchoolApplication'
import SchoolAddStudent from './components/SchoolAddStudent'

const App = () => {
  const location = useLocation();
  const currentPath = location.pathname.toString();
  console.log(currentPath)
  return (
    <div>
      {(currentPath == "/" || currentPath == "/About") ? (
        <>
          <Navbar />
          <Routes>
            <Route path='/' element={<Index />} />
            <Route path='/Registration' element={<Registration />} />
            <Route path='/Login' element={<Login />} />
            <Route path='/ForgotPassword' element={<ForgotPassword />} />
            <Route path='/ConfirmPassword' element={<ConfirmPassword />} />
            <Route path='/About' element={<About />} />
            <Route path='/SchoolApplication' element={<SchoolApplication />} />

          </Routes>
          <Footer />
        </>
      ) : (
        <>
          <Navbar2 />
          <Routes>
            <Route path='/' element={<Index />} />
            <Route path='/Registration' element={<Registration />} />
            <Route path='/Login' element={<Login />} />
            <Route path='/ForgotPassword' element={<ForgotPassword />} />
            <Route path='/ConfirmPassword' element={<ConfirmPassword />} />
            <Route path='/About' element={<About />} />

            <Route path='/add-student' element={<SchoolAddStudent />} />

          </Routes>
          <Footer />
        </>
      )
      }
    </div>
  );
}

export default App