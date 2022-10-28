import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio1.jpg'
import IMG2 from '../../assets/portfolio2.jpg'
import IMG3 from '../../assets/portfolio3.jpg'
import IMG4 from '../../assets/portfolio4.jpg'
// import IMG5 from '../../assets/portfolio5.png'
// import IMG6 from '../../assets/portfolio6.jpg'

// Do Not Use The Images In Production

const data = [
  {
    id:1,
    image: IMG1,
    title: 'Blog Website for ZiaMia, where she can share her life experiences and passions.',
    github: 'https://github.com/ChrisCarteno/Blog',
    demo: 'https://ziamia-blog.vercel.app/'
  },
  {
    id:2,
    image: IMG2,
    title: 'A website where you can save your notes.',
    github: 'https://github.com/ChrisCarteno/noteIt',
    demo: 'https://nooteit.herokuapp.com/'
  },
  {
    id:3,
    image: IMG3,
    title: 'Website of my Friends',
    github: 'https://github.com/ChrisCarteno/deployPractice',
    demo: 'https://www.u8gamers.com/'
  },
  {
    id:4,
    image: IMG4,
    title: 'Eccomerce Website using Stripe',
    github: 'https://github.com/ChrisCarteno/ecommerce',
    demo: 'https://ecommerce-niocdnl9n-chriscarteno.vercel.app/'
  },
  // {
  //   id:5,
  //   image: IMG5,
  //   title: 'Charts templates & infographics in Figma',
  //   github: 'https://github.com',
  //   demo: 'https://github.com'
  // },
  // {
  //   id:6,
  //   image: IMG6,
  //   title: 'Charts templates & infographics in Figma',
  //   github: 'https://github.com',
  //   demo: 'https://github.com'
  // }

]

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {
          data.map(({id, image, title, github, demo}) =>{
            return(
              <article key ={id} className="portfolio__item">
                <div className="portfolio__item-image">
                  <img src={image} alt={title} />
                </div>
                <h3>{title}</h3>
                <div className="portfolio__item-cta">
                  <a href={github} className="btn" target="_blank">Github</a>
                  <a href={demo} className="btn btn-primary" target="_blank">Live Demo</a>
                </div>
              </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default Portfolio