import { connect } from "react-redux";
import Header from "./Header.js"
import {userStringFnc} from "../SideBar/Redux"

const mapStateToProps = (state) => {
    return {
        isSidebarOpen: state.isSidebarOpen,
        isModalOpen: state.isModalOpen,
        currentUsername: state.currentUser.username,
        cartItemAmount: state.cartItemAmount,
        isUserLoggedIn: state.currentUser.isUserLoggedIn
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
        displayShoppingCartModal: (username) => {
            if (username === "User") {
                dispatch({type: "NOT_SIGNED_IN"})
            } else {
            dispatch({type: "CALCULATE_TOTAL"})
            dispatch({type: "DISPLAY_SHOPPING_CART_MODAL"})
            }
        },
        logOutUser: () => {
            dispatch({type: "LOG_OUT_USER"})
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);