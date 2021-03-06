import React from "react";
import "./CartItem.css"

const CartItem = ({name, text, price, removeItem}) => {
    return (
        <div className = "cart-item">
            <div className = "cart-item-child">
                <p>{name}</p>
            </div>
            <div className = "cart-item-child">
                <p>{text}</p>  
            </div>
            <div className = "cart-item-child">
                <p>${price}</p>
            </div>
            <div className = "cart-item-child" onClick = {removeItem}>
                <button>Remove</button>
            </div>
        </div>
    )
}

export default CartItem