import React from 'react'
import './Header.css'
import { assets } from '../assets/assets'
const Header = () => {
  return (
    <div className='header'>
        <div className='header-contents'>
            <img src={assets.header_background}  alt="" className='header-image' />
            <h2>Foodies Choice.</h2>
            <p>One step away from your door.</p>
            <button>View Menu</button>
        </div>
    </div>
  )
}

export default Header