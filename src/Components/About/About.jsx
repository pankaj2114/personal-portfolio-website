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
              <h5>Programming Language</h5>
              <small>4+ Intermediate</small>
            </article>
            <article className='about__card '>
              <GiAchievement className='about__icon'/>
              <h5>DSA Problems</h5>
              <small>450+ Solved</small>
            </article>
          </div>
          <p>I am Pankaj Kumar Verma, a proactive <b>Junior Software Engineer</b> with a Bachelor's Degree in Computer Science and Engineering from <b><a href="https://www.ccsuniversity.ac.in/scriet/" target='__blank'>Sir Chhotu Ram Institute of engineering and Technology,</a></b>  Chaudhary Charan Singh University Campus Meerut.My expertise lies in utilizing technologies such as <b>C#, SQL Server, ASP.NET, and ASP.NET MVC</b> to develop robust software solutions and contribute effectively to project success.</p>            
          <a href="#contact" className='btn btn-primary'>Let's Talk</a>    
      </div>
     </div>
    </section>
  )
}

export default About;
