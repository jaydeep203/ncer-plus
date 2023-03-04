import '../util.css';

import React from 'react'
import { useLocation, Link } from 'react-router-dom';


const Titlename = () => {
  const location = useLocation();
  let path = location.pathname;
  path = path.slice(1).toUpperCase();
  return(
    <div className="title"><p>{path}</p></div> 
  )
}
















export const CompSubSec = [
  {
    sub:'MATHEMATICS-III',
    link:'https://drive.google.com/drive/folders/1xLu4wfvL746VoqdOJrDakGzZy6y6Aly-',
    path: "em3"
  },
  {
    sub: 'DISCRETE MATHEMATICS',
    link: 'https://drive.google.com/drive/folders/1VM8PhmdxnFFgDAqZqW0IbbqfnHYDeljE',
    path: "disc-math"
  },
  {
    sub: 'COMPUTER ARCHITECTURE AND ORGANIZATION',
    link: 'https://drive.google.com/drive/folders/1loDLARYPKNKz9Zzm5K5ZRaRz6HEyn4DK',
    path: "com-arch-org"
  },
  {
    sub: 'DIGITAL ELECTRONICS AND MICROPROCESSORS',
    link: 'https://drive.google.com/drive/folders/1kB8V9BHItTVu2NAEjrPep41-n4F-AeNe',
    path: "digital-electronics"
  },
  {
    sub: 'DATA STRUCTURES',
    link: 'https://drive.google.com/drive/folders/1GYc5IazxruhI26PIC94dP81n2NKwPSHk',
    path: "data-struct"
  },
  {
    sub: 'DESIGN AND ANALYSIS OF ALGORITHMS',
    link: 'https://drive.google.com/drive/folders/1Mhi072BPT1JvfWxPjf7Tzq3Z1Zqi7Vl_',
    path: "design-ana-algo"
  },
  {
    sub: 'PROBABILITY AND STATISTICS',
    link: 'https://drive.google.com/drive/folders/1A6eRIi4A2FhZGQS9Z7sPVIYUVng-URc9',
    path: "probability-static"
  },
  {
    sub: 'OPERATING SYSTEM',
    link: 'https://drive.google.com/drive/folders/1E-Uw1-9ws1AHuLRgUgPJGXHLc-EKI8-R',
    path: "operating-sys"
  },
  {
    sub: 'C++',
    link: 'https://drive.google.com/drive/folders/1fSTKZv-oyBD2bnCuybzwZ8ZKSkSoKRqN',
    path: "cpp"
  },
  {
    sub: 'JAVA',
    link: 'https://drive.google.com/drive/folders/1FshF9xhaT0Gqg2scfCpTVmGNMDawTjRD',
    path: "java"
  },
  {
    sub: 'PHYSICS OF ENGINEERING MATERIALS',
    link: 'https://drive.google.com/drive/folders/1EbZsvuhKKOW-jOKAduuzm-JXok5Ku7FE',
    path: "phy-of-mate"
  },
  {
    sub: 'NUMERICAL METHODS',
    link: 'https://drive.google.com/drive/folders/1EUQcSLkkNFIL89hymerBmIoepE4h1MPC',
    path: "numerical-method"
  },
  {
    sub: 'SOFT SKILLS AND PERSONALITY DEVELOPMENT',
    link: 'https://drive.google.com/drive/folders/1EgjssxZCkh87LiW1Yc4XMjSmqPp-P8q3',
    path: "soft-skill"
  },
  {
    sub: 'PRODUCT DESIGN ENGINEERING',
    link: 'https://drive.google.com/drive/folders/1O9TvVaOkz0SOvi99izWBee8tc2JbzZF4',
    path: "product-desi"
  },
];

const CompSec = () => {
  
  return(
    <div className='Computer cardBody'>
      {
          CompSubSec.map((data)=>(
            <Link className='cards' key={data.path} to={`/notes/${data.path}`}>{data.sub}</Link>

          ))

        }
    </div>
  )
}

export const CompSubThi = [
  {
    sub:'DATABASE SYSTEMS',
    link: "/coming-soon",
    path: 'dsys',
  },
  {
    sub:'THEORY OF COMPUTATIONS',
    link: "/coming-soon",
    path: 'tocomp',
  },
  {
    sub:'MACHINE LEARNING',
    link: "/coming-soon",
    path: 'mlearn',
  },
  {
    sub:'INTRODUCTION TO RESEARCH',
    link: "/coming-soon",
    path: 'introtore',
  },
  {
    sub:'CYBER LAWS',
    link: "/coming-soon",
    path: 'cylaw',
  },
  {
    sub:'ECONOMICS AND MANAGEMENT',
    link: "/coming-soon",
    path: 'ecoma',
  },
  {
    sub:'BUSINESS COMMUNICATION',
    link: "/coming-soon",
    path: 'bc',
  },
  {
    sub:'COMPETITIVE PROGRAMMING-I',
    link: "/coming-soon",
    path: 'cp1',
  },
  {
    sub:'COMPILER DESIGN',
    link: "/coming-soon",
    path: 'compilerde',
  },
  {
    sub:'COMPUTER NETWORKS',
    link: "/coming-soon",
    path: 'compnet',
  },
  {
    sub:'HUMAN COMPUTER INTERACTION',
    link: "/coming-soon",
    path: 'hcompinter',
  },
  {
    sub:'ARTIFICIAL INTELLIGENCE',
    link: "/coming-soon",
    path: 'ai',
  },
  {
    sub:'OBJECT-ORIENTED ANALYSIS DESIGN',
    link: "/coming-soon",
    path: 'ooades',
  },
  {
    sub:'GEOGRAPHIC INFORMATION SYSTEM',
    link: "/coming-soon",
    path: 'geoinfosys',
  },
  {
    sub:'BIOLOGY',
    link: "/coming-soon",
    path: 'biology',
  },
  {
    sub:'INTERNET OF THINGS',
    link: "/coming-soon",
    path: 'iot',
  },
  {
    sub:'DEVELOPMENT ENGINEERING',
    link: "/coming-soon",
    path: 'deveng',
  },
  {
    sub:'NATIONAL SOCIAL SERVICE',
    link: "/coming-soon",
    path: 'nasservice',
  },
  {
    sub:'CONSUMER BEHAVIOUR',
    link: "/coming-soon",
    path: 'cb',
  },
                    ];
const CompThi = () => {
  
  return(
    <div className='Computer cardBody'>
      {
          CompSubThi.map((data)=>(
            <Link className='cards' key={data.path} to={`/notes/${data.path}`}>{data.sub}</Link>

          ))

        }
    </div>
  )
}

const CompFour = () => {
  return(
  <div className="imgdiv">
      <img className='imgSoon' src="https://cdn2.vectorstock.com/i/1000x1000/94/61/coming-soon-mystery-retail-concept-vector-13969461.jpg" alt="coming soon" />
    </div>
  )
}

const Computer = () => {
  const location = useLocation();
  const path = location.pathname;
  if(path==='/computer/second-year')
  { return <><Titlename/> <CompSec/></> }
  else if(path==='/computer/third-year')
  { return <><Titlename/> <CompThi/></> }
  else
  { return <><Titlename/> <CompFour/></> }
}

export default Computer
