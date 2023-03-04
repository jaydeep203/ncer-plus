import React, { useState } from 'react';
import "../subjects/util.css";
import "./Card.css";
import {ChevronDown, ChevronUp} from 'react-feather';
const Card = ({subj, link}) => {
  
  const [isActive, setIsActive] = useState(false);
  
  return (
    <div className='dropdown cardBody'>
      <div className="cards dropdown-btn" onClick={(e)=>setIsActive(!isActive)} >{subj} { !isActive?(<ChevronDown  color='black' size={30} />):(<ChevronUp color='black' size = {30} />) } </div>
      {
        isActive && 
        <div className="dropdown-content">
        <a id='item1' href={link} target="_blank" rel="noreferrer noopener" className="dropdown-item">
          NOTES
        </a>
        <div className="dropdown-item">
          PREVIOUS YEAR
        </div>
      </div>
      }
    </div>
  )
}

export default Card
