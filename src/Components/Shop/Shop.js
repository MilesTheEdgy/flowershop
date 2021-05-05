import React from 'react';
import "./Shop.css";
import TemplateCard from "../Card/TemplateCard/TemplateCard.js"
import { productData } from "../Card/ProductData"

const Shop = (props) => {

    return (
        <div className = "Shop">
            <div className = {props.isSidebarOpen ? "ShopCards-SidebarClosed" : "ShopCards-SidebarOpen"}>

                {
                productData.map(i => {
                return <TemplateCard  title={i.title} text={i.text} price={i.price} imageurl={i.imageurl}/>
                })
                }

                <div className = {props.isSidebarOpen ? "ShopCardd-phantom-closed" : "ShopCardd-phantom"}>
                    <TemplateCard/>
                </div>
                <div className = {props.isSidebarOpen ? "ShopCardd-phantom-closed" : "ShopCardd-phantom"}>
                    <TemplateCard/>
                </div>
                <div className = {props.isSidebarOpen ? "ShopCardd-phantom-closed" : "ShopCardd-phantom"}>
                    <TemplateCard/>
                </div>
                <div className = {props.isSidebarOpen ? "ShopCardd-phantom-closed" : "ShopCardd-phantom"}>
                    <TemplateCard/>
                </div>
            </div>
        </div>
    )
}

export default Shop