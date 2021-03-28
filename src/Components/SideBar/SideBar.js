import React from "react";
import "./SideBar.css";

class Sidebar extends React.Component {

    constructor() {
        super()
        this.state = {
            isDropdownActiveFlowers: false,
            isDropdownActiveDIY: false
        }
    }

    displayDropdownFlowers = () => {
        this.setState({isDropdownActiveFlowers: !this.state.isDropdownActiveFlowers})
 }
    displayDropdownDIY = () => {
        this.setState({isDropdownActiveDIY: !this.state.isDropdownActiveDIY})
}

    render () {
        let dropActiveFlowers = this.state.isDropdownActiveFlowers;
        let dropActiveDIY = this.state.isDropdownActiveDIY;
        return (
            <div className="sidenav">
                <h1 className = "Sidebar-Name" >Flower Shop</h1>
                <a href="#about">Home</a>
                <a href="#services">Shop</a>
                <button className={dropActiveFlowers? "dropdown-btn active" : "dropdown-btn"} onClick = {this.displayDropdownFlowers}>Flowers
                    <i className="fa fa-caret-down"></i>
                </button>
                    <div className={dropActiveFlowers? "dropdown-container-on" : "dropdown-container-off"}>
                        <a href="#">Orchids</a>
                        <a href="#">Carnations</a>
                        <a href="#">Daisies</a>
                        <a href="#">Roses</a>
                        <a href="#">Sunflowers</a>
                        <a href="#">Tulips</a>
                    </div>
                <button className={dropActiveDIY? "dropdown-btn active" : "dropdown-btn"} onClick = {this.displayDropdownDIY}>DIY
                    <i className="fa fa-caret-down"></i>
                </button>
                    <div className={dropActiveDIY? "dropdown-container-on" : "dropdown-container-off"}>
                        <a href="#">Seeds</a>
                        <a href="#">Soil</a>
                        <a href="#">Buckets</a>
                    </div>
                <a href="#contact">About</a>
                <a href="#contact">Contact</a>
            </div>
        )

    }

};

export default Sidebar;