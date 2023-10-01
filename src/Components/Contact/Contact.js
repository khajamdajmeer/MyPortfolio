import React from 'react';
import './Contact.css';
import resume from '../../images/AjmeerKhaja.pdf'
const Contact = () => {
  return (
    <>
     <div className="contact-container" id='iamcontactpage'>
       <div className="containbox">
        <h2>Contact Me</h2>
    <p>Feel free to reach out! Don't hesitate to contact me using the details below</p>
    <div className="contactinfo">
        <div className="cinfo">
            <div className="cinfologo">
            <span class="material-symbols-outlined contactlogos">
my_location
</span></div>
<div className="cinfodetails">
    <h3>Location</h3>
    <span className='maillink'>Hyderabad,Telangana</span>
    
</div>
        </div>

        <div className="cinfo">
            <div className="cinfologo">
            <span class="material-symbols-outlined contactlogos">mail</span></div>
<div className="cinfodetails">
    <h3>Mail</h3>
    
    <a href="mailto:khajamdajmeer@gmail.com" className='maillink'>Khajamdajmeer@gmail.com</a>

</div>
        </div>

        <div className="cinfo">
            <div className="cinfologo">
            <span class="material-symbols-outlined contactlogos">
contact_page
</span></div>
<div className="cinfodetails">
    <h3>Resume</h3>
    <a href={resume} download='AjmeerKhaja.pdf' className='maillink'>Download Resume</a>
    
</div>
        </div>

    </div>
       </div>
     </div>

     <div className="footer">
     <h3>Copyright © 2023. All rights are reserved</h3>
     </div>
    </>
  );
}

export default Contact;
