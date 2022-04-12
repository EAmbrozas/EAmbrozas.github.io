import React from 'react'
import './about.css'
import logo from '../../assets/logo.svg'
import {SiPlaystation} from 'react-icons/si'
import {FiMonitor} from 'react-icons/fi'
import {FiUsers} from 'react-icons/fi'
import {IoLogoGameControllerB} from 'react-icons/io'
import {GiPartyFlags} from 'react-icons/gi'
import {GiPartyPopper} from 'react-icons/gi'
import {AiOutlineDownload} from 'react-icons/ai'
import gamelist from '../../assets/gamelist.pdf'

const About = () => {
  return (
    <section id='about'>
      <div className="about__before">
      <div className="about__after">
      <h2>About Us</h2>

      <div className="container about__container">
        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <SiPlaystation className='about__icon'/>
              <h5>Consoles</h5>
              <small> Our van is equipped with 8 PLAYSTATION 5's so everyone can team up and enjoy playing games together</small>
            </article>
            <article className='about__card'>
              <FiMonitor className='about__icon'/>
              <h5>Monitors</h5>
              <small>Our van is fitted with high end 8 4k monitors to bring the expperience to the next level. Feel like you are in the game and not just playing it.</small>
            </article>
            <article className='about__card'>
              <FiUsers className='about__icon'/>
              <h5>Hosting</h5>
              <small>Our van can host up to 14 kids which makes the cost per head very reasonable</small>
            </article>
            <article className='about__card'>
              <IoLogoGameControllerB className='about__icon'/>
              <h5>Games</h5>
              <small>We have stocked up with the lates games on the market from sport, first pers shooter, second person shooter to racing</small>
            </article>
            <article className='about__card'>
              <GiPartyFlags className='about__icon'/>
              <h5>Events</h5>
              <small>Eccelent party idea for any occasion or event whether it is for a BIRTHDAY PARTY, CONFIRMATION, WEDDING or CORPORATE EVENT and much more</small>
            </article>
            <article className='about__card'>
              <GiPartyPopper className='about__icon'/>
              <h5>Experience</h5>
              <small>Best Party Experience</small>
            </article>
          </div>
          <p>
          Kids Party Station is a unique party concept that brings people together for a social gaming experience. Video gaming is fun, entertaining and social experience which will make any party truly unforgettable. We will take stress out of your party planning and make sure that you will have the best party ever!
          </p>
          <p className='small'>
            Download our Brochure for Games list, Pricing and Gaming rules!
          </p>

          <a href={gamelist} download className='btn'>Brochure<AiOutlineDownload className='cta__icon'/></a>
        </div>
      </div> 
      </div>
      </div>
    </section>
  )
}

export default About