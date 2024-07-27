import React from 'react'
import './about.css'
// import Me from '../../assets/me-about.jpg'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {BsFolderCheck} from 'react-icons/bs'

let ME1 = 'https://media.licdn.com/dms/image/D5603AQE58d7poxP1wA/profile-displayphoto-shrink_200_200/0/1718271044721?e=2147483647&v=beta&t=c5tN767wk1mD25hrDvTY9KWrWNYydNIoTdodGjOl_Mo'

const About = () => {
  return (
    <section id="about">
      <h5>Get to Know</h5>
      <h2>About Me</h2>

      <div className='container about__container'>
        <div className='about__me'>
          <div className="about__me-image">
            <img src ={ME1} alt="about"/>
          </div>
        </div>

        <div className='about__content'>
          <div className="about__cards">
            <article className='about__card'>
              <FaAward className='about__icon'/>
              <h5>Experience</h5>
              <small>8+ Years Coding</small>
            </article>

            <article className='about__card'>
              <FiUsers className='about__icon'/>
              <h5>Clients</h5>
              <small>Only Happy Clients</small>
            </article>

            <article className='about__card'>
              <BsFolderCheck className='about__icon'/>
              <h5>projects</h5>
              <small>Several projects finished and in progress</small>
            </article>
          </div>

        <p> My name is Christian Carteno, I am a freelance Fullstack WebDeveloper. Computers and the web have enthralled
            me throughout my entire life. I love to create functional and optimized webistes. 
            I want to help people establish a strong internet presence. </p>
        <a href="#contact" className='btn btn-primary' >Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About
