import React from "react";
import "./SideBar.css";
import { NavLink } from "react-router-dom";

class Sidebar extends React.Component {

    render () {
        let isSidebarToggled = this.props.isSidebarOpen;
        
        return (
            <div>
            {
                isSidebarToggled?
                <div className= "sidenav-ToggledOff">
                    <h1 className = "Sidebar-Name" >F S</h1>
                    <NavLink className = "dropdown-items-toggled" to="/home"> <span className = "fas fa-home"></span> </NavLink>
                    <NavLink className ="dropdown-items-toggled" to="/shop"> <span className = "fas fa-store"></span> </NavLink>
                    <NavLink className = "dropdown-items-toggled" to = "/about"> <span className = "fas fa-address-card"></span> </NavLink>
                    <NavLink className = "dropdown-items-toggled" to = "/contact" > <span className = "far fa-address-card"></span> </NavLink>
                    <a className= "closebtnToggledOff" onClick = {this.props.toggleSidebar}>☰</a>
                </div>
                :
                <div className= "sidenav">
                    <h1 className = "Sidebar-Name" >Flower Shop</h1>
                    <NavLink className = "dropdown-items" to="/home">Home</NavLink>
                    <NavLink className = "dropdown-items" to="/shop">Shop</NavLink>
                    <NavLink className = "dropdown-items" to = "/about"> About </NavLink>                   
                    <NavLink className = "dropdown-items" to = "/contact">Contact</NavLink>
                    <a className= "closebtn" onClick = {this.props.toggleSidebar}>☰</a>
                </div>
            }
            </div>
        )

    }
};

export default Sidebar;
















                // stuff I removed not too important//
                //////////////////////////////////////

                // {isSidebarToggled ? 
                // <button className={flowerBtnClass} onClick = {this.displayDropdownFlowers}>
                //     <span className = "fas fa-tags">
                //         <i className="fa fa-caret-down"></i>        
                //     </span>
                // </button>
                // :
                // <button className={flowerBtnClass} onClick = {this.displayDropdownFlowers}>Flowers
                // <i className="fa fa-caret-down"></i>
                // </button>
                // }
                // {/* sidebar toggler ternary operator for flowers dropdown content*/}
                // {!isSidebarToggled
                //     ?
                //     <div className={dropdownFlowersClass}>
                //         <a className = {dropdownFlowersClass} href="#">Orchids</a>
                //         <a className = {dropdownFlowersClass} href="#">Carnations</a>
                //         <a className = {dropdownFlowersClass} href="#">Daisies</a>
                //         <a className = {dropdownFlowersClass} href="#">Roses</a>
                //         <a className = {dropdownFlowersClass} href="#">Sunflowers</a>
                //         <a className = {dropdownFlowersClass} href="#">Tulips</a>
                //     </div>
                //     :
                //     <div className={dropdownFlowersClass}>
                //         <a className = {dropdownFlowersClass} href="#">O</a>
                //         <a className = {dropdownFlowersClass} href="#">C</a>
                //         <a className = {dropdownFlowersClass} href="#">D</a>
                //         <a className = {dropdownFlowersClass} href="#">R</a>
                //         <a className = {dropdownFlowersClass} href="#">S</a>
                //         <a className = {dropdownFlowersClass} href="#">T</a>
                //     </div>
                //     }
                // {!isSidebarToggled
                //     ? 
                //     <div className={dropdownDIYClass}>
                //     <a className = {dropdownDIYClass} href="#">Seeds</a>
                //     <a className = {dropdownDIYClass} href="#">Soil</a>
                //     <a className = {dropdownDIYClass} href="#">Buckets</a>
                //     </div>
                //     :
                //     <div className={dropdownDIYClass}>
                //         <a className = {dropdownDIYClass} href="#">S</a>
                //         <a className = {dropdownDIYClass} href="#">S</a>
                //         <a className = {dropdownDIYClass} href="#">B</a>
                //     </div>
                //     }
                // { !isSidebarToggled ?
                //     <button className={DIYBtnClass} onClick = {this.displayDropdownDIY}>DIY
                //         <i className="fa fa-caret-down"></i>
                //     </button>
                //     :
                //     <button className={DIYBtnClass} onClick = {this.displayDropdownDIY}>
                //         <span className = "fas fa-seedling">
                //             <i className="fa fa-caret-down"></i>
                //         </span>
                //     </button>
                //     }