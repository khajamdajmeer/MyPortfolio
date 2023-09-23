import React from 'react';
import './Projects.css'
import ProjectCard from '../ProjectCard/ProjectCard';
import dailynews from '../../images/projectimgs/dailynews.png'
const Projects = () => {

  

const projectsArray = [
  {
    Title:'daily News',
    Link:'/',
    gitlink:'https://github.com/khajamdajmeer/MyPortfolio',
    discription: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate, harum deserunt. Quos consectetur dicta tempora distinctio itaque sit saepe deserunt non. Nesciunt, nisi?",
    image:dailynews
  }, {
    Title:'daily News',
    Link:'/',
    gitlink:'https://github.com/khajamdajmeer/MyPortfolio',
    discription: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate, harum deserunt. Quos consectetur dicta tempora distinctio itaque sit saepe deserunt non. Nesciunt, nisi?",
    image:dailynews
  }, {
    Title:'daily News',
    Link:'/',
    gitlink:'https://github.com/khajamdajmeer/MyPortfolio',
    discription: "Lorem ipsum dolor sit amet,Lorem ipsum dolor sit amet,Lorem ipsum dolor sit amet,Lorem ipsum dolor sit amet,Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate, harum deserunt. Quos consectetur dicta tempora distinctio itaque sit saepe deserunt non. Nesciunt, nisi?",
    image:dailynews
  }, {
    Title:'daily News',
    Link:'/',
    gitlink:'https://github.com/khajamdajmeer/MyPortfolio',
    discription: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate, harum deserunt. Quos consectetur dicta tempora distinctio itaque sit saepe deserunt non. Nesciunt, nisi?",
    image:dailynews
  },
]


  return (
    <>
      <h1 className='projectheading' id='projectshead'>My Projects</h1>
     <div className="projects">
      {projectsArray.map((ele)=>{
        return(
          <ProjectCard img={ele.image} title={ele.Title} link={ele.Link} gitlink={ele.gitlink} discription={ele.discription} />
        )
      })}
        <ProjectCard img={dailynews} title='Daily News'/>
        <div className="App">
    </div>
     </div>
    </>
  );
}

export default Projects;
