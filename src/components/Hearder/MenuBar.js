import React, { useState } from 'react';
import './Header.css';
import './Menu.css';
import {ChevronDown, ChevronUp} from 'react-feather';
import {Link} from "react-router-dom";



const MenuBar = () => {
  const [isOpen, setIsOpen]= useState(false);
  const Options = [
    {
      title:"MAHADBT WEBSITE",
      link: 'https://mahadbt.maharashtra.gov.in/Login/Login',
    },
    {
      title:"DBATU WEBSITE FORM FILLING",
      link: 'https://dbatuerp.com/',
    },
    {
      title:"NCER ERP",
      link: 'https://learner.pceterp.in/',
    },
    {
      title:"NCER WEBSITE",
      link: 'https://www.ncerpune.in/',
    },
    {
      title:"LEARNING ZONE",
      link: 'https://nptel.ac.in/',
    },
    {
      title:"COLLEGE LINKEDIN",
      link: 'https://www.linkedin.com/in/ncer-pune-896510164',
    },
    {
      title:"COLLEGE INSTAGRAM",
      link: 'https://instagram.com/pcet_ncerpune?igshid=YmMyMTA2M2Y=',
    },
    {
      title:"DBATU LINKEDIN",
      link: 'https://www.linkedin.com/school/dbatuonline/',
    },

  ];
  return (
    <div className={(isOpen)?("MenuBar1 MenuBar main"):'MenuBar main'} >
      <div className='dropdown'>
        <div className="menu-btn" onClick={(e)=>setIsOpen(!isOpen)} >MENU{(!isOpen)?(<ChevronDown color='crimson' size={30} />):(<ChevronUp color='crimson' size={30} />)}</div>
        {
          isOpen &&
        <div className='menu-content'>
          
          <div className='menu-items'>
              <Link className='menu-li' to="/">HOME</Link>
          </div>
            {
              Options.map((data, index)=>(
                
                <div key={data.title+index} className='menu-items'>
                  <a key={index} className='menu-li' href={data.link}>{data.title}</a>
                </div>

               

                
              ))
            }
          </div>
        
        }
          
          
        
      </div>
    </div>
  )
}

export default MenuBar
