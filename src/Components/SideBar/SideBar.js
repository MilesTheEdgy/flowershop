import React from "react";
import "./SideBar.css";
import { NavLink } from "react-router-dom";
import classNames from "classnames";

class Sidebar extends React.Component {

    constructor() {
        super()
        this.state = {
            isDropdownActiveFlowers: false,
            isDropdownActiveDIY: false,
            isSidebarActive : false
        }
    }

    displayDropdownFlowers = () => {
        this.setState({isDropdownActiveFlowers: !this.state.isDropdownActiveFlowers})
 }
    displayDropdownDIY = () => {
        this.setState({isDropdownActiveDIY: !this.state.isDropdownActiveDIY})
}
    toggleNav = () => {
        this.setState({isSidebarActive: !this.state.isSidebarActive})
        this.props.sidebarChange()
        
    }



    render () {
        let sidebarActive = this.state.isSidebarActive;
        
        // classNames conditionals
        let flowerBtnClass = classNames({
            "dropdown-btn": !this.state.isDropdownActiveFlowers,
            "dropdown-btn active": this.state.isDropdownActiveFlowers,
            "dropdown-btn": !this.state.isSidebarActive,
            "dropdown-btnToggledOff": this.state.isSidebarActive
            });
        let DIYBtnClass = classNames({
            "dropdown-btn": !this.state.isDropdownActiveDIY,
            "dropdown-btn active": this.state.isDropdownActiveDIY,
            "dropdown-btn": !this.state.isSidebarActive,
            "dropdown-btnToggledOff": this.state.isSidebarActive
            });
        let dropdownFlowersClass = classNames({
            "dropdown-container-off": !this.state.isDropdownActiveFlowers,
            "dropdown-container-on": this.state.isDropdownActiveFlowers,
            "dropdown-items": !this.state.isSidebarActive,
            "dropdown-items-toggled": this.state.isSidebarActive

            });
        let dropdownDIYClass = classNames({
            "dropdown-container-off": !this.state.isDropdownActiveDIY,
            "dropdown-container-on": this.state.isDropdownActiveDIY,
            "dropdown-items": !this.state.isSidebarActive,
            "dropdown-items-toggled": this.state.isSidebarActive
            });

        return (
            <div className={sidebarActive?"sidenav-ToggledOff" : "sidenav"  }>
                {sidebarActive? <h1 className = "Sidebar-Name" >F S</h1> : <h1 className = "Sidebar-Name" >Flower Shop</h1> }
                {sidebarActive ?
                    <NavLink className = "dropdown-items-toggled" to="/home"> <span className = "fas fa-home"></span> </NavLink>
                    :
                    <NavLink className = "dropdown-items" to="/home">Home</NavLink>
                }
                {sidebarActive ?
                    <NavLink className ="dropdown-items-toggled" to="/shop"> <span className = "fas fa-store"></span> </NavLink>
                    :
                    <NavLink className = "dropdown-items" to="/shop">Shop</NavLink>
                }
                {sidebarActive ? 
                <button className={flowerBtnClass} onClick = {this.displayDropdownFlowers}>
                    <span className = "fas fa-tags">
                        <i className="fa fa-caret-down"></i>        
                    </span>
                </button>
                :
                <button className={flowerBtnClass} onClick = {this.displayDropdownFlowers}>Flowers
                <i className="fa fa-caret-down"></i>
                </button>
                }

                {/* sidebar toggler ternary operator for flowers dropdown content*/}
                {!sidebarActive
                ?
                <div className={dropdownFlowersClass}>
                    <a className = {dropdownFlowersClass} href="#">Orchids</a>
                    <a className = {dropdownFlowersClass} href="#">Carnations</a>
                    <a className = {dropdownFlowersClass} href="#">Daisies</a>
                    <a className = {dropdownFlowersClass} href="#">Roses</a>
                    <a className = {dropdownFlowersClass} href="#">Sunflowers</a>
                    <a className = {dropdownFlowersClass} href="#">Tulips</a>
                </div>
                :
                <div className={dropdownFlowersClass}>
                    <a className = {dropdownFlowersClass} href="#">O</a>
                    <a className = {dropdownFlowersClass} href="#">C</a>
                    <a className = {dropdownFlowersClass} href="#">D</a>
                    <a className = {dropdownFlowersClass} href="#">R</a>
                    <a className = {dropdownFlowersClass} href="#">S</a>
                    <a className = {dropdownFlowersClass} href="#">T</a>
                </div>
                }
                { !sidebarActive ?
                <button className={DIYBtnClass} onClick = {this.displayDropdownDIY}>DIY
                    <i className="fa fa-caret-down"></i>
                </button>
                :
                <button className={DIYBtnClass} onClick = {this.displayDropdownDIY}>
                    <span className = "fas fa-seedling">
                        <i className="fa fa-caret-down"></i>
                    </span>
                </button>
                }
                {/* sidebar toggler ternary operator for DIY dropdown content*/}
                {!sidebarActive
                ? 
                <div className={dropdownDIYClass}>
                <a className = {dropdownDIYClass} href="#">Seeds</a>
                <a className = {dropdownDIYClass} href="#">Soil</a>
                <a className = {dropdownDIYClass} href="#">Buckets</a>
                </div>
                :
                <div className={dropdownDIYClass}>
                    <a className = {dropdownDIYClass} href="#">S</a>
                    <a className = {dropdownDIYClass} href="#">S</a>
                    <a className = {dropdownDIYClass} href="#">B</a>
                </div>
                }
                {sidebarActive ?
                    <NavLink className = "dropdown-items-toggled" to = "/about"> <span className = "fas fa-address-card"></span> </NavLink>
                    :
                    <NavLink className = "dropdown-items" to = "/about"> About </NavLink>                   
                }
                {sidebarActive ?
                    <NavLink className = "dropdown-items-toggled" to = "/contact" > <span className = "far fa-address-card"></span> </NavLink>
                    :
                    <NavLink className = "dropdown-items" to = "/contact">Contact</NavLink>
                }
                <a className={sidebarActive && this.props.isSidebarOpen?"closebtnToggledOff" : "closebtn"  } onClick = {this.toggleNav}>☰</a>
            </div>
        )

    }
};




export default Sidebar;