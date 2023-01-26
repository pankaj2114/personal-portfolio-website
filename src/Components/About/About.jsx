import React from 'react';
import './About.css';
import {GiAchievement} from 'react-icons/gi'
import Aboutimg from '../../assets/aboutImg.jpg'
const About = () => {
  return (
    <section id='about' className='about__section'>
      <h5>Go to know</h5>
      <h2>About Me</h2>
     <div className="container about__container">
      <div className="about__me">
        <div className="about__me-img">
          <img src={Aboutimg} alt="My Image" />
        </div>
        </div>  

        <div className="about__content">
          <div className="about__cards">
            <article className='about__card '>
              <GiAchievement className='about__icon'/>
              <h5>Projects</h5>
              <small>7+ Completed</small>
            </article>
            <article className='about__card '>
              <GiAchievement className='about__icon'/>
              <h5>P Language</h5>
              <small>3+ Intermediate</small>
            </article>
            <article className='about__card '>
              <GiAchievement className='about__icon'/>
              <h5>DSA Problems</h5>
              <small>150+ Solved</small>
            </article>
          </div>            
            <p>`Hello! My name is Pankaj Kumar Verma. I am pursuing Bachelor Digree(<b>Bachelor of Technology</b>) in Computer Science and Engineering specilization from <a href="https://www.ccsuniversity.ac.in/scriet/" target='__blank'>Sir Chhotu Ram Institute of engineering and Technology,</a> Chaudhary Charan Singh University Campus Meerut`            </p>
          <a href="#contact" className='btn btn-primary'>Let's Talk</a>    
      </div>
     </div>
    </section>
  )
}

export default About;
