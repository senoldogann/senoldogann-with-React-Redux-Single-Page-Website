import React from "react";
import '../App.css';
import Video from "../images/a.mp4"

const About = () => {
    return (
        <div className="container teamContainer"   >
            <div className="generalHeader  mt-5">
                <h5>About</h5>
                <hr className="line" />
                <p>Lorem ipsum lorean fload.</p>
            </div>

            <div className="aboutGeneralBox ">
                <div className="box1">
                    <h2>Who We Are</h2>
                    <p>Based in Florida with clients & team members all over the globe.</p>
                </div>
                <div className="box2">
                    <div className="text">
                        <p>Lorem ipsum dolar from educat.</p>
                        <hr />
                        <p>Lorem ipsum dolar from educat.</p>
                        <hr />
                        <p>Lorem ipsum dolar from educat.</p>
                        <hr />
                        <p>Lorem ipsum dolar from educat.</p>
                        <hr />
                     
                    </div>
                </div>
                <div className="box3" id="hakkimizda">
                    <video width="100%" height="100%" controls  autoPlay="autoplay">
                    <source src={Video} type="video/mp4"/>
                    </video>
                </div>
            </div>
        </div>

    )
}

export default About;