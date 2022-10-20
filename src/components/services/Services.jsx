import React from 'react'
import './services.css'
import {BsCheck2} from 'react-icons/bs'

const Services = () => {
  return (
    <section id="services">
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>UI/UX design</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BsCheck2 size="28" className='service__list-icon'/>
              <p>Wireframing</p>
            </li>
            <li>
              <BsCheck2 size="28" className='service__list-icon'/>
              <p>User Stories</p>
            </li>
            <li>
              <BsCheck2 size="28" className='service__list-icon'/>
              <p>Banners</p>
            </li>
            <li>
              <BsCheck2 size="28" className='service__list-icon'/>
              <p>Mobile Friendly</p>
            </li>
            <li>
              <BsCheck2 size="28" className='service__list-icon'/>
              <p>Animated UI</p>
            </li>
          </ul>
        </article>
        {/* End of UI/UX */}
        <article className="service">
          <div className="service__head">
            <h3>Web Development</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BsCheck2 size="28" className='service__list-icon'/>
              <p>Application Programming Interface Integration</p>
            </li>
            <li>
              <BsCheck2 size="28" className='service__list-icon'/>
              <p>Back-end Development</p>
            </li>
            <li>
              <BsCheck2 size="28" className='service__list-icon'/>
              <p>Front-end Development and Design</p>
            </li>
            <li>
              <BsCheck2 size="28" className='service__list-icon'/>
              <p>Maintenance and Support</p>
            </li>
            <li>
              <BsCheck2 size="28" className='service__list-icon'/>
              <p>Responsive Design</p>
            </li>
            <li>
              <BsCheck2 size="28" className='service__list-icon'/>
              <p>Database Creation</p>
            </li>
          </ul>
        </article>
        {/* End Web Development*/}
        <article className="service">
          <div className="service__head">
            <h3>Content Creation</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BsCheck2 size="28" className='service__list-icon'/>
              <p>Data Seeding</p>
            </li>
            <li>
              <BsCheck2 size="28" className='service__list-icon'/>
              <p>About Pages</p>
            </li>
            <li>
              <BsCheck2 size="28" className='service__list-icon'/>
              <p>Blog Posts</p>
            </li>
            <li>
              <BsCheck2 size="28" className='service__list-icon'/>
              <p>Infographics</p>
            </li>
            <li>
              <BsCheck2 size="28" className='service__list-icon'/>
              <p>Images</p>
            </li>
          </ul>
        </article>
        {/* End of Content Creation */}
      </div>
    </section>
  )
}

export default Services
