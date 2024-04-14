import React from 'react';
import './Nav.css';
import {AiOutlineHome} from 'react-icons/ai';
import {FaRegUser} from 'react-icons/fa';
import {FaBook} from 'react-icons/fa';
import {RiServiceLine} from 'react-icons/ri';
import {AiOutlinePhone} from 'react-icons/ai';
import { useState } from 'react';
const Nav = () => {
  const [active, setactive]=useState('')
  return (
    <>
    <nav className='nav__container'>
      <a href="/" onClick={()=>setactive('#')} className= {active==='#'?'active':''} ><AiOutlineHome/></a>
      <a href="#about" onClick={()=>setactive('about')} className= {active==='about'?'active':''}><FaRegUser/></a>
      <a href="#experience" onClick={()=>setactive('experience')} className= {active==='experience'?'active':''}><FaBook/></a>
      <a href="#portfolio" onClick={()=>setactive('portfolio')} className= {active==='portfolio'?'active':''}><RiServiceLine/></a>
      <a href="#contact" onClick={()=>setactive('contact')} className= {active==='contact'?'active':''}><AiOutlinePhone/></a>
    </nav>
    </>
  )
}

export default Nav;
