import React from 'react'
import { Link } from "react-router-dom";
import { useLocation } from 'react-router-dom';
export default function Footer() {
  const {pathname}=useLocation();
  if(pathname==='/') {return ""}
 
  return (
    <div className="foot">
    <div className="row">
    <div className="col-3">
   <h4>Information</h4>
   <Link className="info" to="/about">About Us</Link><br></br>
   <Link className="info" to="/contact">Privacy and policy</Link><br></br>
   <Link className="info" to="/">FAQ's</Link><br></br>
   <Link className="info" to="/contact">Cackehut MobileApp</Link><br></br>
    </div>
    
    <div className="col-3">
        <h4>Customer Service</h4>
        <Link className="info" to="/about">Contact Us</Link><br></br>
        <Link className="info" to="/contact">Gift Vouchers</Link><br></br>
        <Link className="info" to="/">Special</Link><br></br>
        <Link className="info" to="/contact">Returns</Link><br></br>
    </div>
    <div className="col-3">
        <h4>Categories</h4>
        <Link className="info" to="/collections">All Products</Link><br></br>
        <Link className="info" to="/collection">New-year Cakes</Link><br></br>
        <Link className="info" to="/">Shape cakes</Link><br></br>
        <Link className="info" to="/contact">X-mas cakes</Link><br></br>
    </div>
    <div className="col-3">
        <h4>My Account</h4>
        <Link className="info" to="/collections"><i class="fa-solid fa-phone"></i> - +917521658245</Link><br></br>
        <Link className="info" to="/collection"><i class="fa-solid fa-envelope"></i> - cakehut@gmail.com</Link><br></br>
        <Link className="info" to="/"><i class="fa-brands fa-whatsapp"></i> - +918021546935</Link><br></br>
        <Link className="info" to="/contact"><i class="fa-brands fa-twitter"></i></Link><br></br>
        
    </div>
    </div>
    
</div>
  )
}
