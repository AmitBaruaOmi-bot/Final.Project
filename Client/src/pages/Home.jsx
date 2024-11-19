import React from 'react'
import './Home.css'
import Header from '../components/Header'
import Menu from '../components/Menu'
import { useState } from 'react'
import FoodItems from '../components/FoodItems'

const Home = () => {

  const [category, setCategory] = useState("All");

  return (
    <div>
        <Header/>
        <Menu category={category} setCategory={setCategory} />
        <FoodItems category={category}/>
    </div>
  )
}

export default Home