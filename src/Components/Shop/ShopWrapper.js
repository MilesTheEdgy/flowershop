import { connect } from "react-redux";
import Shop from "./Shop.js"
import { AddItemToCart } from "../SideBar/Redux"


const mapStateToProps = (state) => {
    return {
        isSidebarOpen: state.isSidebarOpen,
        isModalOpen: state.isModalOpen,
        productData: state.productData
    }
}



const mapDispatchToProps = (dispatch) => {
    return {
        addItemToCart: (clickedProduct) => {
            dispatch(AddItemToCart({clickedProduct: clickedProduct}))
        }
    }
}   

export default connect(mapStateToProps, mapDispatchToProps)(Shop);