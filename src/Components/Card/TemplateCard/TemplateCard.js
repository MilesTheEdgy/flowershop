import React from "react";
import "./TemplateCard.css";
import "../../Other/hover.css";

const TemplateCard = (props) => {
    return (
            <div className="card cardStyle border border-success rounded hvr-grow" style={{width: "18rem"}}>
                <img src= {props.imageurl} className="card-img-top" alt="..." width = "100" height = "100" />
                <div className="card-body">
                    <h5 className="card-title">{props.title}</h5>
                    <p className="card-text"> {props.text} </p>
                    <p className="card-text"> <b>$ {props.price} </b></p>
                    <a href="#" className="btn btn-primary">Add to cart</a>
                </div>
            </div>
    )
}

export default TemplateCard;
