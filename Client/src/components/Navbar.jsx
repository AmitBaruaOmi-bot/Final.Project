import React, { useState } from 'react'
import './Navbar.css'
import { assets } from '../assets/assets'
import { Link } from'react-router-dom'
import { storeContext } from '../context/storeContext'

const Navbar = ({setLoginPopUp}) => {
    const [menu, setMenu] = useState("menu");
    const {getTotalPrice} = useContext(storeContext);
    return (
        <div className='navbar'>
            <Link to='/' ><img src={assets.logo} alt="" className='logo' /></Link>
            <ul className="navbar-menu">
                <Link to='/' onClick={() => setMenu("home")} className={menu == "home" ? "active" : ""}>Home</Link>
                <a href='#menu' onClick={() => setMenu("menu")} className={menu == "menu" ? "active" : ""}>Menu</a>
                <a href='#footer' onClick={() => setMenu("about-us")} className={menu == "about-us" ? "active" : ""}>About Us</a>
                <a href='#footer' onClick={() => setMenu("contact-us")} className={menu == "contact-us" ? "active" : ""}>Contact Us</a>
            </ul>
            <div className="navbar-right">
                <img src={assets.search} alt="" />
                <div className="navbar-search-icon">
                    <Link to='/cart' ><img src={assets.basket} alt="" /></Link>
                    <div className={getTotalPrice()===0?"":"dot"}></div>
                </div>
                <button onclick={()=>setLoginPopUp(true)}>Signup/Login</button>
            </div>
        </div>
    )
}

export default Navbar