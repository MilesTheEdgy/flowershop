import React from "react";
import "./SideBar.css";
import { Link } from "react-router-dom";
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
                
                <Link className = {sidebarActive?"dropdown-items-toggled" : "dropdown-items"  } to="/home">Home</Link>
                <Link className = {sidebarActive?"dropdown-items-toggled" : "dropdown-items"  } to="/shop">Shop</Link>
                <button className={flowerBtnClass} onClick = {this.displayDropdownFlowers}>Flowers
                    <i className="fa fa-caret-down"></i>
                </button>

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
                <button className={DIYBtnClass} onClick = {this.displayDropdownDIY}>DIY
                    <i className="fa fa-caret-down"></i>
                </button>
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
                <Link className = {sidebarActive?"dropdown-items-toggled" : "dropdown-items"  } to = "/about"> About </Link>
                <a className = {sidebarActive?"dropdown-items-toggled" : "dropdown-items"  } href="#contact">Contact</a>
                <a className={sidebarActive?"closebtnToggledOff" : "closebtn"  } onClick = {this.toggleNav}>☰</a>
            </div>
        )
    }
};

export default Sidebar;