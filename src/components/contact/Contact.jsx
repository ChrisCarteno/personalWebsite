import React, { useRef } from 'react';
import './contact.css'
import {MdOutlineMail} from 'react-icons/md'
import {RiMessengerLine} from 'react-icons/ri'
import {BsWhatsapp} from 'react-icons/bs'
import emailjs from 'emailjs-com'

const Contact = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_55nwlaw', 'template_qvvjp2g', form.current, '3xp5060xdd321vZj3')
      .then((result)=>{

      });

      e.target.reset();
    }
  return (
    <section id="contact">
      <h5>Get in Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineMail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5 className='email__h5'>ChristianCarteno@gmail.com</h5>
            <a href="mailto:ChristianCarteno@hotmail.com" target="_blank" rel='noreferrer'>Send a Message</a>
          </article>
          <article className="contact__option">
            <RiMessengerLine className='contact__option-icon' />
            <h4>Messenger</h4>
            <h5>Christian Carteno</h5>
            <a href="https://m.me/christian.carteno" target="_blank" rel='noreferrer'>Send a Message</a>
          </article>
          <article className="contact__option">
            <BsWhatsapp className='contact__option-icon'/>
            <h4>WhatsApp</h4>
            <h5>+7604429714</h5>
            <a href="https://api.whatsapp.com/send?phone=+7604429714" target="_blank" rel='noreferrer' >Send a Message</a>
          </article>
        </div>
        {/*End of the contacts options*/}
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="name" placeholder='Your Full Name' required/>
          <input type="email" name="email" placeholder='Your Email' required/>
          <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact