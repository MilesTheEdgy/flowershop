import React from 'react';
import "./Shop.css";
import TemplateCard from "../Card/TemplateCard/TemplateCard.js"

class Shop extends React.Component {
    
    render() {
        return (
            <div className = "Shop">
                <div className = {this.props.isSidebarOpen ? "ShopCards-SidebarClosed" : "ShopCards-SidebarOpen"}>
                    <div>
                    {
                    this.props.productData.map((i) => {
                    return <TemplateCard  title={i.title} text={i.text} price={i.price} imageurl={i.imageurl}/>
                    })
                    }
                    </div>
                    {/* <div className = {props.isSidebarOpen ? "ShopCardd-phantom-closed" : "ShopCardd-phantom"}>
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
                    </div> */}
                </div>
            </div>
        )
    }
}

export default Shop