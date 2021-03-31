import React from 'react';
import Roses from "../Card/Flowers/Roses/Roses.js";
import "./Shop.css";

const Shop = () => {
    return (
        <div>
            <div className = "container-fluid">
                <div className = "search-bar row g-0">
                    <div className = "col-sm">
                        <input class="form-control me-2 search-field" type="search" placeholder="Search" aria-label="Search"/>
                    </div>
                    <div className = "col-sm">
                        <button class="btn btn-outline-success search-button" type="submit">Search</button>
                    </div>
                </div>
                <div className = "cards row">
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
                </div>
            </div>
        </div>
    )
}

export default Shop