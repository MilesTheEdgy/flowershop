import { connect } from "react-redux";
import Shop from "./Shop.js"


const mapStateToProps = (state) => {
    return {
        isSidebarOpen: state.isSidebarOpen,
        isModalOpen: state.isModalOpen,
        productData: state.productData
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

export default connect(mapStateToProps, mapDispatchToProps)(Shop);