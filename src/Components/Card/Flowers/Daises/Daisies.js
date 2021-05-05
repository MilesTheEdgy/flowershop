import React from "react";
import "./Daisies.css"
import DaisiesImage from "../../../../Images/Flowers/Daisies.jpg";

const Daisies = () => {
    return (
            <div className="card cardStyle border border-success rounded" style={{width: "18rem"}}>
                <img src= {DaisiesImage} className="card-img-top" alt="..." width = "100" height = "100" />
                <div className="card-body">
                    <h5 className="card-title">Daisies</h5>
                    <p className="card-text">Beautiful hand picked Daisies fresh out of our gardins</p>
                    <p className="card-text"> <b>$18.00</b></p>
                    <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
            </div>
    )
}

export default Daisies;
