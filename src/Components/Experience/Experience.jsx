import React from 'react';
import './Experience.css';
import {GoVerified} from 'react-icons/go'
const Experience = () => {
  return (
    <section id='experience' className='experience__section' >
      <h5> What skills I have</h5>
       <h2>Skills</h2>
      <div className="container experience__container">
       <div className="experience__frontend"> 
        <h3>Frontend Technology</h3>
        <div className="experience__content">
            <article className='experience__detail'>
             <div className="verified">
              <GoVerified className="experience__detail-icon" />
              <h4>HTML</h4>
              </div>
              <small className="text-light">Experienced</small>
            </article>
            <article className='experience__detail'>
             <div className="verified">
              <GoVerified className="experience__detail-icon" />
              <h4>CSS</h4>
              </div>
              <small className="text-light">Intermediate</small>
            </article>
            <article className='experience__detail'>
             <div className="verified">
              <GoVerified className="experience__detail-icon" />
              <h4>JavaScript</h4>
              </div>
              <small className="text-light">Intermediate</small>
            </article>
            <article className='experience__detail'>
             <div className="verified">
              <GoVerified className="experience__detail-icon" />
              <h4>BOOTSTRAP</h4>
              </div>
              <small className="text-light">Basic</small>
            </article>
            <article className='experience__detail'>
             <div className="verified">
              <GoVerified className="experience__detail-icon" />
              <h4>J QUERY</h4>
              </div>
              <small className="text-light">Intermediate</small>
            </article>
            <article className='experience__detail'>
             <div className="verified">
              <GoVerified className="experience__detail-icon" />
              <h4>REACT JS</h4>
              </div>
              <small className="text-light">Intermediate</small>
            </article>
        </div>
       </div>


       <div className="experience__backend">
       <h3>Backend Technology</h3>
        <div className="experience__content">
            <article className='experience__detail'>
             <div className="verified">
              <GoVerified className="experience__detail-icon" />
              <h4>C#, C++ & JAVA</h4>
              </div>
              <small className="text-light">Intermediate</small>
            </article>
            <article className='experience__detail'>
             <div className="verified">
              <GoVerified className="experience__detail-icon" />
              <h4>ASP.Net Web Forms</h4>
              </div>
              <small className="text-light">Intermediate</small>
            </article>
            <article className='experience__detail'>
             <div className="verified">
              <GoVerified className="experience__detail-icon" />
              <h4>ASP.Net MVC</h4>
              </div>
              <small className="text-light">Intermediate</small>
            </article>
            <article className='experience__detail'>
             <div className="verified">
              <GoVerified className="experience__detail-icon" />
              <h4>ASP.Net Web APIs</h4>
              </div>
              <small className="text-light">Intermediate</small>
            </article>
            <article className='experience__detail'>
             <div className="verified">
              <GoVerified className="experience__detail-icon" />
              <h4>MS SQL Server</h4>
              </div>
              <small className="text-light">Intermediate</small>
            </article>         
            <article className='experience__detail'>
             <div className="verified">
              <GoVerified className="experience__detail-icon" />
              <h4>GIT & SVN</h4>
              </div>
              <small className="text-light">Version Control System</small>
            </article>     
        </div>
       </div>
       
      </div>
    </section>
  )
}

export default Experience;
