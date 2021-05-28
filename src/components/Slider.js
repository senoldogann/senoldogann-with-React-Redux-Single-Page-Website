import React from "react";
 
import Img1 from "../images/img5.jpeg"
import '../App.css'
const Slider = () => {
    return (
       <div className="big-container w-100 bg-danger" id="slider">
            <div className="background"></div>
           <div className="content">
            <div className="text">
                <h5>SLIDER</h5>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
            </div>
            <img className="img" src={Img1} alt="" />
           </div>
       </div>
    )
}

export default Slider;