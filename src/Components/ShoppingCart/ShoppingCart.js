import React, { useEffect } from "react";
import { connect } from "react-redux";
import { sendUserNameData, sendPasswordData } from "../SideBar/Redux"
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
                <p className = "shopping-cart-modal-header-children">Name</p>
                <p className = "shopping-cart-modal-header-children">Description</p>
                <p className = "shopping-cart-modal-header-children">Price</p>
                <button className = "shopping-cart-modal-header-children shopping-cart-phantom-button">delete</button>
            </div>
            <div className = "shopping-cart-modal-body">
                <CartItem/>
            </div>
            {/* <div className = "shopping-cart-modal-footer">
              this is the footer
            </div> */}
        </div>
      </div>
    </CSSTransition>,
    document.getElementById("root")
  );
};




const mapStateToProps = (state) => {
    return {
        isModalOpen: state.isModalOpen,
        isSignupModalOpened: state.isSignupModalOpened,
        userDataInput: state.userDataInput,
        signupUserIncompleteInput: state.errorMessages.signupUserIncompleteInput,
        didUserSignUp: state.didUserSignUp,
        isShoppingCartModalOpen: state.isShoppingCartModalOpen
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        modalOpened : () => {
            dispatch({type: "OPEN_MODAL"})
        },
        modalClosed : () => {
            dispatch({type: "CLOSE_MODAL"})
        },
        userInfoSubmitHandler: () => {
              dispatch({type: "SIGN_UP_USER"})
        },
        userNameHandler: (e) => {
          let userNameValue = e.target.value;
          dispatch(sendUserNameData({username: userNameValue}))
        },
        userPasswordHandler: (e) => {
          let passwordValue = e.target.value;
          dispatch(sendPasswordData({password: passwordValue}))
        },
        triggerTest: () => {
          dispatch({type: "TRIGGER_USER_VALUE"})
        }
    }
}   

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCart);