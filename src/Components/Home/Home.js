import Roses from "../Card//Flowers/Roses/Roses.js";
import Orchids from "../Card//Flowers/Orchids/Orchids.js";
import MixedFlowers from "../Card//Flowers/MixedFlowers/MixedFlowers.js";
import MixedFlowersMini from "../Card//Flowers/MixedFlowersMini/MixedFlowersMini.js";
import React from "react";

import "./Home.css";
import "../Other/hover.css"

const Home = (props) => {
    return (
            <div className = "Home" >


              {/* Jumbotron and card elements */}
              <div>
                  <h1 className = {props.isSidebarOpen ? "Jumbotron-Closed" : "Jumbotron"} >Welcome to the Flower Shop <div>
                    <h2 className = "Jumbotron-bottom" >The best place to buy the freshest flowers!</h2>              
                    </div> </h1>
                  <p className = {props.isSidebarOpen ? "Most-Sold-closed" : "Most-Sold"}>Our most sold items:</p>
                  <div className = {props.isSidebarOpen ? "cards-container-closed" : "cards-container"}>
                          <div className = "cardd hvr-grow" >
                            <Roses/>
                          </div>
                          <div className = "cardd hvr-grow" >
                            <Orchids/>
                          </div>
                          <div className = "cardd hvr-grow" >
                            <MixedFlowers/>
                          </div>
                          <div className = "cardd hvr-grow" >
                            <MixedFlowersMini/>
                          </div>
                          <div className = {props.isSidebarOpen ? "cardd-phantom-closed" : "cardd-phantom"} >
                            <MixedFlowersMini/>
                          </div>
                          <div className = {props.isSidebarOpen ? "cardd-phantom-closed" : "cardd-phantom"} >
                            <MixedFlowersMini/>
                          </div>
                          
                  </div>
              </div>

              
                {/* footer */}
                <div className="text-center p-3 footer">
                  Made by <strong>Muhammet Al-Dulaimi</strong>
                </div>
            </div>
    )
}

 

export default Home;