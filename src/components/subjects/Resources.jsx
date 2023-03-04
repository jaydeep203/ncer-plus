import React, { useEffect, useState }  from 'react';
import { useLocation } from 'react-router-dom';
import "./util.css";
import { FirstSubjects } from './FirstYear/FirstYear';
import { MechSubSec } from './Mechanical/Mechanical';
import {EntcSubSec} from "./Entc/Entc";
import { CompSubSec, CompSubThi } from './Computer/Computer';
import {AutoSecSub} from './Automobile/Automobile';


 







const Resources = () => {
 
  

  let loc = useLocation();
  const paths = loc.pathname;
  const [Url, setUrl] = useState('');
 
  useEffect(() => {

    
    FirstSubjects.map((data)=>{
      if(paths===`/notes/${data.path}`)
      {return setUrl(data.link)}
      else return null;
    })

    MechSubSec.map((data)=>{
      if(paths===`/notes/${data.path}`)
      {return setUrl(data.link)}
      else return null;
    })
    EntcSubSec.map((data)=>{
      if(paths===`/notes/${data.path}`)
      {return setUrl(data.link)}
      else return null;
    })
    CompSubSec.map((data)=>{
      if(paths===`/notes/${data.path}`)
      {return setUrl(data.link)}
      else return null;
    })
    CompSubThi.map((data)=>{
      if(paths===`/notes/${data.path}`)
      {return setUrl(data.link)}
      else return null;
    })
    AutoSecSub.map((data)=>{
      if(paths===`/notes/${data.path}`)
      {return setUrl(data.link)}
      else return null;
    })
    
    
  })
  

  return (
    <>
        {/* <Titlename/> */}
        <div className="cardBody">
          <a className='cards' href={Url} target="_blank" rel="noreferrer" >NOTES</a>           
           {/* <a className="cards" >PREVIOUS YEAR QUESTIONS</a> */}
      
        </div>
    </>

    
  )
}

export default Resources
