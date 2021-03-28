import React from "react";
import "./Roses.css"
import RosesImage from "../../../../Images/Roses.jpg";
// import Orchids from "../../../../Images/Orchids.jpg";
// import Sunflower from "../../Images/Sunflower.jpg";

const Roses = () => {
    return (
            <div className="card cardStyle" style={{width: "18rem"}}>
                <img src= {RosesImage} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">Roses</h5>
                    <p className="card-text">Beautiful hand picked roses fresh out of our gardins</p>
                    <p className="card-text"> <b>$18.00</b></p>
                    <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
            </div>
    )
}

export default Roses;
