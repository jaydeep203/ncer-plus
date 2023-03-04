import './util.css';

import React from 'react'
import { Link, useLocation } from 'react-router-dom';

const Titlename = () => {
  const location = useLocation();
  let path = location.pathname;
  path = path.slice(1).toUpperCase();
  return(
    <div className="title"><p>{path}</p></div> 
  )

  
}

export const BYears = [
  {
    link: 'second-year',
    year: 'SECOND YEAR',
  },
  {
    link: 'third-year',
    year: 'THIRD YEAR',
  },
  {
    link: 'fourth-year',
    year: 'FOURTH YEAR',
  },
];

const Years = () => {
    
  return (
    <>
      <Titlename />
      <div className='Years cardBody'>
        {
          BYears.map((data, index)=>(
            <Link key={index} className='cards' to={`${data.link}`}>
              <div>
                  {data.year}
              </div>
            </Link>
              
          ))
        }
      </div>
    </>
  )
}

export default Years
