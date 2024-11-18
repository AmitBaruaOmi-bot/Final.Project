import React, { useState } from 'react'
import './Navbar.css'
import { assets } from '../assets/assets'

const Navbar = () => {
    const [menu, setMenu] = useState("menu");
    return (
        <div className='navbar'>
            <img src={assets.logo} alt="" className='logo' />
            <ul className="navbar-menu">
                <li onClick={()=>setMenu("menu")} className={menu==="menu"?"active":""}>Menu</li>
                <li onClick={()=>setMenu("about-us")} className={menu==="about-us"?"active":""}>About Us</li>
                <li onClick={()=>setMenu("contact-us")} className={menu==="contact-us"?"active":""}>Contact Us</li>
            </ul>
            <div className="navbar-right">
                <img src={assets.search} alt="" />
                <div className="navbar-search-icon">
                    <img src={assets.basket} alt="" />
                    <div className="dot"></div>
                </div>
                <button>Signup</button>
            </div>
        </div>
    )
}

export default Navbar