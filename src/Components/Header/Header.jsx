import React from 'react';
import './Header.css';
import OTF from './OTF';
import ME from '../../assets/pp2-removebg-preview.png'
import HeaderSocial from './HeaderSocial';


const Header = () => {
  return (
   <>
   <header className='header__section'>
   <div className='container header__container'>
      <h5>Hello ! I'M</h5>
      <h1>Pankaj Kumar Verma</h1>
      <h5 className='text-light'>Junior Software Engineer</h5>
      <OTF/>
     <HeaderSocial/>
     <div className="me">
      <img src={ME} alt="me" />
     </div>
     <a href='#contact'className="Scroll__Down">Scroll Down</a>
    </div>
   </header>
   </>
  )
}

export default Header;
