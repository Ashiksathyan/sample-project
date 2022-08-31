import React from 'react'


function Contact() {
  return (
    <>
    <div className='cont'>
    <center><h2>Contact Us</h2></center><br></br>
    <div className="row">
        <div className="col-6">
    <div className="contact">
   
    <h4>Contact no- +919542153685</h4><br></br>
    <h5>E-mail - cakehut@gmail.com</h5><br></br><br></br>
    
    <form className="myform">
    <p> * Name :&nbsp; &nbsp;&nbsp;&nbsp;<input name="myname" type="text" />
    </p>
    <p> * Address : &nbsp;<input name="myaddress" type="text" />
    </p>
    <p> * E-mail : &nbsp;&nbsp;&nbsp;<input type="email" name="myemail" /></p>
    <p> * Message : <textarea name="mymessage" type="text" />
    </p>
    <button className="btn-1">Send Message</button>
</form>
</div>
</div>
<div className="col-6">
<iframe title="location" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d251482.70982208618!2d76.16084718613848!3d9.982342763354561!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b080d514abec6bf%3A0xbd582caa5844192!2sKochi%2C%20Kerala!5e0!3m2!1sen!2sin!4v1661325048885!5m2!1sen!2sin" width="600" height="450" style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
</div>
</div>
</div>

</>
  )
}




export default Contact;

