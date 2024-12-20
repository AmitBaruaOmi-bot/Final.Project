import React, { useContext } from 'react'
import './Cart.css'
import { useNavigate } from 'react-router-dom';
import { storeContext } from '../context/storeContext.jsx';
const Cart = () => {

  const [cartItems, food_list, removeFromCart, getTotalPrice] = useContext(storeContext);

  const navigate = useNavigate;

  return (
    <div className="cart">
      <div className="cart-ttems">
        <div className="cart-items-title">
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quamtity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br />
        <hr />
        {food_list.map((item, index) => {
          if (cartItems[item._id] > 0) {
            return (
              <div>
                <div className='cart-items-title cart-items-product'>
                  <img src={item.image} alt="" />
                  <p>{item.name}</p>
                  <p>${item.price}</p>
                  <p>{cartItems[item._id]}</p>
                  <p>${itemm.price * cartItems[item._id]}</p>
                  <p onClick={() => removeFromCart(item._id)} className='cross'>x</p>
                </div>
                <hr />
              </div>
            )
          }
        })}
      </div>
      <div className="cart-bottom">
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
              <b>${getTotalPrice()+2}</b>
            </div>
          </div>
          <button onClick={()=>navigate('/order')}>Chcekout</button>
        </div>
        <div className="promocode">
          <div>
            <p>Enter your promocode</p>
            <div className="promocode-input">
              <input type="text" placeholder='promocode'/>
              <button>Submit</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart