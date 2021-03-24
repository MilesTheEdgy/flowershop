import React from "react";
import "./Card.css"
import Roses from "../../Images/Roses.jpg";
import Orchids from "../../Images/Orchids.jpg";
import Sunflower from "../../Images/Sunflower.jpg";

const Card = () => {
    return (
            <div className="card cardStyle" style={{width: "18rem"}}>
                <img src= {Roses} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">Roses</h5>
                    <p className="card-text">Beautiful hand picked roses straight out of the market</p>
                    <p className="card-text"> <b>$18.00</b></p>
                    <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
            </div>
    )
}

export default Card;

