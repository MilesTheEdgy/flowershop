import React from "react";
import "./Carnation.css"
import CarnationImage from "../../../../Images/Flowers/Carnation.jpeg";

const Carnation = () => {
    return (
            <div className="card cardStyle border border-success rounded" style={{width: "18rem"}}>
                <img src = {CarnationImage}  className="card-img-top" alt="..." width = "100" height = "100" />
                <div className="card-body">
                    <h5 className="card-title">Carnation</h5>
                    <p className="card-text">Beautiful hand picked Carnation fresh out of our gardins</p>
                    <p className="card-text"> <b>$18.00</b></p>
                    <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
            </div>
    )
}

export default Carnation;
