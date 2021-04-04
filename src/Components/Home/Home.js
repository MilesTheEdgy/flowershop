import Roses from "../Card//Flowers/Roses/Roses.js";
import Orchids from "../Card//Flowers/Orchids/Orchids.js";
import MixedFlowers from "../Card//Flowers/MixedFlowers/MixedFlowers.js";
import MixedFlowersMini from "../Card//Flowers/MixedFlowersMini/MixedFlowersMini.js";
import React from "react";

import "./Home.css";

const Home = () => {
    return (
            <div className = "Home" >


              {/* Navbar */}
              <nav className="navbar bg-transparent NaviBar">
                <div className="container-fluid">
                  <div className="navbar-brand">Welcome <strong>User</strong> </div>

                  <div className = "d-flex justify-content-end">
                    <a className = "nav-link">Sign In</a>
                    <form className="d-flex">
                      <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                      <button className="btn btn-outline-success" type="submit">Search</button>
                    </form>
                  </div>

                </div>
              </nav>


              {/* Jumbotron and card elements */}
              <div>
                  <h1 className = "Jumbotron" >Welcome to the Flower Shop</h1>
                  <h2 className = "Jumbotron-bottom" >The best place to buy the freshest flowers!</h2>
                  <p className = "Most-Sold" >Our most sold items:</p>
                  <div className = "container cards-container">
                      <div className = "row" >
                          <div className = "col-sm cardd" >
                            <Roses/>
                          </div>
                          <div className = "col-sm cardd" >
                            <Orchids/>
                          </div>
                          <div className = "col-sm cardd" >
                            <MixedFlowers/>
                          </div>
                          <div className = "col-sm cardd" >
                            <MixedFlowersMini/>
                          </div>
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