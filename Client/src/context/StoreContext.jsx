import React, { createContext, useState } from "react";
import { food_list } from "../assets/assets";

export const storeContext = createContext(null)

const storeContextProvider = (props) => {

    const [cartItems, setCartItems] = useState({});

    const addToCart = (itemId) => {
        if (!cartItems[itemId]) {
            setCartItems((prev)=>({...prev, [itemId]: 1}))
        }
        else{
            setCartItems((prev)=>({...prev, [itemId]: prev[itemId]+1}))
        }
    }

    const removeFromCart = (itemId)=>{
        setCartItems((prev)=>({...prev, [itemId]: prev[itemId]-1}))
    }

    const getTotalPrice = () => {
        let totalPrice = 0;
        for(let item in cartItems){
            if (cartItems[item] > 0){
                let itemData = food_list.find((product)=>product._id === item);
            totalPrice += itemData.price * cartItems[item];
            }}
            return totalPrice;
    }

    const contextValue = {
        food_list,
        cartItems,
        setCartItems,
        addToCart,
        removeFromCart,
        getTotalPrice
    }
    
    return (
        <storeContext.Provider value={contextValue}>
            {props.child}
        </storeContext.Provider>
    )
}


export default storeContextProvider;