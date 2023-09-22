import React from 'react';
import './Projects.css'
import ProjectCard from '../ProjectCard/ProjectCard';
const Projects = () => {
  return (
    <>
      <h1 className='projectheading'>Projects</h1>
     <div className="projects">
        <ProjectCard/>
        <ProjectCard/>
        <ProjectCard/>
        <ProjectCard/>
        <ProjectCard/>
     </div>
    </>
  );
}

export default Projects;
