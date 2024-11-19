import React from 'react'
import './Menu.css'
import { menu_items } from '../assets/assets'

const Menu = ({category, setCategory}) => {
    
  return (
    <div className='menu' id='menu'>
        <h1>Food Categories</h1>
        <p className='menu-text'>Vast collection for your choice.</p>
        <div className="menu-list">
            {menu_items.map((item,index)=>{
                return(
                    <div onClick={()=>setCategory(prev=>prev===item.menu_name?"All":item.menu_name)} key={index} className="menu-list-items">
                        <img className={category===item.menu_name?"active":""} src={item.menu_image} alt="" />
                        <p>{item.menu_name}</p>
                    </div>
                )
            })}
        </div>
        <hr />
    </div>
  )
}

export default Menu



