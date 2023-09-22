import React, { useEffect } from 'react';
import './HomePage.css'
import Navbar from '../Navbar/Navbar';
import mountain1 from '../../images/mountain2.png'
import mountain2 from '../../images/mountain3.png'
import mountain3 from '../../images/mountain5.jpg'
// import clouds from '../../images/clouds.png'
import profile from '../../images/myprofile.jpg'
const Homepage = () => {



  useEffect(()=>{

    const content = document.getElementById('aboutcontent')
    const content1 = document.getElementById('aboutcontent1')


    const handleScroll = ()=>{
      const value = window.scrollY;
      console.log(value)
      // if(value<10){
      // content.style.zIndex=3;
      // }
      // content.style.zIndex=1;
      if(content&&content1){
        content.style.top = value*1 +50+'px';
        content1.style.top = value*1 +'px';
      }
      else if(content&&!content1){
        content.style.top = value*1.5 +'px';
      }
      else if(!content&&content1){
        content1.style.top = value*0.5 +'px';

      }

    }
    window.addEventListener('scroll',handleScroll)

  },[])


  


  return (
    <>
    <Navbar/>
   
    <div className="homescreen" id='homebtn'>
        <img src={mountain3} alt="" className="mountain3" />
        {/* <img src={clouds} alt="" className="clouds" />
        <img src={clouds} alt="" className="clouds2" /> */}
        <img src={mountain2} alt="" className="mountain2" />
        <div className="content" id='aboutcontent'>



<div className="profilebox">
<div className="profileimg">
  <img src={profile} alt="" />
</div>
<h1>Welcome to my <span className='fontcolorred'>P</span>ortfolio!</h1>
</div>

        <p>I'm a passionate web developer fresh out of college with a degree in Computer Science Engineering
     I am excited to embark on a career path in web development, focusing on creating impactful and user
    friendly experiences. With a strong foundation in HTML, CSS, and JavaScript, I bring expertise in front-end
      development. I have also gained valuable experience working with the MERN stack, showcasing my proficiency in
     React.js and Node.js. I am eager to contribute my skills and knowledge to innovative projects, collaborating with talented
     teams to build exceptional web solutions.</p>
        </div>
        <img src={mountain1} alt="" className="mountain1" />
    </div>

    <div className="homescreen homescreenreflextion">
        <img src={mountain3} alt="" className="mountain3" />
        {/* <img src={clouds} alt="" className="clouds" />
        <img src={clouds} alt="" className="clouds2" /> */}
        <img src={mountain2} alt="" className="mountain2" />
        {/* <h1>Welcome</h1> */}
        <div className="content" id='aboutcontent1'>
        <div className="profilebox">
<div className="profileimg">
  <img src={profile} alt="" />
</div>
<h1>Welcome to my <span className='fontcolorred'>P</span>ortfolio!</h1>
</div>
        <p>I'm a passionate web developer fresh out of college with a degree in Computer Science Engineering
     I am excited to embark on a career path in web development, focusing on creating impactful and user
    friendly experiences. With a strong foundation in HTML, CSS, and JavaScript, I bring expertise in front-end
      development. I have also gained valuable experience working with the MERN stack, showcasing my proficiency in
     React.js and Node.js. I am eager to contribute my skills and knowledge to innovative projects, collaborating with talented
     teams to build exceptional web solutions.</p>
        </div>
        <img src={mountain1} alt="" className="mountain1" />
    </div>


    </>
  );
}

export default Homepage;
