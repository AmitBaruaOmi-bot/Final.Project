import React from 'react'
import './Home.css'
import Header from '../components/Header'
import Menu from '../components/Menu'
import { useState } from 'react'
const Home = () => {

  const [category, setCategory] = useState("All");

  return (
    <div>
        <Header/>
        <Menu category={category} setCategory={setCategory} />
    </div>
  )
}

export default Home