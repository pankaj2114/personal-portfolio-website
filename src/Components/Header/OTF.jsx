import React from 'react';
import resume from '../../assets/resume.pdf';


const OTF = () => {
  return (
    <div className='otf'>
      <a href={resume} download className='btn'>Download CV</a>
      <a href='#contact' className='btn btn-primary'>Let's Talk</a>
    </div>
  )
}

export default OTF;
