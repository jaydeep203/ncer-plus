import React, { useState } from 'react';
import "./SlideBar.css";
import {Home, Info, Mail, Menu, X} from "react-feather";
import { Link } from 'react-router-dom';


const SlideBar = () => {
  const [clicked, setClicked] = useState(false);

  return (
    <>
    <div className={clicked===true?'black-drop':"black-drop-invisible"} onClick={(e)=>setClicked(!clicked)}></div>
    <div className="icons" onClick={(e)=> setClicked(!clicked)}>
      <Menu className='openClose' color='white' size={35} />
    </div>
    {
      clicked &&
      <div className="slideBar">
        <div className="icons" onClick={(e)=> setClicked(!clicked)}>
          <X className='openClose' color='white' size={35} />
        </div>
        <div className="upperSlideBar">
          <div className='logoimg'>
            <img src="https://cdn-icons-png.flaticon.com/128/3253/3253012.png" alt="ncer+ logo" />
          </div>
          <div className='textupper'>
            <h1 className='upper-text'>NCER+ WEB</h1>
            <p id='version' className='upper-text'>version 1.5</p>
          </div> 
        </div>
        <div className="menuSlideBar">
            <h1>MENU</h1>
            <div className="Menuoptions">
              <Link className='Menuopt' to="/">{<Home color='black' size={30} />}  HOME</Link>
              <Link className='Menuopt' to='/About'>{<Info color='black' size={30} />} ABOUT</Link>
            </div>
        </div>
        <div className="supportSlideBar">
        <h1>SUPPORT</h1>
            <div className="Menuoptions">
              <a className='Menuopt' href="mailto:djtricks2003@gmail.com">{<Mail color='black' size={30} />}CONTACT ME</a>
            </div>
        </div>
        <div className="credits">
          <h1>DEVELOPER</h1>
          <p className='Menuopt'>2nd year CSE</p>
        </div>
      </div>
}
      </>
   
  )
}


export default SlideBar;
