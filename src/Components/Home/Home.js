import Roses from "../Card//Flowers/Roses/Roses.js";
import Orchids from "../Card//Flowers/Orchids/Orchids.js";
import MixedFlowers from "../Card//Flowers/MixedFlowers/MixedFlowers.js";
import MixedFlowersMini from "../Card//Flowers/MixedFlowersMini/MixedFlowersMini.js";
import React from "react";

import "./Home.css";

const Home = () => {
    return (
            <div className = "Home" >
                <h1 className = "Jumbotron" >Welcome to the Flower Shop</h1>
                <h2 className = "Jumbotron-bottom" >The best place to buy the freshest flowers!</h2>
                <p className = "Most-Sold" >Our most sold items:</p>
                <div className = "container-fluid">
                    <div className = "row" >
                        <div className = "col-sm margin-card" >
                          <Roses/>
                        </div>
                        <div className = "col-sm" >
                          <Orchids/>
                        </div>
                        <div className = "col-sm" >
                          <MixedFlowers/>
                        </div>
                        <div className = "col-sm" >
                          <MixedFlowersMini/>
                        </div>
                        
                    </div>
                </div>
            </div>
    )
}

export default Home;