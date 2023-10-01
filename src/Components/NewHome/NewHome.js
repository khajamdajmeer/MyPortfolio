import React from 'react';
import './NewHome.css'
import Navbar from '../Navbar/Navbar';

import profile from '../../images/myprofile.jpg';
import htmllogo from '../../images/Skills/htmllogo.png';
import csslogo from '../../images/Skills/svg.png';
import jslogo from '../../images/Skills/JS.png';
import mongologo from '../../images/Skills/newmongologo.png';
import nodejslogo from '../../images/Skills/nodelogobg.png';
import reactlogo from '../../images/Skills/newreactlogo.png';
import linkedinlogo from '../../images/linkedinicon.png';
import gitlogo from '../../images/github-icon.png'

const NewHome = () => {
  return (
    <>
    <Navbar/>
      <div className="homepagecontainer" id='newhome'>
        <div className="myhomebox">
            <div className="homeinfo">
{/* <h1>Welcome to my <span className='fontcolorred'>P</span>ortfolio! </h1> */}
<h1 className='introhead'>Full Stack Web Developer</h1>
{/* <p>Hi, I'm <span className='fontcolorred'>A</span>jmeer <span className='fontcolorred'>K</span>haja a passionate web developer fresh out of college with a degree in Computer Science Engineering
     I am excited to embark on a career path in web development, focusing on creating impactful and user
    friendly experiences.</p> */}
    <p className='intorpara'>Hi, I'm Ajmeer Khaja. A Passionate Web Developer Based in Hyderabad,Telangana. 
     <span class="material-symbols-outlined">
pin_drop
</span> </p>

    <div className="sociallinks" id='socialid'>
      {/* <link href="/">iam here</link> */}
      <a href="https://www.linkedin.com/in/ajmeer-khaja-5398b9203"   rel='noreferrer' target='_blank' className="mysociallinks">
     <img src={linkedinlogo} alt="Linkedin" />
      </a>
      
      <a href="https://github.com/khajamdajmeer"   rel='noreferrer' target='_blank' className="mysociallinks" >
        <img src={gitlogo} alt="git" />
      </a>
    </div>

   
            </div>
            <div className="homeprfileimg">
                
            <svg
      viewBox="0 0 500 500"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width="100%"
      height='100%'
      id="blobSvg"
    >
      <defs>
        <clipPath id="shape">
          <path
            id="blob"
            fill="none"
            strokeWidth="7px"
            stroke="#d1d8e0"
          >
            <animate attributeName='d' dur='10000ms' repeatCount='indefinite'
                values="M461,329Q439,408,362.5,430.5Q286,453,206.5,457.5Q127,462,80,395.5Q33,329,24.5,247Q16,165,79,114Q142,63,214,54Q286,45,359,71.5Q432,98,457.5,174Q483,250,461,329Z;
                M439,319Q414,388,353,439Q292,490,216.5,464.5Q141,439,91,382.5Q41,326,41.5,250Q42,174,91.5,118Q141,62,216.5,37.5Q292,13,360.5,56.5Q429,100,446.5,175Q464,250,439,319Z;
                M434.26049,318.47339Q412.94678,386.94678,351.42016,430.04759Q289.89355,473.14841,209.12743,466.60645Q128.36131,460.06449,76.78147,396.19192Q25.20164,332.31935,31.49437,252.63306Q37.7871,172.94678,92.02661,121.15967Q146.26612,69.37257,217.02661,51.19192Q287.7871,33.01126,347.3347,75.45804Q406.88229,117.90481,431.22825,183.95241Q455.57421,250,434.26049,318.47339Z;

                M435.5,318.5Q413,387,349.5,419Q286,451,218,437.5Q150,424,98,374Q46,324,35,246Q24,168,79,108Q134,48,209.5,48.5Q285,49,359,72.5Q433,96,445.5,173Q458,250,435.5,318.5Z;

                M461,329Q439,408,362.5,430.5Q286,453,206.5,457.5Q127,462,80,395.5Q33,329,24.5,247Q16,165,79,114Q142,63,214,54Q286,45,359,71.5Q432,98,457.5,174Q483,250,461,329Z;
                "></animate>
            </path>
        </clipPath>
      </defs>
      <image
        x="0"
        y="0"
        width="100%"
        height="100%"
        clipPath="url(#shape)"
        xlinkHref={profile}
        preserveAspectRatio="none"
      ></image>
    </svg>

            </div>
        </div>


      <div className="skillsbox">
        Tech Stack | 
        <img src={htmllogo} alt="" className='skilllogos' />
        <img src={csslogo} alt="" className='skilllogos' />
        <img src={jslogo} alt="" className='skilllogos' />
        <img src={reactlogo} alt=""  className='skilllogos' id='reactlogo'/>
        <img src={mongologo} alt=""  className='skilllogos'/>
        <img src={nodejslogo} alt=""  className='skilllogos'/>
      </div>
      </div>
    </>
  );
}

export default NewHome;
