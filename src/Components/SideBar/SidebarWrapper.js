import { connect } from "react-redux";
import Sidebar from "./SideBar.js"


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

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);