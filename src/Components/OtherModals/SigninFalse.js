import React, { useEffect } from "react";
import { connect } from "react-redux";
import { sendUserNameData, sendPasswordData } from "../SideBar/Redux"
import ReactDOM from "react-dom";
import { CSSTransition } from "react-transition-group";
import "./SignInFalse.css"

const SigninFalse = (props) => {
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
      in={props.userNotSignedIn}
      unmountOnExit
      timeout={{ enter: 0, exit: 300 }}
    >
          <div className="modal" onClick = {props.modalClosed}>
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body">
                  <p>You cannot access the cart while not signed in</p>
                </div>
                <div className="modal-footer">
                  <button type="button" className="btn btn-secondary  invisible" data-bs-dismiss="modal">Close</button>
                </div>
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
        userNotSignedIn: state.errorMessages.userNotSignedIn,
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

export default connect(mapStateToProps, mapDispatchToProps)(SigninFalse);