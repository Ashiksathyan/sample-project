import React from "react";
import { Link } from "react-router-dom";
import './Style.css';

const Navbar=()=>{
    return(
      <>
        <nav className="navbar navbar-expand-lg navbar-light fixed-top ">
        <Link className="navbar-brand" to="/"><img src="home.png"></img></Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  

  <div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav">
     
      <li className="nav-item">
      <Link className="nav-link" to="/collections">Collections </Link>
      </li>
      <li className="nav-item ">
        <Link className="nav-link" to="/about">About </Link>
      </li>
      <li className="nav-item ">
        <Link className="nav-link" to="/contact">Contact Us </Link>
      </li>


      
    </ul>
  </div>
</nav>
      </>
      
        
    )
}

export default Navbar;