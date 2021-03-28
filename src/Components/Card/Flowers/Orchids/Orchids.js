import React from "react";
import "./Orchids.css"
import OrchidsImage from "../../../../Images/Orchids.jpg";

const Orchids = () => {
    return (
            <div className="card cardStyle" style={{width: "18rem"}}>
                <img src= {OrchidsImage} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">Orchids</h5>
                    <p className="card-text">A set of hand picked fresh Orchids for those who like change </p>
                    <p className="card-text"> <b>$13.00</b></p>
                    <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
            </div>
    )
}

export default Orchids;
