import { connect } from "react-redux";
import About from "./About.js"


const mapStateToProps = (state) => {
    return {
        isSidebarOpen: state.isSidebarOpen
    }
}



const mapDispatchToProps = (dispatch) => {
    return {
        sidebarChange: () => {
            dispatch({type: "TOGGLE_SIDEBAR"})
        }
    }
}   

export default connect(mapStateToProps, mapDispatchToProps)(About);