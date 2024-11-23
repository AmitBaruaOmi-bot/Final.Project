import React, { useContext } from 'react'
import './FoodItems.css'
import { storeContext } from '../context/storeContext'
import Food from './Food'
import {food_list}  from '../assets/assets'

const FoodItems = ({ category }) => {

  const {food_list} = useContext(storeContext)

  return (
    <div className='food' id='food'>
      <h2>Tastyness near you!!</h2>
      <div className="food-items">
        {food_list.map((item, index) => {
          if (category==="All" || item.category === category) {
            return <Food key={index}
              id={item._id}
              name={item.name}
              image={item.image}
              price={item.price}
              descriptions={item.descriptions}
            />
          }
        })}
      </div>
    </div>
  )
}

export default FoodItems