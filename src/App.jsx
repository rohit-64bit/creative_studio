import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar.jsx'
import Home from './pages/Home'
import About from './pages/About.jsx'
import Services from './pages/Services.jsx'
import CustomCursor from './layouts/CustomCursor.jsx'
import Footer from './components/Footer.jsx'
import Portfolio from './pages/Portfolio.jsx'

function App() {
  return (
    <>
      <CustomCursor />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/portfolio" element={<Portfolio />} />
        
      </Routes>
      <Footer />
    </>
  )
}

export default App
