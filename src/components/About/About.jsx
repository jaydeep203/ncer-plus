import React from 'react';
import './About.css';
import { ArrowRight } from "react-feather"

const About = () => {
  return (
    <div className='About'>
      <div className='Heading'>
        <h1>About Page</h1>
      </div>
      <div className='Para'>
        <p>
            Hi,
        </p>
        <br />
        <p> 
          About...
            {/* This web is the web version of the NCER+ apk which is previously developed by our college students. I have taken inspiration from the NCER+ apk. I have gave my best in developing in this web app there is also some bugs I will try to fix it later. */}
        </p>
        <br />
        <p>If you have some doubts contact me at this <ArrowRight/></p>
        {/* <a  href="mailto:djtricks2003@gmail.com"><button id="submit">Contact Me</button></a> */}
        <a  href="www.google.com"><button id="submit">Contact Me</button></a>
        
      </div>
    </div>
  )
}

export default About
