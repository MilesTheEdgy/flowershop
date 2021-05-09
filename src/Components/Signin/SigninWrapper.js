import { connect } from "react-redux";
import Signin from "./Signin.js"
import {logInUser} from "../SideBar/Redux"


const mapStateToProps = (state) => {
    return {
        isModalOpen: state.isModalOpen,
        isSignupModalOpened: state.isSignupModalOpened
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
        signUpModalOpened: () => {
           dispatch({type: "OPEN_SIGNUP_MODAL"})
        },
        logInHandler: (username, password) => {
            dispatch(logInUser({username: username, password: password}))
        }
    }
}   

export default connect(mapStateToProps, mapDispatchToProps)(Signin);