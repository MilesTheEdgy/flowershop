import React from "react";
import "./Roses.css"
import RosesImage from "../../../../Images/Flowers/Roses.jpg";
// import Orchids from "../../../../Images/Orchids.jpg";
// import Sunflower from "../../Images/Sunflower.jpg";

const Roses = (props) => {
    return (
            <div className="card cardStyle border border-success rounded" style={{width: "18rem"}}>
                <img src= {RosesImage} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title"> Roses </h5>
                    <p className="card-text"> Beautiful picked Roses a traditional and common choice </p>
                    <p className="card-text"> <b> $ 9.99 </b></p>
                </div>
            </div>
    )
}

export default Roses;
