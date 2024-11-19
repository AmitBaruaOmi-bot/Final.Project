import React from 'react'
import { BrowserRouter as Route, Router, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Cart from './pages/Cart'
import Order from './pages/Order'
import Footer from './components/Footer'
import Login from './components/Login'

const App = () => {

  const [loginPopUp,setLoginPopUp] = useState(false)

  return (
    
    <Router>
      {loginPopUp?<Login />:<></>}
      <div className='app'>
        <Navbar setLoginPopUp = {setLoginPopUp} />
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

