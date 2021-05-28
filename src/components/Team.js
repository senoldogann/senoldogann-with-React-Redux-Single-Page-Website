import React from "react";
import '../App.css';
import User from "../images/i.webp"

const Team = () => {
    return (
        <div className="container teamContainer" >
            <div className="generalHeader  mt-4"  id="team">
                <h5>Team</h5>
                <hr className="line" />
                <p>Lorem ipsum lorean fload.</p>
            </div>

            <div className="team  col-md-12 d-flex justify-content-center flex-md-row  flex-sm-column" >
                <div className="teamUser  mt-sm-3  col-sm-12 col-md-4 ml-1 ">
                    <div className="imgContainer">
                        <img className="card-image rounded-circle bg-dark " src={User} alt="" />
                    </div>
                    <div className="text mt-sm-5 mb-3">
                        <h5>Tyler Regia</h5>
                        <p>Junior Developer</p>
                        <div className="social-media text-center  ">
                            <a href="#"> <i class="fab fa-facebook-f"></i></a>
                            <a href="#"> <i class="fab fa-instagram"></i></a>
                            <a href="#"><i class="fab fa-twitter"></i></a>
                        </div>
                    </div>
                </div>

                <div className="teamUser mt-sm-3 col-sm-12 col-md-4 ml-1  ">
                    <div className="imgContainer">
                        <img className="card-image rounded-circle bg-dark " src={User} alt="" />
                    </div>
                    <div className="text mt-sm-5  mb-3">
                        <h5>Micheal Jacks</h5>
                        <p>Web Developer</p>
                        <div className="social-media text-center ">
                            <a href="#"> <i class="fab fa-facebook-f"></i></a>
                            <a href="#"> <i class="fab fa-instagram"></i></a>
                            <a href="#"><i class="fab fa-twitter"></i></a>
                        </div>
                    </div>
                </div>
                <div className="teamUser mt-sm-3 col-sm-12 col-md-4 ml-1  ">
                    <div className="imgContainer">
                        
                        <img className="card-image rounded-circle bg-dark " src={User} alt="" />
                        
                    </div>
                    <div className="text mt-sm-5  mb-3 ">
                        <h5>John Dea</h5>
                        <p>Senior Developer</p>
                        <div className="social-media text-center ">
                            <a href="#"> <i class="fab fa-facebook-f"></i></a>
                            <a href="#"> <i class="fab fa-instagram"></i></a>
                            <a href="#"><i class="fab fa-twitter"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Team;