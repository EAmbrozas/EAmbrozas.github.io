import React from 'react'
import {GrFacebook} from 'react-icons/gr'
import {ImInstagram} from 'react-icons/im'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://www.facebook.com/Kids-Party-Station-106064831669904" target="_blank"> <GrFacebook/></a>
        <a href="https://www.instagram.com/thekidspartystation/?hl=en" target="_blank"> <ImInstagram/></a>
    </div>
  )
}


export default HeaderSocials