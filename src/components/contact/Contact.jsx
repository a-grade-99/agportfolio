import React, { useRef } from 'react'
import './contact.css'
import {AiOutlineMail} from 'react-icons/ai'
import {BsWhatsapp} from 'react-icons/bs'
import emailjs from 'emailjs-com'

const Contact = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_jjnexyr', 'template_kdn00qd', form.current, 'c3yRf15V717ypYjVR')

    e.target.reset()
  };

  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact_container">
        <div className="contact_options">
          
          <article className="contact_option">
            <AiOutlineMail className='contact_option-icon'/>
            <h4>Email</h4>
            <h5>andregrade99@gmail.com</h5>
            <a href="mailto:andregrade99@gmail.com" target='_blank' rel="noreferrer">Send an Email</a>
          </article>

          <article className="contact_option">
            <BsWhatsapp className='contact_option-icon'/>
            <h4>WhatsApp</h4>
            <h5>andregrade99@gmail.com</h5>
            <a href="https://api.whatsapp.com/send?phone=+351969265458" target='_blank' rel="noreferrer">Send a Message</a>
          </article>

        </div>

        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Full Name' required />
          <input type="email" name='email' placeholder='Your Email' required />
          <textarea name="message" rows="7" placeholder='Write your message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Email</button>
        </form>
      </div>
    </section>
  )
}

export default Contact