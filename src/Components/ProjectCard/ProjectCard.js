import React from 'react';
import './ProjectCard.css';
import giticon from '../../images/github-icon.png';
import arrowbox from '../../images/arrowbox.png';
import carproject from '../../images/carproject.jpeg';
import LeetClone from '../../images/projectimgs/LeetClone.jpeg';
import MinimalEcomerce from '../../images/projectimgs/MinimalEcomerce.jpeg';
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


   <div className="p-container">
    <div className="p-left">
      <img src={MinimalEcomerce} alt="" />
    </div>
    <div className="p-right">
      <h2>E-Shopify: A Robust E-Commerce Frontend</h2>
      <p>"E-Shopify" is a sophisticated and user-friendly e-commerce website with a beautifully designed frontend that offers an extensive range of over 25 high-quality products. Our e-commerce platform is built with the latest web technologies, providing an exceptional shopping experience for customers.</p>
      <div className="stackused">
        <div className="stack"> React </div>
        <div className="stack">Redux</div>
      </div>
      <div className="buttons">
        <a className='btnicons' href='https://github.com/khajamdajmeer/Ecomerce.git' target='_blank' rel='noreferrer'><img src={giticon} alt="" /> Code</a>
        <a className='btnicons' href='https://minimal-ecomerce-site.onrender.com/' target='_blank' rel='noreferrer'><img src={arrowbox} alt="" /> Live demo</a>
      </div>
    </div>
   </div>
   </>
  );
}

export default ProjectCard;
