import React from 'react';
import './HomePage.css'
import Navbar from '../Navbar/Navbar';
import mountain1 from '../../images/mountain2.png'
import mountain2 from '../../images/mountain3.png'
import mountain3 from '../../images/mountain5.jpg'
import clouds from '../../images/clouds.png'
const Homepage = () => {
  return (
    <>
    <Navbar/>
    <div className="homescreen">
        <img src={mountain3} alt="" className="mountain3" />
        {/* <img src={clouds} alt="" className="clouds" />
        <img src={clouds} alt="" className="clouds2" /> */}
        <img src={mountain2} alt="" className="mountain2" />
        <h1>Welcome</h1>
        <img src={mountain1} alt="" className="mountain1" />
    </div>

    <div className="homescreen homescreenreflextion">
        <img src={mountain3} alt="" className="mountain3" />
        {/* <img src={clouds} alt="" className="clouds" />
        <img src={clouds} alt="" className="clouds2" /> */}
        <img src={mountain2} alt="" className="mountain2" />
        {/* <h1>Welcome</h1> */}
        <img src={mountain1} alt="" className="mountain1" />
    </div>
    </>
  );
}

export default Homepage;
