import React from 'react';
import './About.css';
import developer from '../../images/developer.jpg';
import centerdev from '../../images/centerdev.jpeg';
const About = () => {
  return (
    <>

    <div className="aboutcontainer" id='iamabout'>
    <div className="aboutfullcard">

    <div className="aboutcard">
        <img src={centerdev} alt="" className='centerdevimg'/>
    <div className="about-dev">
        <img src={developer} alt="" />
    </div>
    </div>

    <div className="aboutinfotag">
        <h2>About Me</h2>
        <h3>A Dedicated Web Developer Based in Hyderabad,Telengana</h3>
  
     <p>
      
As a recent graduate with a Computer Science Engineering degree, I am thrilled to kickstart my career in the realm of web development. My passion lies in crafting user-centric and impactful digital experiences. With a robust foundation in HTML, CSS, and JavaScript, I bring a wealth of expertise to the field of front-end development. Additionally, I have honed my skills working with the MERN stack, showcasing my proficiency in React.js and Node.js. I am eagerly looking forward to leveraging my talents and knowledge to contribute to innovative projects, collaborating closely with skilled teams to create outstanding web solutions.
     </p>
    </div>
    </div>


    </div>
      
    </>
  );
}

export default About;
