import { connect } from "react-redux";
import SignUpModal from "./SignUp.js"


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
        }
    }
}   

export default connect(mapStateToProps, mapDispatchToProps)(Signin);