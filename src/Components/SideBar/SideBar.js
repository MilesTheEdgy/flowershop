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
        
        let flowerBtnClass = classNames({
            "dropdown-btn": !this.state.isDropdownActiveFlowers,
            "dropdown-btn active": this.state.isDropdownActiveFlowers,
            });
        let DIYBtnClass = classNames({
            "dropdown-btn": !this.state.isDropdownActiveDIY,
            "dropdown-btn active": this.state.isDropdownActiveDIY,
            });
        let dropdownFlowersClass = classNames({
            "dropdown-container-off": !this.state.isDropdownActiveFlowers,
            "dropdown-container-on": this.state.isDropdownActiveFlowers,
            });
        let dropdownDIYClass = classNames({
            "dropdown-container-off": !this.state.isDropdownActiveDIY,
            "dropdown-container-on": this.state.isDropdownActiveDIY,
            });

        return (
            <div className={sidebarActive?"sidenav-ToggledOff" : "sidenav"  }>
                <h1 className = "Sidebar-Name" >Flower Shop</h1>
                
                <Link className = {sidebarActive?"dropdown-itemsToggledOff" : "dropdown-items"  } to="/home">Home</Link>
                <Link className = {sidebarActive?"dropdown-itemsToggledOff" : "dropdown-items"  } to="/shop">Shop</Link>
                <button className={flowerBtnClass} onClick = {this.displayDropdownFlowers}>Flowers
                    <i className="fa fa-caret-down"></i>
                </button>
                    <div className={dropdownFlowersClass}>
                        <a className = "dropdown-items" href="#">Orchids</a>
                        <a className = "dropdown-items" href="#">Carnations</a>
                        <a className = "dropdown-items" href="#">Daisies</a>
                        <a className = "dropdown-items" href="#">Roses</a>
                        <a className = "dropdown-items" href="#">Sunflowers</a>
                        <a className = "dropdown-items" href="#">Tulips</a>
                    </div>
                <button className={DIYBtnClass} onClick = {this.displayDropdownDIY}>DIY
                    <i className="fa fa-caret-down"></i>
                </button>
                    <div className={dropdownDIYClass}>
                        <a className = "dropdown-items" href="#">Seeds</a>
                        <a className = "dropdown-items" href="#">Soil</a>
                        <a className = "dropdown-items" href="#">Buckets</a>
                    </div>
                <Link className = "dropdown-items" to = "/about"> About </Link>
                <a className = "dropdown-items" href="#contact">Contact</a>
                <a className={sidebarActive?"closebtnToggledOff" : "closebtn"  } onClick = {this.toggleNav}>☰</a>
            </div>
        )
    }
};

export default Sidebar;