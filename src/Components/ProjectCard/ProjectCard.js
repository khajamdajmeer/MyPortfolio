import React from 'react';
import './ProjectCard.css';
import img from '../../images/sunrisenew.jpg'
import giticon from '../../images/github-icon.png';
import arrowbox from '../../images/arrowbox.png'
const ProjectCard = (props) => {


  const lorem = "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Debitis vel pariatur quasi veniam, magni eius aut ab quidem dicta voluptatibus praesentium. In autem quibusdam ipsum tempora voluptas saepe, architecto suscipit."
  
  return (
    <>
      <div className="pcard">
        <div className="headimg">
            <img src={props.img ? props.img:img} alt="" />
        </div>
        <div className="cardbody">
            <h2>{props.title ? props.title:'No Title'}</h2>
            <div className="cardbtns">
              <a className='checkoutbtn' href={props.link ? props.link :'/'} rel='noreferrer' target="_blank">Live Demo &nbsp;<img src={arrowbox} alt="" /></a>
              <a className='checkoutbtn' href={props.gitlink ? props.gitlink : '#'} rel='noreferrer' target="_blank"> Code &nbsp;<img src={giticon} alt="git" id='giticon'/></a>
            </div>
            {/* <strong>
            Discription
            </strong> */}
            <p>{props.discription ? props.discription:lorem}</p>
        </div>
      </div>
    </>
  );
}

export default ProjectCard;
