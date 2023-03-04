import '../util.css';

import React from 'react';
import {  useLocation, useParams, Link } from 'react-router-dom';

const Titlename = () => {
  const location = useLocation();
  let path = location.pathname;
  path = path.slice(1).toUpperCase();
  return(
    <div className="title"><p>{path}</p></div>
  )
}

export const AutoSecSub = [
  {
    sub: 'MATHEMATICS-III',
    link: "https://drive.google.com/drive/folders/1xLu4wfvL746VoqdOJrDakGzZy6y6Aly-",
    path: "em3"

  }, 
  {
    sub:'MATERIAL SCIENCE AND METALLURGY',
    link: "/coming-soon",
    path: "material-sci",
  },
  {
    sub:'FLUID MECHANICS AND MACHINES', 
    link: "/coming-soon",
    path: "fmam",
  },
  {
    sub:'AUTOMOTIVE COMPONENT DRAWING AND COMPUTER AIDED DRAFTING',
    link: "/coming-soon", 
    path: "acdacad",
  },
  {
    sub:'THEORY OF MACHINE', 
    link: "/coming-soon",
    path: "tom",
  },
  {
    sub:'THEORY OF AUTOMOTIVE ENGINES', 
    link: "/coming-soon",
    path: "toae",
  },
  {
    sub:'ENGINEERING THERMODYNAMICS', 
    link: "/coming-soon",
    path: "engther",
  },
  {
    sub:'STRENGTH OF MATERIALS', 
    link: "/coming-soon",
    path: "som",
  },
  {
    sub:'NUMERICAL METHODS IN AUTOMOBILE ENGINEERING', 
    link: "/coming-soon",
    path: "nmiae",
  },
  {
    sub:'PRODUCT DESIGN ENGINEERING',
    link: "/coming-soon",
    path: "pdeng",
  },
  {
    sub:'PHYSICS OF ENGINEERING MATERIALS', 
    link: "/coming-soon",
    path: "poem",
  },
  {
    sub:'ADVANCED ENGINEERING CHEMISTRY', 
    link: "/coming-soon",
    path: "aec",
  },
  {
    sub:'INTERPERSONAL COMMUNICATION SKILL & SELF DEVELOPMENT' ,
    link: "/coming-soon",
    path: "icsnsd",
  },
];

const AutoSec = () => {
  
  return(
    <div className='cardBody'>
      {
          AutoSecSub.map((data)=>(
            <Link className='cards' key={data.path} to={`/notes/${data.path}`}>{data.sub}</Link>
          ))

        }
    </div>
  )
}

const AutoThi = () => {
  return(
    <div className="imgdiv">

      <img className='imgSoon' src="https://cdn2.vectorstock.com/i/1000x1000/94/61/coming-soon-mystery-retail-concept-vector-13969461.jpg" alt="coming soon" />
    </div>
  )
}

const AutoFour = () => {
  return(
    <div className="imgdiv">
      <img className='imgSoon' src="https://cdn2.vectorstock.com/i/1000x1000/94/61/coming-soon-mystery-retail-concept-vector-13969461.jpg" alt="coming soon" />

    </div>
  )
}



const Automobile = () => {
  let loc = useParams();
  if(loc.id==='second-year')
  {
      return <><Titlename/> <AutoSec/></>
  }
  else if(loc.id==='third-year')
  {
    return <><Titlename/> <AutoThi/></>
  }
  else{
    return <><Titlename/> <AutoFour/></>
  }

  
}

export default Automobile
