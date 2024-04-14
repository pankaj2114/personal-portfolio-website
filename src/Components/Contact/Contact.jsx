import React  from 'react';
import { useRef } from 'react';
import emailjs from 'emailjs-com';
import './Contact.css';
import {AiOutlineMail} from 'react-icons/ai';
import {RiMessengerLine} from 'react-icons/ri';
import {ImWhatsapp} from 'react-icons/im';
const Contact = () => {
  const form=useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_uzka0jv', 'template_kpmnll8', form.current, 'IMI4rZ476FcEexHR1')
     e.target.reset();
  };
  return (
    <section id='contact' className='contact__section'>
      <h5>Get in Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <AiOutlineMail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>techpro9161@gmail.com</h5>
            <a href="mailto: techpro9161@gmail.com" target='_blank' rel="noreferrer">Send a message</a>
          </article>
          <article className="contact__option">
            <RiMessengerLine className='contact__option-icon'/>
            <h4>Messenger</h4>
            <h5>Pankaj Verma</h5>
            <a href="http://m.me/profile.php?id=100021547904346" target='_blank' rel="noreferrer">Send a message</a>
          </article>
          <article className="contact__option">
            <ImWhatsapp className='contact__option-icon'/>
            <h4>What's App</h4>
            <h5>9161741949</h5>
            <a href="http://api.whatsapp.com//send?phone=+919161741949" target='_blank' rel="noreferrer">Send a message</a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail} >
          <input type="text" name="name" id="" placeholder='Your Name..' required/>
          <input type="email" name="email" id="" placeholder='Your Email..' required/>
          <textarea name="message"rows="7" placeholder='Your Message..' required/>
          <button className="btn btn-primary">Send message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact;
