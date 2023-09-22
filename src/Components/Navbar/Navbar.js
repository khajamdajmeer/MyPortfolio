import React from 'react';
import './Navbar.css'
const Navbar = () => {
  return (
    <>
      <nav className="navbar">
        <h1 className='navlogo'>Ajmeer khaja</h1>
        <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
            <li>Projects</li>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
