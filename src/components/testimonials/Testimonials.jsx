import React from 'react'
import './testimonials.css'
import bean1 from '../../assets/bean1.jpg'
import bean2 from '../../assets/bean2.png'
import bean3 from '../../assets/bean3.jpeg'

// import Swiper core and required modules
import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const data = [
  {
    avatar: bean1,
    name: 'Mr Bean',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi eligendi consectetur doloremque molestias minus natus obcaecati aperiam unde? Eligendi vel quam et sapiente architecto iusto minima aliquam ullam molestias id.'
  },
  {
    avatar: bean2,
    name: 'Mr Bean',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi eligendi consectetur doloremque molestias minus natus obcaecati aperiam unde? Eligendi vel quam et sapiente architecto iusto minima aliquam ullam molestias id.'
  },
  {
    avatar: bean3,
    name: 'Mr Bean',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi eligendi consectetur doloremque molestias minus natus obcaecati aperiam unde? Eligendi vel quam et sapiente architecto iusto minima aliquam ullam molestias id.'
  },
  {
    avatar: bean1,
    name: 'Mr Bean',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi eligendi consectetur doloremque molestias minus natus obcaecati aperiam unde? Eligendi vel quam et sapiente architecto iusto minima aliquam ullam molestias id.'
  },
  {
    avatar: bean2,
    name: 'Mr Bean',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi eligendi consectetur doloremque molestias minus natus obcaecati aperiam unde? Eligendi vel quam et sapiente architecto iusto minima aliquam ullam molestias id.'
  },
]

const testimonials = () => {
  return (
    <section id='testimonials'>
      <div className="testimonials__before">
      <div className="testimonials__after">
      <h2>Testimonials</h2>

      <Swiper className="container testimonials__container"
      // install Swiper modules
      modules={[Pagination]}
      spaceBetween={40}
      slidesPerView={1}
      pagination={{ clickable: true }}>
        {
          data.map(({avatar, name, review}, index) => {
            return (
              <SwiperSlide key={index} className='testimonial'>
                <div className="client__avatar">
                  <img src={avatar}/>
                </div>
                <h5 className='client__name'>{name}</h5>
                <small className='client__review'>{review}</small>
              </SwiperSlide>
            )
          })
        }
      </Swiper>
      </div>
      </div>
    </section>
    
  )
}

export default testimonials