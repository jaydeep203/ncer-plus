import React  from 'react'
import './Header.css';
import MenuBar from './MenuBar';
import SlideBar from './SlideBar/SlideBar';
import { Link } from 'react-router-dom';
import { Home, Info } from 'react-feather';

const Header = () => {
  

  return (
    <>
    
    {
     <SlideBar />
    }
    <div className='Header'>
        <div className='Navbar'>
          <div className='navIcons-home-about' >
            <Link className='navIcons' to="/"><Home size={30} color="white"/>HOME</Link>
            <Link className='navIcons' to="/about"><Info size={30} color="white"/>ABOUT</Link>

          </div>
        </div>
        <div className='Title'>
            <h1 id='name'>NCER PLUS</h1>
            <p id="subTitle" >web version</p>
        </div>
        <MenuBar/>

    </div>
    </>
  )
}

export default Header
