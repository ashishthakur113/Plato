import React, { useContext, useEffect, useState } from 'react';
import './PlaceOrder.css';
import { useDispatch, useSelector } from 'react-redux';
import { getTotalCartAmount } from '../../redux-tookit/CartSlice';
import { toast } from 'react-toastify';
import { Link, useNavigate } from 'react-router-dom';
import { StoreContext } from '../../context/StoreContext';
import { clearCart } from '../../redux-tookit/CartSlice';

export default function PlaceOrder() {

  const totalAmount = useSelector(getTotalCartAmount);
  const { user } = useSelector(state => state.auth);
  const {food_list} = useContext(StoreContext)
  const dispatch = useDispatch()
  const navigate = useNavigate();

  const [formData, setFormData] = useState(() => {
    const saved = JSON.parse(localStorage.getItem("deliveryInfo"));
    return saved || {
      firstName: "",
      lastName: "",
      email: user?.email || "",
      street: "",
      area: "",
      city: "",
      state: "",
      zip: "",
      phone: "",
    };
  });

  const cartItems = JSON.parse(localStorage.getItem('carts'))?.[user?.email] || {};

  const orderItems = food_list
    .filter(item => cartItems[item._id]>0)
    .map(item=>({
      id:item._id,
      name:item.name,
      image: item.image,
      quantity: cartItems[item._id],
    }));

  const handlePlaceOrder = (e) => {
    e.preventDefault()
;    if (totalAmount === 0) {
      toast.error("Your cart is empty");
      return;
      
    }

    const existingOrders = JSON.parse(localStorage.getItem("orders")) || [];

    const newOrder = {
      id: Date.now(),
      date: new Date().toLocaleDateString(),
      total: totalAmount + 2,
      itemsCount:orderItems.reduce((a,b)=> a+b.quantity ,0),
      items:  orderItems,
      address: {
        firstName: formData.firstName,
        lastName: formData.lastName,
        street: formData.street,
        city: formData.city,
        state: formData.state,
        zip: formData.zip,
        country: formData.area,
        phone: formData.phone,
      },
    };

    localStorage.setItem(
      "orders", JSON.stringify([...existingOrders, newOrder])
    );
    dispatch(clearCart());
    toast.success("Order Placed Successfully")
    navigate("/yourOrder");
  }

  useEffect(() => {
    localStorage.setItem("deliveryInfo", JSON.stringify(formData));
  }, [formData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <form className="place-order" onClick={handlePlaceOrder}>
      <div className="place-order-left">
        <p className="title">Delivery Information</p>

        <div className="multi-fields">
          <input
            name="firstName"
            placeholder="First Name"
            value={formData.firstName}
            onChange={handleChange}
            required
          />
          <input
            name="lastName"
            placeholder="Last Name"
            value={formData.lastName}
            onChange={handleChange}
            required
          />
        </div>

        <input
          name="email"
          placeholder="Email address"
          value={formData.email}
          disabled
        />

        <input
          name="street"
          placeholder="Street"
          value={formData.street}
          onChange={handleChange}
          required
        />
         <input
            name="area"
            placeholder="Area"
            value={formData.area}
            onChange={handleChange}
            required
          />

        <div className="multi-fields">
          <input
            name="city"
            placeholder="City"
            value={formData.city}
            onChange={handleChange}
            required
          />
          <input
            name="state"
            placeholder="State"
            value={formData.state}
            onChange={handleChange}
            required
          />
        </div>

        <div className="multi-fields">
          <input
            name="zip"
            placeholder="Zip-code"
            value={formData.zip}
            onChange={handleChange}
            required
          />
         
        </div>

        <input
          name="phone"
          placeholder="Phone"
          value={formData.phone}
          onChange={handleChange}
          required
        />
      </div>

      <div className="place-order-right">
        <div className="cart-total">
          <h2>Cart Totals</h2>

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
            <b>$ {totalAmount === 0 ? 0 : totalAmount + 2}</b>
          </div>

          <button type="submit" >
            PROCEED TO PAYMENT
          </button>
        </div>
      </div>
    </form>
  );
}
