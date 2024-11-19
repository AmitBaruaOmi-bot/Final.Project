import React, { useContext } from 'react'
import './Food.css'
import { assets } from '../assets/assets'
import { StoreContext } from '../context/StoreContext'

const Food = ({id,name,image,price,descriptions}) => {
 
  const {cartItems, addToCart, removeFromCart} = useContext(StoreContext);
  
  return (
    <div className='food-list'>
        <div className="food-list-img-container">
            <img className="food-products-image" src={image} alt="" />
            {
              !cartItems[id]
              ?<img className='add' onClick={()=>addToCart[id]} src={assets.add_icon_white} alt="" />
              :<div className="food-counter">
                <img onClick={()=>removeFromCart[id]} src={assets.remove_icon_red} alt="" />
                <p>{cartItems[id]}</p>
                <img onClick={()=>addToCart[id]} src={assets.add_icon_green} alt="" />
              </div>
            }
        </div>
        <div className="food-info">
            <div className="food-rating">
                <p>{name}</p>
                <img src={assets.likes} alt="" />
            </div>
            <p className='food-descriptions'>{descriptions}</p>
            <p className="food-price">${price}</p>
        </div>
    </div>
  )
}

export default Food