import React from "react";
import { Link, withRouter } from "react-router-dom";
import "../App.css"
const  Navbar = () => {
       return (
        <div className="contanier bg-danger m-auto w-100 ">
              <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
             <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse " id="navbarTogglerDemo01">
            <Link to="/" className="navbar-brand col-md-3" >SENOL-DOGAN</Link>
            <ul className="navbar-nav col-md-9 d-flex justify-content-end mt-lg-0 ">
                <li className="nav-item  "><a href="#slider"className="nav-link">Home</a></li>
                <li className="nav-item  "><a href="#products" className="nav-link">Products</a></li>
                <li className="nav-item  "><a href="#team" className="nav-link">Team</a></li>
                <li className="nav-item  "><a href="#hakkimizda" className="nav-link">About</a></li>
                <li className="nav-item  "><a href="#iletisim" className="nav-link">Contact</a></li>
            </ul>
            </div>
            </nav>
        </div>
        

     )
}



export default withRouter(Navbar);