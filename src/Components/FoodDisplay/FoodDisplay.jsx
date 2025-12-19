import React, { useContext } from 'react'
import { StoreContext } from '../../context/StoreContext'
import './FoodDisplay.css'
import FoodItem from '../FoodItem/FoodItem'

export default function FoodDisplay({category}) {

    const {food_list} = useContext(StoreContext)

  return (
    <div className='food-display' id='food-display'>
        <h2>Top Dishes near you</h2>
        <div className="food-display-list">
            {
                food_list.map((item,index)=>{
                    if(category==="All" || category===item.category){
                       return<FoodItem key={index} id={item._id} type={item.type} name={item.name} description={item.description} price={item.price} image={item.image} />
                    }
                })
            }
        </div>
    </div>
  )
}
