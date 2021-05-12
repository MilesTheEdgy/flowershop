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
                    this.props.productData.map((product) => {
                        return <TemplateCard 
                                title={product.title}
                                text={product.text} 
                                price={product.price} 
                                imageurl={product.imageurl}
                                key = {product}
                                addItem = {() => {
                                    this.props.addItemToCart(product)
                                    }}/>
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