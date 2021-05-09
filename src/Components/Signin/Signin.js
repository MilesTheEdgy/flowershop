import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { CSSTransition } from "react-transition-group";
import "./Signin.css";

const Modal = (props) => {
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

  const [usernameInput, setUsernameInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");

  return ReactDOM.createPortal(
    <CSSTransition
      in={props.isModalOpen}
      unmountOnExit
      timeout={{ enter: 0, exit: 300 }}
    >
      <div className="modal" onClick={props.modalClosed}>
        <div className="modal-content" onClick={e => e.stopPropagation()}>
          <div className="modal-header">
            <h4 className="modal-title">Sign in</h4>
          </div>
          <div className="modal-body">
              <div className = "modal-input-field">
                <div className = "modal-username-field">
                    <p className = "p-username">Username</p>
                    <input onChange = {(e) => setUsernameInput(e.target.value)} tag = "username" placeholder = "eg: muhammet-aldulaimi"/> 
                </div>
                <div className = "modal-password-field">
                    <p className = "p-password">Password</p>
                    <input onChange = {(e) => setPasswordInput(e.target.value)} type = "password" tag = "password" placeholder = "eg: someStrongPassword123"/> 
                </div>
              </div>
              <div className = "modal-submit"> 
                <button onClick = {() => props.logInHandler(usernameInput, passwordInput)} className = "modal-submit-button">Submit</button>
              </div>
          </div>
          <div className="modal-footer">
            <p className = "modal-sign-up-paragraph">New? <a className = "modal-sign-up-link" onClick = {props.signUpModalOpened}>sign up!</a></p>
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

export default Modal;
