import React from 'react';
import './ProjectCard.css';
import img from '../../images/sunrisenew.jpg'
const ProjectCard = () => {
  return (
    <>
      <div className="pcard">
        <div className="headimg">
            <img src={img} alt="" />
        </div>
        <div className="cardbody">
            <h3>Title of project</h3>
        </div>
      </div>
    </>
  );
}

export default ProjectCard;
