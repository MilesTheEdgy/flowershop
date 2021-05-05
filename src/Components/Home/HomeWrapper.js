import { connect } from "react-redux";
import Home from "./Home.js"


const mapStateToProps = (state) => {
    return {
        isSidebarOpen: state.isSidebarOpen,
        didModalGetClicked: state.didModalGetClicked
    }
}



const mapDispatchToProps = (dispatch) => {
    return {

        
    }
}   

export default connect(mapStateToProps, mapDispatchToProps)(Home);