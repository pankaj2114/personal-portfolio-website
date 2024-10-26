import React from 'react';
import './Header.css';
import OTF from './OTF';
import ME from '../../assets/m2.jpg'
import HeaderSocial from './HeaderSocial';


const Header = () => {
  return (
   <>
   <section id='header_top'>
   <header className='header__section'>
   <div className='container header__container'>
      <h5>Hello ! I'M</h5>
      <h1>Pankaj Kumar Verma</h1>
      <h5 className='text-light'>Software Engineer</h5>
      <OTF/>
     <HeaderSocial/>
     <div className="me">
      <img src={ME} alt="me" />
     </div>
     <a href='#contact'className="Scroll__Down" >Scroll Down</a>
    </div>
   </header>
   </section>
   </>
  )
}

export default Header;
