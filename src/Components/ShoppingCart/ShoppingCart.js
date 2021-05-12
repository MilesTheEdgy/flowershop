import React, { useEffect } from "react";
import { connect } from "react-redux";
import { removeItemFromCart } from "../SideBar/Redux"
import ReactDOM from "react-dom";
import { CSSTransition } from "react-transition-group";
import "./ShoppingCart.css";
import CartItem from "./CartItem";

const ShoppingCart = (props) => {
  const closeOnEscapeKeyDown = e => {
    if ((e.charCode || e.keyCode) === 27) {
      props.modalClosed();
    }
  };

  useEffect(() => {
    document.body.addEventListener("keydown", closeOnEscapeKeyDown);
    return function cleanup() {
      document.body.removeEventListener("keydown", closeOnEscapeKeyDown);
    };
  }, []);

  return ReactDOM.createPortal(
    <CSSTransition
      in={props.isShoppingCartModalOpen}
      unmountOnExit
      timeout={{ enter: 0, exit: 300 }}
    >
      <div className="shopping-cart-modal" onClick={props.modalClosed}>
        <div className="shopping-cart-modal-content" onClick={e => e.stopPropagation()}>
            <div className = "shopping-cart-modal-header">
                <p className = "shopping-cart-modal-header-child">Name</p>
                <p className = "shopping-cart-modal-header-child">Description</p>
                <p className = "shopping-cart-modal-header-child">Price</p>
            </div>
            <div className = "shopping-cart-modal-body">
                { 
                  props.shoppingCart.map((product) => {
                  return <CartItem 
                  name = {product.name}
                  text = {product.text}
                  price = {product.price} 
                  key = {product}
                  removeItem = {() => props.removeItemFromCart(product)}
                   />
                })
                }
            </div>
            <div className = "shopping-cart-modal-footer">
                <p>Your total is ${props.calculatedTotal}</p>
                <button className = "shopping-cart-modal-footer-button"> Accept </button>
            </div>
        </div>
      </div>
    </CSSTransition>,
    document.getElementById("root")
  );
};




const mapStateToProps = (state) => {
    return {
        isShoppingCartModalOpen: state.isShoppingCartModalOpen,
        shoppingCart: state.shoppingCart,
        calculatedTotal: state.calculatedTotal
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        modalClosed : () => {
            dispatch({type: "CLOSE_MODAL"})
        },
        removeItemFromCart: (product) => {
          dispatch(removeItemFromCart({removedProduct: product}));
          dispatch({type: "CALCULATE_TOTAL"});
        }
    }
}   

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCart);