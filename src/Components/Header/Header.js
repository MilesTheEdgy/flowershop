import React from "react";

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
                            <p className="btn" 
                                    onClick = {() => {console.log(this.props.userData)}}>Search</p>
                        </form>
                    </div>
                </div>  
            </nav>
        )
    }
};

export default Header;
