import React from "react";
import "./CartItem.css"

const CartItem = (props) => {
    return (
        <div className = "cart-item">
            <p className = "cart-item-child">Roses</p>
            <p className = "cart-item-child">Beautiful hand picked roses fresh out of our gardins</p>
            <p className = "cart-item-child">$ 9.99</p>
            <button className = "cart-item-child">delete</button>
        </div>
    )
}

export default CartItem