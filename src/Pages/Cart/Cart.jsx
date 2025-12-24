import React, { useContext, useEffect } from 'react'
import './Cart.css'
import { StoreContext } from '../../context/StoreContext'
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getTotalCartAmount, removerFromCart, decrement, increment, saveCart } from '../../redux-tookit/CartSlice'
import { toast } from 'react-toastify';
import { MdOutlineDeleteOutline } from "react-icons/md";

export default function Cart() {

  const cartItems = useSelector((state) => state.cart.cartItems)
  const totalAmount = useSelector(getTotalCartAmount)
  const dispatch = useDispatch()
  const { food_list } = useContext(StoreContext)
  const navigate = useNavigate()

  useEffect(()=>{
    dispatch(saveCart());
  },[cartItems]);

  
  return (
    <div className='cart'>
      <div className="cart-items">
        <div className="cart-items-title">
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br />
        <hr />
        {
          food_list.map((item, index) => {
            if (cartItems[item._id] > 0) {
              return (
                <div key={index}>
                  <div className="cart-items-title cart-items-item" >
                    <img src={item.image} alt="" />
                    <p className='item-name'>{item.name}</p>
                    <p>$ {item.price}</p>
                    <div className='qty'>
                      <button className='cart-btn decrement' onClick={() => {
                        if (cartItems[item._id] > 1) dispatch(decrement(item._id));
                      }}>-</button>
                      <span className='item-qty'>{cartItems[item._id]}</span>
                      <button className='cart-btn increment' onClick={()=>dispatch(increment(item._id))}>+</button>
                    </div>
                    <p>$ {item.price * cartItems[item._id]}</p>
                    <p onClick={() => {dispatch(removerFromCart(item._id)) ; toast.info("Item Removed From Cart")}} className='cross'><MdOutlineDeleteOutline style={{color:"red" ,marginLeft:"20px" ,fontSize:"20px"}}/></p>
                  </div>
                  <hr />
                </div>
              )}
          })}
      </div>
      <div className="cart-bottom">
        <div className="cart-total">
          <h2>Cart Totals</h2>
          <div>
            <div className="cart-total-details">
              <p>SubTotal</p>
              <p>$ {totalAmount}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <p>Delivery Fee</p>
              <p>$ {totalAmount === 0 ? 0 : 2}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <b>Total</b>
              <b>$ {totalAmount === 0 ? 0 : totalAmount + 2}</b> {/* 2 for delivery fee */}
            </div>
          </div>
          <button onClick={() => navigate("/order")}>PROCEED TO CHECKOUT</button>
        </div>
        <div className="cart-promocode">
          <div>
            <p>If you have a promo code , Enter it here</p>
            <div className="cart-promocode-input">
              <input type="text" placeholder='promo Code' />
              <button>Submit</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
