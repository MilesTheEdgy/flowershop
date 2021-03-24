import React from "react";
import Card from "../Card/Card.js"
import "./Cards.css"

const Cards = () => {
    return (
            <div className="container-fluid Cards">
                <div className="row">
                        <Card className = "card" />
                        <Card />
                        <Card />
                        <Card/>
                        <Card />
                        <Card/>
                        <Card />
                        <Card/>
                </div>
            </div>

    )
}

export default Cards;