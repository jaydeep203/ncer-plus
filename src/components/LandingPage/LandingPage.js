import React from 'react';
import { Link } from 'react-router-dom';
import "../subjects/util.css";


export const Branches = [
  {
    id:"first-year",
    branchname: "FIRST YEAR",
  },
  {
    id:"computer",
    branchname: "COMPUTER",
  },
  {
    id:"automobile",
    branchname: "AUTOMOBILE",
  },
  {
    id:"mechanical",
    branchname: "MECHANICAL",
  },
  {
    id:"entc",
    branchname: "E AND T C",
  },
  
];
const LandingPage = () => {
  // const Branches = ["FIRST YEAR", 'COMPUTER', 'AUTOMOBILE', 'MECHANICAL', 'E AND T C'];
  
 
  
  return (
    <div className='LandingPage cardBody'>
      {Branches.map((data, index)=>(
        <Link key={index}  className='cards' to={`${data.id}`}>
          <p id='branch'>
              {data.branchname}
          </p>
      </Link>     
      ))
        }

    </div>
  )
}

export default LandingPage;
