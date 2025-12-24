import React, { useContext } from 'react'
import './FoodItem.css'
import { assets } from '../../assets/assets'
import { FaLeaf } from "react-icons/fa";
import { GiChickenOven } from "react-icons/gi";
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, decrement } from '../../redux-tookit/CartSlice';
import {toast } from 'react-toastify';


export default function FoodItem({id , name , price , description ,image , type}) {
 
  const cartItems = useSelector((state)=>state.cart.cartItems)
  const {isAuthenticated}  = useSelector(state => state.auth);
  const dispatch = useDispatch();

  return (
    <div className='food-item'>
        <div className="food-item-img-cont">
            <img src={image} alt="" className="food-item-img" />
            <span  className={`food-type-badge ${type}`}>{type ==="veg"?<FaLeaf />:<GiChickenOven/>}</span>
            {
              !cartItems[id] 
              ? <img className='add' src={assets.add_icon_white} 
                  onClick={()=>{
                    if(!isAuthenticated){
                      toast.error("please login first");
                      return ;
                    }
                  dispatch(addToCart(id)) ; 
                  toast.success("Added to Cart")}} alt="" 
                />
              : <div className='food-item-counter'>
                 <img src={assets.remove_icon_red} 
                    onClick={()=>dispatch(decrement(id))} alt=""
                  />
                 <p>{cartItems[id]}</p>
                 <img src={assets.add_icon_green} onClick={()=>dispatch(addToCart(id))} alt="" />
              </div>
             }
        </div>
        <div className='food-item-info'>
            <div className="food-item-name-rating">
                <p>{name}</p>
                <img src={assets.rating_starts} alt="" />
            </div>
            <p className="food-item-desc">{description}</p>
            <p className='food-item-price'>${price}</p>
        </div>
    </div> 
  )
}
