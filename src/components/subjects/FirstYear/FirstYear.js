import '../util.css';
import {  useLocation, Link } from 'react-router-dom';
import React from 'react';


const Titlename = () => {
  const location = useLocation();
  let path = location.pathname;
  path = path.slice(1).toUpperCase();
  return(
    <div className="title"><p>{path}</p></div> 
  )
}


export const FirstSubjects = [
      {
        link:"https://drive.google.com/drive/folders/1GwCYKJeeSShK-Sp6LDIOSO-L_7urZd6e",
        sub:"MATHEMATICS-I",
        path: "math1",
      },
      {
        link:"https://drive.google.com/drive/folders/1H1rrU3MUEJ0X-hz6x1e49na2GpOTXDZB",
        sub:"PHYSICS",
        path: "phy"
      },
      {
        link:"https://drive.google.com/drive/folders/1H6leAIC0y4AA7G8f9f69IqJl8JS-OUOR",
        sub:"GRAPHICS",
        path: "graphic"
      },
      {
        link:"https://drive.google.com/drive/folders/1H8CsxWYI-RlyRGkZW-lcRPBoRWaW4_nJ",
        sub:"COMMUNICATION SKILLS",
        path:"commu-skill",
      },
      {
        link:"https://drive.google.com/drive/folders/1HBRav3pSRGcEDgLs7WuyoOdquZCfD4mR",
        sub:"ENERGY AND ENVIRONMENT ENGINEERING",
        path: "eeengg"
      },
      {
        link:"https://drive.google.com/drive/folders/1HDSdedo5C21BTmCznqkCbG8S8vhawHeB",
        sub:"MATHEMATICS-II",
        path: "maths2"
      },
      {
        link:"https://drive.google.com/drive/folders/1HLt4_YAk-PC4KXNf8zTlDVZAAha4-XPD",
        sub:"CHEMISTRY",
        path: "chem"
      },
      {
        link:"https://drive.google.com/drive/folders/1HMBcEFwTgLw6WaQLrJhYUiskYrQVzDa8",
        sub:"MECHANICS",
        path: "mechanics"
      },
      {
        link:"https://drive.google.com/drive/folders/1HQP4k8xFrUjA1ooecM3gu0ugxWN8_Ujk",
        sub:"PROGRAMMING IN C",
        path: "proginc"
      },
    ];

const FirstYear = () => {
    // const Subjects = ['MATHEMATICS-I', 'PHYSICS', 'GRAPHICS', 'COMMUNICATION SKILLS', 'ENERGY AND ENVIRONMENT ENGINEERING', 'MATHEMATICS-II', 'CHEMISTRY', 'MECHANICS', 'PROGRAMMING IN C'];
   

  return (
    <>
      <Titlename/>
      <div className='cardBody'>
        {
          FirstSubjects.map((data)=>(
            <Link className='cards' key={data.path} to={`/notes/${data.path}`}>{data.sub}</Link>

          ))

        }
      </div>
      
    </>
  )
}

export default FirstYear



