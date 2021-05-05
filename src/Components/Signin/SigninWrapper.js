import { connect } from "react-redux";
import Signin from "./Signin.js"


const mapStateToProps = (state) => {
    return {
        isModalOpen: state.isModalOpen
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