import React from 'react'
import './contact.css'
import {AiOutlineMail} from 'react-icons/ai'
import {RiMessengerLine} from 'react-icons/ri'
import {BsWhatsapp} from 'react-icons/bs'

const Contact = () => {
  return (
    <section id='contact'>
      <div className="contact__after">
      <h2>Contact Us</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option gmail">
            <div className="contact__option-after">
              <AiOutlineMail className='contact__option-icon'/>
              <h4>Email</h4>
              <h5>...@gmail.com</h5>
              <a href="mailto:kidspartystation@gmail.com" target="_blank">Send a message</a>
            </div>
          </article>
          <article className="contact__option messenger">
            <div className="contact__option-after">
              <RiMessengerLine className='contact__option-icon'/>
              <h4>Messenger</h4>
              <h5>kidspartystations</h5>
              <a href="https://m.me/Kids-Party-Station-106064831669904" target="_blank">Send a message</a>
            </div>
          </article>
          <article className="contact__option whatsapp">
            <div className="contact__option-after">
              <BsWhatsapp className='contact__option-icon'/>
              <h4>Whatsapp</h4>
              <h5>+353892640909</h5>
              <a href="https://api.whatsapp.com/send?phone=+353892640909" target="_blank">Send a message</a>
            </div>
          </article>
        </div>
        {/* END OF CONTACT OPTIONS */}
        <form action="">
          <input type="text" name='name' placeholder='You Name' required />
          <input type="email" name="email" placeholder='Your Email' required />
          <textarea name="message" rows="7" placeholder='Your Message' required ></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
      </div>
    </section>
  )
}

export default Contact