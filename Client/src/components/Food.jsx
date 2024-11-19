import React from 'react'
import './Food.css'
import { assets } from '../assets/assets'

const Food = ({id,name,image,price,descriptions}) => {
  return (
    <div className='food-list'>
        <div className="food-list-img-container">
            <img className="food-products-image" src={image} alt="" />
        </div>
        <div className="food-info">
            <div className="food-name-rating">
                <p>{name}</p>
                <img src={assets.likes} alt="" />
            </div>
            <p className='food-desc'>{descriptions}</p>
            <p className="food-price">${price}</p>
        </div>
    </div>
  )
}

export default Food