import React from 'react'
import './footer.css'
import {GrFacebook} from 'react-icons/gr'
import {ImInstagram} from 'react-icons/im'

const Footer = () => {
  return (
    <footer id='footer'>
      <a href="#" className='footer__logo'>KIDS PARTYS STATION</a>

      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#testimonials">Testimonials</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://www.facebook.com/Kids-Party-Station-106064831669904" target="_blank"><GrFacebook/></a>
        <a href="https://www.instagram.com/thekidspartystation/?hl=en" target="_blank"><ImInstagram/></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; KIDS PARTY STATION. All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer