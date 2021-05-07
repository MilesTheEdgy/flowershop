import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import { CSSTransition } from "react-transition-group";
import "./SignUp.css";

const SignUpModal = (props) => {
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
      in={props.isSignupModalOpened}
      unmountOnExit
      timeout={{ enter: 0, exit: 300 }}
    >
      <div className="modal" onClick={props.modalClosed}>
        <div className="modal-content" onClick={e => e.stopPropagation()}>
          <div className="modal-header">
            <h4 className="modal-title">Sign Up</h4>
          </div>
          <div className="modal-body">
              <div className = "modal-input-field">
                <div className = "modal-username-field">
                    <p className = "p-username">Username</p>
                    <input tag = "username" placeholder = "eg: muhammet-aldulaimi"/> 
                </div>
                <div className = "modal-password-field">
                    <p className = "p-password">Password</p>
                    <input tag = "password" placeholder = "eg: someStrongPassword123"/> 
                </div>
              </div>
              <div className = "modal-submit"> 
                <button className = "modal-submit-button">Submit</button>
              </div>
          </div>
          <div className="modal-footer">
            <button className="button" onClick={props.closeModal} >
              Close
            </button>
          </div>
        </div>
      </div>
    </CSSTransition>,
    document.getElementById("root")
  );
};

export default SignUpModal;
