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


const App = () => {
  const location = useLocation();
  const currentPath = location.pathname.toString();
  console.log(currentPath)
  return (
    <div>
      {currentPath == "/" ? (
        <>
          <Navbar />
          <Routes>
            <Route path='/' element={<Index />} />
            <Route path='/Registration' element={<Registration />} />
            <Route path='/Login' element={<Login />} />
            <Route path='/ForgotPassword' element={<ForgotPassword />} />
            <Route path='/ConfirmPassword' element={<ConfirmPassword />} />
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
          </Routes>
          <Footer />
        </>
      )         
      };
    </div>
  );
}

export default App