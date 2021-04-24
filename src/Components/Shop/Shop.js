import React from 'react';
import Roses from "../Card/Flowers/Roses/Roses.js";
import "./Shop.css";
import Orchids from "../Card/Flowers/Orchids/Orchids"

const Shop = (props) => {

    return (
        <div className = "Shop">
            <div className = "search-bar">
                <div className = "search-field">
                    <input class="form-control me-2 search-field" type="search" placeholder="Search" aria-label="Search"/>
                </div>
                <div className = "search-button">
                    <button class="btn btn-outline-success search-button" type="submit">Search</button>
                </div>
            </div>

            <div className = {props.isSidebarOpen ? "ShopCards-SidebarClosed" : "ShopCards-SidebarOpen"}>
                <Roses/>
                <Roses/>
                <Roses/>
                <Roses/>
                <Roses/>
                <Roses/>
                <Roses/>
                <Roses/>
                <Roses/>
                <Roses/>
                <div className = {props.isSidebarOpen ? "ShopCardd-phantom-closed" : "ShopCardd-phantom"}>
                    <Orchids/>
                </div>
                <div className = {props.isSidebarOpen ? "ShopCardd-phantom-closed" : "ShopCardd-phantom"}>
                    <Orchids/>
                </div>
            </div>
        </div>
    )
}

export default Shop