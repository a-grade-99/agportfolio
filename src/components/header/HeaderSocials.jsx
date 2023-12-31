import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'

const HeaderSocials = () => {
  return (
    <div className="header_socials">
        <a href="https://www.linkedin.com/in/andre-grade-393835289/" target="_blank" rel='noreferrer'><BsLinkedin /></a>
        <a href="https://github.com/a-grade-99" target="_blank" rel='noreferrer'><BsGithub /></a>
    </div>
  )
}

export default HeaderSocials