import React from "react";
import "./Dahlia.css"
import DahliaImage from "../../../../Images/Flowers/Dahlia.jpg";

const Dahlia = (props) => {
    return (
            <div className="card cardStyle border border-success rounded" style={{width: "18rem"}}>
                <img src= {DahliaImage} className="card-img-top" alt="..." width = "100" height = "100" />
                <div className="card-body">
                    <h5 className="card-title">{props.title}</h5>
                    <p className="card-text"> {props.text} </p>
                    <p className="card-text"> <b>$ {props.price} </b></p>
                    <a href="#" className="btn btn-primary">Add to cart</a>
                </div>
            </div>
    )
}

export default Dahlia;
