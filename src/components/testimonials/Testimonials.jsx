import React from 'react'
import './testimonials.css'
import AVTR1 from '../../assets/ziaAuthorPic.jpg'
import AVTR2 from '../../assets/avatar2.jpg'

// import Swiper core and required modules
import { Pagination, } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const data=[
  {
    avatar: AVTR1,
    name:"Zia Martin",
    review: "Christian Carteno is extremely hard working, and incredibly talented. He made me a beatiful website, that I dearly love."
   },
  {
    avatar: AVTR2,
    name:"Cesar Leon",
    review: "Christian is a fast learner, and skilled at his craft. Starting from making websites for fun he has climbed up the ranks to create some fascinating and well performing websites with nice optimization. He really knows his stuff!",
  },
  // {
  //   avatar: AVTR3,
  //   name:"Dobbie Doe",
  //   review: "Lorem ipsum dolor sit amet, consectetur adipisicing elit",
  // },
  // {
  //   avatar: AVTR4,
  //   name:"Debbie Doe",
  //   review: "Lorem ipsum dolor sit amet, consectetur adipisicing elit",
  // },
]

const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <Swiper className="container testimonials__container"
       // install Swiper modules
       modules={[Pagination]}
       spaceBetween={40}
       slidesPerView={1}
       navigation
       pagination={{ clickable: true }}
      >
        {
          data.map(({avatar, name, review}, index)=>{
            return(
              <SwiperSlide key={index} className="testimonial">
                <div className="client__avatar">
                  <img src={avatar} alt={name} />
                </div>
                <h5 className='client__name'>{name}</h5>
                <small className="client__review">{review}</small>
              </SwiperSlide>
            )
          })
        }
      </Swiper>
    </section>
)

}

export default Testimonials