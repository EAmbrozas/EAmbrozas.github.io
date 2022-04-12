import React from 'react'
import gamelist from '../../assets/gamelist.pdf'
import {AiOutlineDownload} from 'react-icons/ai'

const CTA = () => {
  return (
    <div className='cta'>
        <a href={gamelist} download className='btn'>Brochure<AiOutlineDownload className='cta__icon'/></a>
        <a href="#contact" className='btn btn-primary'>Contast Us</a>
    </div>
  )
}

export default CTA