import React from 'react'
import './Order.css'
import {storeContext} from '../context/storeContext.jsx';
const Order = () => {

  const {getTotalPrice} = useContext(storeContext);
  
  return (
    <form className='orders'>
      <div className="orders-left">
        <p className="delivery-info">Delivery Information</p>
        <div className="multi-fields">
          <input type="text" placeholder='First Name' />
          <input type="text" placeholder='Last Name' />
        </div>
        <input type="email" placeholder='Email' />
        <input type="text" placeholder='Phone Number' />
        <div className="multi-fields">
          <input type="text" placeholder='Street' />
          <input type="text" placeholder='Apartment' />
        </div>
        <div className="multi-fields">
          <input type="text" placeholder='Postal Code' />
          <input type="text" placeholder='City' />
        </div>
      </div>
      <div className="orders-right">
        <div className="cart-total">
          <h2>Total Price</h2>
          <div>
            <div className="total-price">
              <p>Food Price</p>
              <p>${getTotalPrice()}</p>
            </div>
            <hr />
            <div className="total-price">
              <p>Delivery Charges</p>
              <p>${getTotalPrice()===0?0:2}</p>
            </div>
            <hr />
            <div className="total-price">
              <b>In Total</b>
              <b>${getTotalPrice()===0?0:getTotalPrice() + 2}</b>
            </div>
          </div>
          <button>Payment</button>
        </div>
      </div>
    </form>
  )
}

export default Order