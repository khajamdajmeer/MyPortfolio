import React, { useState } from 'react';
import './Navbar.css'
const Navbar = () => {


  const [showicon,setShowicon]=useState('menu')

  const handleHammenu = ()=>{
    const menu = document.getElementById('hammenu');
    if(menu.style.display==='none'){
      menu.style.display='block'
      setShowicon('close')
    }
    else{
      menu.style.display='none'
      setShowicon('menu')
    }
  }



const handleHome = ()=>{
  const navbar = document.getElementById('newhome');
  if(navbar){
    const navbarpostion = navbar.getBoundingClientRect().top+window.scrollY+10;
    window.scrollTo({
      top: navbarpostion,
      behavior: 'smooth', // for smooth scrolling
    });
  }
}
const handleAbout = ()=>{
  const navbar = document.getElementById('iamabout');
  if(navbar){
    const navbarpostion = navbar.getBoundingClientRect().top+window.scrollY+10;
    window.scrollTo({
      top: navbarpostion,
      behavior: 'smooth', // for smooth scrolling
    });
  }
}


const handleprojects = ()=>{
  const project = document.getElementById('projectshead')
  if(project){
    const projectposition = project.getBoundingClientRect().top+window.screenY;
    window.scrollTo({
      top: projectposition,
      behavior: 'smooth', // for smooth scrolling
    });
  }
}
const handleContact = ()=>{
  const project = document.getElementById('iamcontactpage')
  if(project){
    const projectposition = project.getBoundingClientRect().top+window.screenY;
    window.scrollTo({
      top: projectposition,
      behavior: 'smooth', // for smooth scrolling
    });
  }
}


  return (
    <>
      <nav className="navbar" id='navigation'>
        <h1 className='navlogo'>Ajmeer khaja</h1>
        
      

      <div className="hamburgermenu"><button style={{cursor:'pointer'}} onClick={handleHammenu}>
        <span class="material-symbols-outlined">
{showicon}
</span>
          </button></div>
      <div  id='hammenu' onClick={handleHammenu}>
      <ul className="menu">
            <li onClick={handleHome}>Home</li>
            <li onClick={handleAbout} >About</li>
            <li onClick={handleprojects}>Projects</li>
            <li onClick={handleContact}>Contact</li>
        </ul>
      </div>
      </nav>
    </>
  );
}

export default Navbar; 