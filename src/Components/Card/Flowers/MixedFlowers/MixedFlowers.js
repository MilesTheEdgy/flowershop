import React from "react";
import "./MixedFlowers.css"
import MixedFlowersImage from "../../../../Images/MixedFlowers.jpg";

const MixedFlowers = () => {
    return (
            <div className="card cardStyle border border-success rounded" style={{width: "18rem"}}>
                <img src= {MixedFlowersImage} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">MixedFlowers</h5>
                    <p className="card-text">A ready to deliver Mixed Flowers Package for that special someone</p>
                    <p className="card-text"> <b>$25.00</b></p>
                    <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
            </div>
    )
}

export default MixedFlowers;
