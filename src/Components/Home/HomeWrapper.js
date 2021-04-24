import { connect } from "react-redux";
import Home from "./Home.js"


const mapStateToProps = (state) => {
    return {
        isSidebarOpen: state.isSidebarOpen
    }
}



const mapDispatchToProps = (dispatch) => {
    return {

        
    }
}   

export default connect(mapStateToProps, mapDispatchToProps)(Home);