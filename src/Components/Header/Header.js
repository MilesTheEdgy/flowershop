import React from "react";
import "./Header.css"

class Header extends React.Component {

    render () {
        return (
            <nav className={this.props.isSidebarOpen ? "navbar bg-transparent NaviBar-Closed" : "navbar bg-transparent NaviBar"}>
                <div className="container-fluid">
                    <div className="navbar-brand">Welcome <strong>User</strong>
                     </div>
                    <div className = "d-flex justify-content-end">
                        <a className = "nav-link" onClick = {this.props.modalOpened}>Sign In</a>
                        <form className="d-flex">
                            <input className="form-control me-2"
                                type="search" 
                                placeholder="Search"
                                onChange = {this.props.filterByValue}
                            />
                        </form>
                    </div>
                </div>  
            </nav>
        )
    }
};

export default Header;
