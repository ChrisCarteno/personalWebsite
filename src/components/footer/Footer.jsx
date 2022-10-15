import React from 'react'
import './footer.css'
import {AiOutlineFacebook, AiOutlineInstagram} from 'react-icons/ai'

const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>Christian Carteno</a>

      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#testimonials">Testimonials</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href='https://facebook.com'> <AiOutlineFacebook /> </a>
        <a href='https://instagram.com'> <AiOutlineInstagram /> </a>
      </div>
      <div className='footer__copyright'>
        <small>&copy; Christian Carteno. All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer