import React from "react";
import "./MixedFlowersMini.css"
import MixedFlowersMiniImage from "../../../../Images/MixedFlowersMini.jpg";

const MixedFlowersMini = () => {
    return (
            <div className="card cardStyle border border-success rounded" style={{width: "18rem"}}>
                <img src= {MixedFlowersMiniImage} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">MixedFlowersMini</h5>
                    <p className="card-text"> Out more economical option for all your special needs </p>
                    <p className="card-text"> <b>$20.00</b></p>
                </div>
            </div>
    )
}

export default MixedFlowersMini;
