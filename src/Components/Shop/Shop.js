import React from 'react';
import Roses from "../Card/Flowers/Roses/Roses.js";
import "./Shop.css";
// import Orchids from "../Card/Flowers/Orchids/Orchids"
import Dahlia from '../Card/Flowers/Dahlia/Dahlia.js';
// import Alstroemerias from '../Card/Flowers/Alstroemerias/Alstroemerias.js';
// import Calla_lillies from '../Card/Flowers/Calla_lillies/Calla_lillies.js';
// import Carnation from '../Card/Flowers/Carnation/Carnation.js';
// import Daisies from '../Card/Flowers/Daises/Daisies.js';

const Shop = (props) => {

    const info = [
        {
            name: "Roses",
            title: "Roses",
            text: "Beautiful hand picked roses fresh out of our gardins",
            price: 15.99,
            imageurl: require("../../Images/Roses.jpg")
    
        },
        {
            name: "Dahlia",
            title: "Dahlia",
            text: "Beautiful hand picked Dahlia fresh out of our gardins",
            price: 17.99,
    
        }
    ]

    return (
        <div className = "Shop">
            <div className = {props.isSidebarOpen ? "ShopCards-SidebarClosed" : "ShopCards-SidebarOpen"}>
                <Roses title = {info[0].name}
                       text = {info[0].text}
                       price = {info[0].price} 
                       imageurl = {info[0].imageurl} />
               <Dahlia title = {info[1].name} text = {info[1].text} price = {info[1].price}  />
         {/*    <Alstroemerias/>
                <Calla_lillies/>
                <Carnation/>
                <Daisies/>
                <Roses/>

                <div className = {props.isSidebarOpen ? "ShopCardd-phantom-closed" : "ShopCardd-phantom"}>
                    <Orchids/>
                </div>
                <div className = {props.isSidebarOpen ? "ShopCardd-phantom-closed" : "ShopCardd-phantom"}>
                    <Orchids/>
                </div> */}
            </div>
        </div>
    )
}

export default Shop