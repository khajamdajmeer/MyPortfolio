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
        <p>I'm a passionate web developer fresh out of college with a degree in Computer Science Engineering
     I am excited to embark on a career path in web development, focusing on creating impactful and user
    friendly experiences. With a strong foundation in HTML, CSS, and JavaScript, I bring expertise in front-end
      development. I have also gained valuable experience working with the MERN stack, showcasing my proficiency in
     React.js and Node.js. I am eager to contribute my skills and knowledge to innovative projects, collaborating with talented
     teams to build exceptional web solutions.</p>
    </div>
    </div>


    </div>
      
    </>
  );
}

export default About;