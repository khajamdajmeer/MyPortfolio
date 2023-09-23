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
        content.style.top = value*1 +'px';
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

<h1>Welcome to my <span className='fontcolorred'>P</span>ortfolio!</h1>

        <p>I'm a passionate web developer fresh out of college with a degree in Computer Science Engineering
     I am excited to embark on a career path in web development, focusing on creating impactful and user
    friendly experiences. With a strong foundation in HTML, CSS, and JavaScript, I bring expertise in front-end
      development. I have also gained valuable experience working with the MERN stack, showcasing my proficiency in
     React.js and Node.js. I am eager to contribute my skills and knowledge to innovative projects, collaborating with talented
     teams to build exceptional web solutions.</p>
        </div>
        <div className="profileimg ">



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

        <img src={mountain1} alt="" className="mountain1" />
    </div>


    <div className="homescreen homescreenreflextion" id='homebtn'>
        <img src={mountain3} alt="" className="mountain3" />
        {/* <img src={clouds} alt="" className="clouds" />
        <img src={clouds} alt="" className="clouds2" /> */}
        <img src={mountain2} alt="" className="mountain2" />
        <div className="content" id='aboutcontent1'>



<div className="profilebox">

<h1>Welcome to my <span className='fontcolorred'>P</span>ortfolio!</h1>

        <p>I'm a passionate web developer fresh out of college with a degree in Computer Science Engineering
     I am excited to embark on a career path in web development, focusing on creating impactful and user
    friendly experiences. With a strong foundation in HTML, CSS, and JavaScript, I bring expertise in front-end
      development. I have also gained valuable experience working with the MERN stack, showcasing my proficiency in
     React.js and Node.js. I am eager to contribute my skills and knowledge to innovative projects, collaborating with talented
     teams to build exceptional web solutions.</p>
        </div>
        <div className="profileimg ">



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

        <img src={mountain1} alt="" className="mountain1" />
    </div>
   


    </>
  );
}

export default Homepage;
