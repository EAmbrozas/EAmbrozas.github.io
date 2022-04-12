import React from 'react'
import './header.css'
import CTA from './CTA'
import logo from '../../assets/logo.svg'
import HeaderSocial from './HeaderSocials'

const Header = () => {
  return (
    <header>
      <div className="header__before">
        <div className="header__after">
          <div className="container header__container">
          <div className="logo">
              <img className='logo__image' src={logo} alt="logo" />
            </div>
            <h1>KIDS PARTY STATION</h1>
            <h3>THE ULTIMATE GAMING EXPERIENCE</h3>
            <CTA />
            <HeaderSocial />
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header