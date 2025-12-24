import React, { useEffect, useState } from 'react';
import './OrderHistory.css';

export default function OrderHistory() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const savedOrders = JSON.parse(localStorage.getItem("orders")) || [];
    setOrders(savedOrders.reverse());
  }, []);

  if (orders.length === 0) {
    return <p className="no-orders">No Orders Placed yet.</p>;
  }

  return (
    <div className="order-history">
      <h2>Your Orders</h2>

      {orders.map(order => (
        <div key={order.id} className="order-card">

          
          <div className="order-meta">
            <p><b>Order ID:</b> {order.id}</p>
            <p><b>Date:</b> {order.date}</p>
            <p className="status pending">Pending</p>
          </div>

       
          <div className="order-items">
            {(order.items || []).map(item => (
              <div key={item.id} className="order-item">
                <img src={item.image} alt={item.name} />
                <div>
                  <p className="item-name">{item.name}</p>
                  <p className="item-qty">Qty: {item.quantity}</p>
                </div>
              </div>
            ))}
          </div>

        
          <div className="order-total">
            <b>Total:</b> $ {order.total}
          </div>

        </div>
      ))}
    </div>
  );
}
