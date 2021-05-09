import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import {signUpUser} from "../SideBar/Redux"
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

  const [userNameInput, setUserNameInput] = useState("");
  const [userPasswordInput, setUserPasswordInput] = useState("")

  const userNameHandler = (e) => {
    setUserNameInput(e.target.value)
  }
 
  const userPasswordHandler = (e) => {
    setUserPasswordInput(e.target.value)
  }

  return ReactDOM.createPortal(
    <CSSTransition
      in={props.isSignupModalOpened}
      unmountOnExit
      timeout={{ enter: 0, exit: 300 }}
    >
      <div className="signup-modal" onClick={props.modalClosed}>
        <div className="signup-modal-content" onClick={e => e.stopPropagation()}>
          <div className="signup-modal-header">
            <h4 className="signup-modal-title">Sign Up</h4>
          </div>
          <div className="signup-modal-body">
              <div className = "signup-modal-input-field">
                <div className = "signup-modal-username-field">
                    <p className = "p-username">Username</p>
                    <input tag = "username"
                           placeholder = "eg: muhammet-aldulaimi"
                           onChange = {userNameHandler}
                      /> 
                </div>
                <div className = "signup-modal-password-field">
                    <p className = "p-password">Password</p>
                    <input tag = "password"
                           type = "password"
                           placeholder = "eg: someStrongPassword123"
                           onChange = {userPasswordHandler}
                    /> 
                </div>
              </div>
              <div className = {props.signupUserIncompleteInput ? "signup-modal-error-messsge-active" : "signup-modal-error-messsge"}>
                <p>Please make sure you filled both fields</p>
              </div>
              <div className = "signup-modal-submit"> 
                <button onClick = {() => props.userInfoSubmitHandler(userNameInput, userPasswordInput)}
                        className = "signup-modal-submit-button"
                        type = "submit">Submit
                </button>
              </div>

          </div>
          <div className="signup-modal-footer">
            <button className="button" onClick={props.modalClosed} >
              Close
            </button>
          </div>
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
        userData: state.userData,
        signupUserIncompleteInput: state.signupUserIncompleteInput
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
        userInfoSubmitHandler: (username, password) => {
            // console.log("reached prop successfully")
            // console.log(username, password, "values for username and password in prop")
            if (username === ""){
              dispatch({type: "ERROR_MESSAGE"})
            }
            else if (password === ""){
              dispatch({type: "ERROR_MESSAGE"})
            }  else {
              dispatch(signUpUser({userName: username, userPassword: password}))
            }
        },
        triggerTest: () => {
          dispatch({type: "TRIGGER_USER_VALUE"})
        }
    }
}   

export default connect(mapStateToProps, mapDispatchToProps)(SignUpModal);