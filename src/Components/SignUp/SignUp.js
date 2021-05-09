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
      <div className="modal" onClick={props.modalClosed}>
        <div className="modal-content" onClick={e => e.stopPropagation()}>
          <div className="modal-header">
            <h4 className="modal-title">Sign Up</h4>
          </div>
          <div className="modal-body">
              <div className = "modal-input-field">
                <div className = "modal-username-field">
                    <p className = "p-username">Username</p>
                    <input tag = "username"
                           placeholder = "eg: muhammet-aldulaimi"
                           onChange = {userNameHandler}
                      /> 
                </div>
                <div className = "modal-password-field">
                    <p className = "p-password">Password</p>
                    <input tag = "password"
                           type = "password"
                           placeholder = "eg: someStrongPassword123"
                           onChange = {userPasswordHandler}
                    /> 
                </div>
              </div>
              <div className = "modal-submit"> 
                <button onClick = {() => props.userInfoSubmitHandler(userNameInput, userPasswordInput)}
                        className = "modal-submit-button">Submit
                </button>
              </div>

          </div>
          <div className="modal-footer">
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
        userData: state.userData
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
            console.log("reached prop successfully")
            console.log(username, password, "values for username and password in prop")
            dispatch(signUpUser({userName: username, userPassword: password}))
        },
        triggerTest: () => {
          dispatch({type: "TRIGGER_USER_VALUE"})
        }
    }
}   

export default connect(mapStateToProps, mapDispatchToProps)(SignUpModal);