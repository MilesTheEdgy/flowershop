import React from "react";
import "./Calla_lillies.css"
import Calla_lilliesImage from "../../../../Images/Flowers/Calla_lillies.jpg";

const Calla_lillies = () => {
    return (
            <div className="card cardStyle border border-success rounded" style={{width: "18rem"}}>
                <img src= {Calla_lilliesImage} className="card-img-top" alt="..." width = "100" height = "100" />
                <div className="card-body">
                    <h5 className="card-title">Calla lillies</h5>
                    <p className="card-text">Beautiful hand picked Calla lillies fresh out of our gardins</p>
                    <p className="card-text"> <b>$18.00</b></p>
                    <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
            </div>
    )
}

export default Calla_lillies;
