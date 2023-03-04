import '../util.css';
import React from 'react'
import { useLocation, Link } from 'react-router-dom';

const Titlename = () => {
  const location = useLocation();
  let paths = location.pathname;
  paths = paths.slice(1).toUpperCase();
  return(
    <div className="title"><p>{paths}</p></div> 
  )
}



export const MechSubSec = [
  {
    sub:'ENGINEERING MATHEMATICS-III',
    link: 'https://drive.google.com/drive/folders/1xLu4wfvL746VoqdOJrDakGzZy6y6Aly-',
    path: "em3"
  },
  {
    sub:'MATERIALS SCIENCE AND METALLURGY',
    link:"/coming-soon",
    path: 'matersam',
  },
  {
    sub:'FLUID MECHANICS',
    link:"/coming-soon",
    path: 'flumech'
  },
  {
    sub:'MACHINE DRAWING AND CAD',
    link:"/coming-soon",
    path: 'machidrawcad'
  },
  {
    sub:'THERMODYNAMICS',
    link:"/coming-soon",
    path: 'thermodynamic'
  },
  {
    sub:'MANUFACTURING PROCESSES-I',
    link:"/coming-soon",
    path: 'manupro1'
  },
  {
    sub: 'THEORY OF MACHINES',
    link:"/coming-soon",
    path: 'theoryofmachin'
  },
  {
    sub:'STRENGTH OF MATERIALS',
    link:"/coming-soon",
    path: 'streofmate'
  },
  {
    sub:'PRODUCT DESIGN ENGINEERING',
    link:"/coming-soon",
    path: 'prodesengg'
  },
  {
    sub:'NUMERICAL METHODS IN MECHANICAL ENGINEERING',
    link:"/coming-soon",
    path: 'nummethoinmechaengg'
  },
  {
    sub:'PHYSICS OF ENGINEERING MATERIALS',
    link:"/coming-soon",
    path: 'phyofenggmaterials'
  },
   
  {
    sub:'ADVANCED ENGINEERING CHEMISTRY',
    link:"/coming-soon",
    path: 'advaenggchem'
  },
  {
    sub:'INTERPERSONAL COMMUNICATION SKILL AND SELF DEVELOPMENT',
    link:"/coming-soon",
    path: 'intercommsselfdev'
  },
];



const MechSec = () => {
  
  return(
    <div className='cardBody'>
      {
          MechSubSec.map((data)=>(
            <Link className='cards' key={data.path} to={`/notes/${data.path}`}>{data.sub}</Link>

          ))

        }
    </div>
  )
}

const MechThi = () => {
  return(
    <div className="imgdiv">
      <img className='imgSoon' src="https://drive.google.com/uc?export=view&id=1sg6WZ_Q0MkfnFN2W_51t4zqjgRtwjjMa" alt="coming soon" />
    </div>
  )
}

const MechFour = () => {
  return(
    <div className="imgdiv">
      <img className='imgSoon' src="https://drive.google.com/uc?export=view&id=1sg6WZ_Q0MkfnFN2W_51t4zqjgRtwjjMa" alt="coming soon" />
    </div>
  )
}

const Mechanical = () => {
  const location = useLocation();
  const path = location.pathname;
  if(path==='/mechanical/second-year') return <><Titlename/> <MechSec/></>
  else if(path==='/mechanical/third-year') return <><Titlename/> <MechThi/></>
  else return <><Titlename/> <MechFour/></>
}

export default Mechanical
