import React from 'react';
import './Footer.css';
import {FaLinkedin} from 'react-icons/fa'
import {BsGithub} from 'react-icons/bs'
import {FaFacebook} from 'react-icons/fa'
import {GrInstagram} from 'react-icons/gr'
const Footer = () => {
  return (
   <>
   <footer className="footer_section">
    <a href="#" className='footer__logo'>Pankaj Kumar Verma</a>
    <ul className="permalinks">
      <li><a href="#">Home</a></li>
      <li><a href="#about">About</a></li>
      <li><a href="#experience">Skills</a></li>
      <li><a href="#portfolio">Projects</a></li>
      <li><a href="#contact">Contact</a></li>
    </ul>
    <div className='footer__social'>
      <a href="https://www.linkedin.com/in/pankaj-kumar-verma-660457226/" target='__blank' rel="noreferrer"><FaLinkedin/></a>
      <a href="https://github.com/pankaj2114" target='__blank' rel="noreferrer"><BsGithub/></a>
      <a href="https://www.facebook.com/profile.php?id=100021547904346" target='__blank' rel="noreferrer"><FaFacebook/></a>
      <a href="https://www.instagram.com/its_programmer_pp/" target='__blank' rel="noreferrer"><GrInstagram/></a>
    </div>
    <div className="footer__copyright">
      <small>&copy;Pankaj Kumar Verma. All rights reserved.</small>
    </div>
   </footer>
   </>
  )
}

export default Footer;
