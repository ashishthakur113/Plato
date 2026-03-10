import React, { useState } from 'react'
import './Home.css'
import Header from '../../Components/Header/Header'
import ExploreMenu from '../../Components/ExploreMenu/ExploreMenu'
import FoodDisplay from '../../Components/FoodDisplay/FoodDisplay';
import SEO from '../../Components/SEO/SEO'


export default function Home() {

  const [category , setCategory] = useState("All");

  return (
    <div>
      <SEO title="Plato | Fresh Food Delivered" 
      description="Order fresh and delicious food online."/>
        <Header/>
        <ExploreMenu category={category} setCategory={setCategory}/>
        <FoodDisplay category={category}/>
       
    </div>
  )
}
