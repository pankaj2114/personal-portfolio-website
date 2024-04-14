import React from 'react'
import {FaLinkedin} from 'react-icons/fa'
import {BsGithub} from 'react-icons/bs'
import {FaFacebook} from 'react-icons/fa'
import {GrInstagram} from 'react-icons/gr'
const HeaderSocial = () => {
  return (
    <>
    <div className='header__social'>
      <a href="https://www.linkedin.com/in/pankaj-kumar-verma-660457226/" target='__blank' rel="noreferrer"><FaLinkedin/></a>
      <a href="https://github.com/pankaj2114" target='__blank' rel="noreferrer"><BsGithub/></a>
      <a href="https://www.facebook.com/profile.php?id=100021547904346" target='__blank' rel="noreferrer"><FaFacebook/></a>
      <a href="https://www.instagram.com/its_programmer_pp/" target='__blank' rel="noreferrer"><GrInstagram/></a>
    </div>
    </>
  )
}

export default HeaderSocial;
