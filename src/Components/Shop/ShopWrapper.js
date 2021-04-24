import { connect } from "react-redux";
import Shop from "./Shop.js"


const mapStateToProps = (state) => {
    return {
        isSidebarOpen: state.isSidebarOpen
    }
}



const mapDispatchToProps = (dispatch) => {
    return {

        
    }
}   

export default connect(mapStateToProps, mapDispatchToProps)(Shop);