import React from "react";
import "./About.css";
import Miles from "../../Images/Miles.jpg"
import Man from "../../Images/Man.jpg"
import Woman from "../../Images/Woman.jpg"

const About = () => {
    return (
        <div className = "About">
                <h1 className = "Headerr-1">We at flower shop</h1>
                <h1 className = "Headerr-2">dedicate ourselves to providing you the best flowers for all occations</h1>

                <p className = "paragraph-1"> we use some of the best tools to fertilize our flowers so it can meet your every need</p>
                <p className = "paragraph-2" >here is some testimoney from our clients</p>


                <div className = "man-testimony-div">
                <img src = {Man} width = "400" height = "400" className = "man-img" />
                <div>
                    <p className = "man-p"> ''I was in dire need of a quick way to get my flowers
                        on time for my wedding day, I would like to thank Flower
                        Shop for their efforts on showing up in time.''</p>
                    <p className = "man-title">
                        -Melvin Jones
                    </p>
                </div>
                </div>

                <div className = "Woman-testimony-div">
                <img src = {Woman} width = "400" height = "400" className = "Woman-img" />
                <div>
                    <p className = "Woman-p"> ''I needed some fresh picked flowers as a gift for my
grandmother's birthday, and a friend referenced flower
shop to me. Suffice to say I don't have any regrets!''</p>
                    <p className = "Woman-title">
                    -Vanessa Richardson 
                    </p>
                </div>
                </div>

                <div className = "Miles-testimony-div">
                <img src = {Miles} width = "400" height = "400" className = "Miles-img" />
                <div>
                    <p className = "Miles-p"> ''An old friend of mine was sick and I was looking to
purchase some flowers as a gift and send it to the
hospital where he was resting. I thank Flower Shop
for their beautifully picked flowers.''</p>
                    <p className = "Miles-title">
                    -Miles Edgeworth
                    </p>
                </div>
                </div>
        </div>

    )
};

export default About;