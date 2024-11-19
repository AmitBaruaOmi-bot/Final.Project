import React from 'react'
import { BrowserRouter as Route, Router, RouterProvider, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Cart from './pages/Cart'
import Order from './pages/Order'
import Footer from './components/Footer'

const App = () => {

  return (

    <Router>
      <div className='app'>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/order' element={<Order />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  )
}

export default App

