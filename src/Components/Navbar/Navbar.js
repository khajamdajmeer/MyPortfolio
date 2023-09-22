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


const handleabout= ()=>{
  const targetElement = document.getElementById('');

  if (targetElement) {
    const elementPosition = targetElement.getBoundingClientRect().top + window.scrollY;
  
    window.scrollTo({
      top: elementPosition,
      behavior: 'smooth', // for smooth scrolling
    });
  }
}
const handleHome = ()=>{
  const navbar = document.getElementById('homebtn');
  if(navbar){
    const navbarpostion = navbar.getBoundingClientRect().top+window.scrollY;
    window.scrollTo({
      top: navbarpostion,
      behavior: 'smooth', // for smooth scrolling
    });
  }
}


  return (
    <>
      <nav className="navbar" id='navigation'>
        <h1 className='navlogo'>Ajmeer khaja</h1>
        
      

      <div className="hamburgermenu"><button onClick={handleHammenu}>
        <span class="material-symbols-outlined">
{showicon}
</span>
          </button></div>
      <div  id='hammenu' onClick={handleHammenu}>
      <ul className="menu">
            <li onClick={handleHome}>Home</li>
            <li >About</li>
            <li>Projects</li>
            <li>Contact</li>
            <li>Social Media</li>
            <li>Form</li>
        </ul>
      </div>
      </nav>
    </>
  );
}

export default Navbar; 