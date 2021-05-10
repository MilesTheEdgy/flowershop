import React, { useEffect } from "react";
import { connect } from "react-redux";
import { sendUserNameData, sendPasswordData } from "../SideBar/Redux"
import ReactDOM from "react-dom";
import { CSSTransition } from "react-transition-group";
import "./SignUp.css";

const SignedUpModal = (props) => {
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
      in={props.didUserSignUp}
      unmountOnExit
      timeout={{ enter: 0, exit: 300 }}
    >
      <div className="signup-modal" onClick={props.modalClosed}>
       <div className = "signup-modal-content" onClick={e => e.stopPropagation()}> 
          <div className = "signedup-modal-user-signedup">
            <p className = "signedup-modal-thankyou">Thank you for signing up</p>
            <p className = "signedup-modal-signInParagraph">Please sign in with your credentials</p>
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
        userDataInput: state.userDataInput,
        signupUserIncompleteInput: state.errorMessages.signupUserIncompleteInput,
        didUserSignUp: state.didUserSignUp
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

export default connect(mapStateToProps, mapDispatchToProps)(SignedUpModal);