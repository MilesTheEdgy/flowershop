import React from "react";
import "./Header.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

class Header extends React.Component {

    render () {
        return (
            <nav className={this.props.isSidebarOpen ? "navbar bg-transparent NaviBar-Closed" : "navbar bg-transparent NaviBar"}>
                <div className="container-fluid">
                    <div className="navbar-brand">Welcome <strong>{this.props.currentUsername}</strong>
                     </div>
                    <div className = "items-aligned-end d-flex justify-content-end">
                        <span className="fa-layers fa-2x fa-fw" onClick = {this.props.displayShoppingCartModal}>
                            <FontAwesomeIcon icon={faShoppingCart} />
                            <span className="fa-layers-counter fontawesome-counter">{this.props.cartItemAmount}</span>
                        </span>
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
