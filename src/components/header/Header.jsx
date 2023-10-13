import React from 'react'
import './header.css'
import CTA from './CTA'
import ME1 from '../../assets/me1.png'
import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
    <header id='header'>
      <div className="container header_container">
        <h5>Hello I'm</h5>
        <h1>André Grade</h1>
        <h5 className="text-light">Frontend Developer</h5>
        <CTA />
        <HeaderSocials />

        <div className="me">
          <img src={ME1} alt="me1" className='me1'/>
        </div>

        <a href="#contact" className='scroll_down'>Scrool Down</a>
      </div>
    </header>
  )
}

export default Header