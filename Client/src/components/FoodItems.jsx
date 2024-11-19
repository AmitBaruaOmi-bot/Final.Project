import React, { useContext } from 'react'
import './FoodItems.css'
import { StoreContext } from '../context/StoreContext'
import Food from './Food'


const FoodItems = ({category}) => {

    const { food_list } = useContext(StoreContext)
  return (
    <div className='food' id='food'>
        <h2>Tastyness near you!!</h2>
        <div className="food-items">
            {food_list.map((item,index)=>{
                return <Food key={index} 
                id={item._id} 
                name={item.name} 
                image={item.image} 
                price_individual={item.price_individual} 
                price_menu={item.price_menu} 
                price_regular={item.price_regular} 
                price_medium={item.price_medium} 
                price_large={item.price_large} 
                descriptions_individual={item.descriptions_individual}
                descriptions_menu={item.descriptions_menu}
                />
            })}
        </div>
    </div>
  )
}

export default FoodItems