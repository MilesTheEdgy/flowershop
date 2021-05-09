import { connect } from "react-redux";
import Header from "./Header.js"
import {userStringFnc} from "../SideBar/Redux"

const mapStateToProps = (state) => {
    return {
        isSidebarOpen: state.isSidebarOpen,
        isModalOpen: state.isModalOpen,
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
        filterByValue: (e) => {
            let input = e.target.value
            dispatch(userStringFnc({value: input}))
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);