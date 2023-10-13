import React from 'react'
import './footer.css'
import {BsFacebook} from 'react-icons/bs'
import {BsInstagram} from 'react-icons/bs'

const Footer = () => {
  return (
    <footer>
      <a href="#header" className='footer_logo'>André Grade</a>

      <ul className='permalinks'>
        <li><a href="#header">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#contact">Contacts</a></li>
      </ul>

      <div className="footer_socials">
        <a href="https://www.facebook.com/profile.php?id=61550976136936" target='_blank' rel="noreferrer"><BsFacebook /></a>
        <a href="https://www.instagram.com/andre_grade/?next=%2F" target='_blank' rel="noreferrer"><BsInstagram /></a>
      </div>

      <div className="footer_copyright">
        <small>&copy; Andre Grade. All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer