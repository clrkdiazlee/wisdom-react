import React from 'react'
import Navbar from './Layouts/Navbar'
import Navbar2 from './Layouts/Navbar2'
import Index from './Routes/Index'
import Footer from './Layouts/Footer'
import { Route, Routes, useLocation } from 'react-router-dom'
import Login from './components/Login'
import Registration from './components/Registration'


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
          </Routes>
          <Footer />
        </>
      )         
      };
    </div>
  );
}

export default App