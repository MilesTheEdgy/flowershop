import React from "react";
import "./Roses.css"
// import RosesImage from "../../../../../public/Images/Flowers/Roses.jpg";
// import Orchids from "../../../../Images/Orchids.jpg";
// import Sunflower from "../../Images/Sunflower.jpg";

const Roses = (props) => {
    return (
            <div className="card cardStyle border border-success rounded" style={{width: "18rem"}}>
                <img src= {props.imageurl} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title"> {props.title} </h5>
                    <p className="card-text"> {props.text} </p>
                    <p className="card-text"> <b> $ {props.price} </b></p>
                    <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
            </div>
    )
}

export default Roses;
