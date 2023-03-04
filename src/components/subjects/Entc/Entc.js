import React from 'react';
import '../util.css';
import { useLocation, Link } from 'react-router-dom';

const Titlename = () => {
  const location = useLocation();
  let path = location.pathname;
  path = path.slice(1).toUpperCase();
  return(
    <div className="title"><p>{path}</p></div> 
  )
}

export const EntcSubSec = [
  {
    sub:'MATHEMATICS-III',
    link: 'https://drive.google.com/drive/folders/1xLu4wfvL746VoqdOJrDakGzZy6y6Aly-',
    path: "em3",
  },
  {
    sub:'ANALOG CIRCUITS',
    link: 'https://drive.google.com/drive/folders/1-RKCzXQoP42tGnwiBc6MVwRGebo70WJr',
    path: "analog-cir",
  },
  {
    sub:'ELECTRONICS DEVICES AND CIRCUITS',
    link: 'https://drive.google.com/drive/folders/1-SEuAOB3BGurV2ZyHjyPHx7sJCFFkqr_',
    path: "elect-devic",
  },
  {
    sub:'NETWORK ANALYSIS',
    link: 'https://drive.google.com/drive/folders/1-YU3lLepDWXaM9blBAzV4ckM-npWxlD0',
    path: "network-analy",
  },
  {
    sub:'DIGITAL CIRCUITS AND MICROPROCESSORS',
    link: 'https://drive.google.com/drive/folders/1kB8V9BHItTVu2NAEjrPep41-n4F-AeNe',
    path: "digi-circuit",
  },
  {
    sub:'ELECTRICAL MACHINES AND INSTRUMENTS',
    link: 'https://drive.google.com/drive/folders/1-jecLgc3ey-Oro39rQHQcZ3uFmnYIs-p',
    path: "elec-machi",
  },
  {
    sub:'ANALOG COMMUNICATION ENGINEERING',
    link: 'https://drive.google.com/drive/folders/1-jecLgc3ey-Oro39rQHQcZ3uFmnYIs-p',
    path: "ana-communication",
  },
  {
    sub:'MICROCONTROLLER',
    link: 'https://drive.google.com/drive/folders/1-ufYfABEMBG-VM2Vq_6qXhpwtQ7Tm99i',
    path: "microcontroller",
  },
  {
    sub:'SIGNALS AND SYSTEMS',
    link: 'https://drive.google.com/drive/folders/1-jecLgc3ey-Oro39rQHQcZ3uFmnYIs-p',
    path: "singals-system",
  },
  {
    sub:'CONTROL SYSTEM ENGINEERING',
    link: 'https://drive.google.com/drive/folders/1-jecLgc3ey-Oro39rQHQcZ3uFmnYIs-p',
    path: "control-sys",
  },
];



const EntcSec = () => {
  
  
  return(
    <div className='cardBody'>
      {
        EntcSubSec.map((data)=>(
              <Link className='cards' key={data.path} to={`/notes/${data.path}`}>{data.sub}</Link>
  
            ))

      }
    </div>
  )
}

const EntcThi = () => {
  return(
    <div className="imgdiv">

      <img className='imgSoon' src="https://cdn2.vectorstock.com/i/1000x1000/94/61/coming-soon-mystery-retail-concept-vector-13969461.jpg" alt="coming soon" />
    </div>
  )
}

const EntcFour = () => {
  return(
    <div className="imgdiv">

      <img className='imgSoon' src="https://cdn2.vectorstock.com/i/1000x1000/94/61/coming-soon-mystery-retail-concept-vector-13969461.jpg" alt="coming soon" />
    </div>
  )
}

const Entc = () => {
  const location = useLocation();
  const path = location.pathname;

  if(path==='/entc/second-year')
  {
      return <><Titlename /> <EntcSec /></>
  }
  else if(path==='/entc/third-year')
  {
    return <><Titlename/> <EntcThi/></> 
  }
  else{
    return <><Titlename/> <EntcFour/></> 
  }
}

export default Entc
