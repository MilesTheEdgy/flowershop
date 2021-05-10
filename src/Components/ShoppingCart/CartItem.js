import React from "react";
import "./CartItem.css"

const CartItem = (props) => {
    return (
        <div className = "cart-item">
            <p>Roses</p>
            <p>Beautiful hand picked roses fresh out of our gardins</p>
            <p>$ 9.99</p>
            <button>Remove</button>
        </div>
    )
}

export default CartItem