import React from 'react';
import './ProjectCard.css';
import giticon from '../../images/github-icon.png';
import arrowbox from '../../images/arrowbox.png';
import carproject from '../../images/carproject.jpeg';
const ProjectCard = (props) => {


  const lorem = "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Debitis vel pariatur quasi veniam, magni eius aut ab quidem dicta voluptatibus praesentium. In autem quibusdam ipsum tempora voluptas saepe, architecto suscipit."
  
  return (
   <>
   <div className="p-container">
    <div className="p-left">
      <img src={carproject} alt="" />
    </div>
    <div className="p-right">
      <h2>Car Rental Service</h2>
      <p>A car rental website is an online platform that allows users to rent cars for personal or business use. The website provides an interface for searching, comparing, and reserving cars.</p>
      <div className="stackused">
        <div className="stack"> React </div>
        <div className="stack">BootStrap</div>
      </div>
      <div className="buttons">
        <a className='btnicons' href='https://github.com/khajamdajmeer/CarRental.git' target='_blank' rel='noreferrer'><img src={giticon} alt="" /> Code</a>
        <a className='btnicons' href='https://carrental-ka80.onrender.com/' target='_blank' rel='noreferrer'><img src={arrowbox} alt="" /> Live demo</a>
      </div>
    </div>
   </div>
   
   </>
  );
}

export default ProjectCard;
