import React from 'react'
import './about.css'
import me from '../../assets/me.jpg'
import {FaAward} from 'react-icons/fa'
import {AiOutlineFolderOpen} from 'react-icons/ai'

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about_container">
        <div className="about_me">
          <div className="about_me-image">
            <img src={me} alt="about" />
          </div>
        </div>

        <div className="about_content">
          <div className="about_cards">
            <article className="about_card">
              <FaAward className='about_icon' />
              <h5>Experience</h5>
              <small>2 Years of Experience</small>
            </article>

            <article className="about_card">
              <AiOutlineFolderOpen className='about_icon' />
              <h5>Projects</h5>
              <small>5+ Completed Projects</small>
            </article>
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam nobis corporis doloremque adipisci quae! In quod dolores ex debitis cum voluptatum alias, numquam tempore, ab, possimus magnam eveniet harum officiis?
            </p>

            <a href="#contact" className='btn btn-primary'>Let's Talk</a>
          
        </div>
      </div>
    </section>
  )
}

export default About