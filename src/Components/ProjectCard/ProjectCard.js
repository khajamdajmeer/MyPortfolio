import React from 'react';
import './ProjectCard.css';
import giticon from '../../images/github-icon.png';
import arrowbox from '../../images/arrowbox.png';
import carproject from '../../images/carproject.jpeg';
import LeetClone from '../../images/projectimgs/LeetClone.jpeg'
const ProjectCard = (props) => {


  
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
   



   <div className="p-container p-container-inverse">
    <div className="p-left">
      <img src={LeetClone} alt="" />
    </div>
    <div className="p-right">
      <h2>LeetCode Challenge Hub Clone</h2>
      <p>A LeetCode Website frontend clone built with React and Bootstrap offers a responsive and user-friendly platform for practicing coding challenges. It mimics LeetCode's clean and intuitive design, providing an interactive experience for aspiring programmers to sharpen their skills, all while leveraging the power of React and Bootstrap for a modern and polished user interface.</p>
      <div className="stackused">
        <div className="stack"> React </div>
        <div className="stack">BootStrap</div>
      </div>
      <div className="buttons">
        <a className='btnicons' href='https://github.com/khajamdajmeer/LeetFrontEnd.git' target='_blank' rel='noreferrer'><img src={giticon} alt="" /> Code</a>
        <a className='btnicons' href='https://leetcode-clone-s1t3.onrender.com/' target='_blank' rel='noreferrer'><img src={arrowbox} alt="" /> Live demo</a>
      </div>
    </div>
   </div>
   </>
  );
}

export default ProjectCard;
