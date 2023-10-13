import React from 'react'
import './experience.css'
import {AiOutlineHtml5} from 'react-icons/ai'
import {TbBrandCss3} from 'react-icons/tb'
import {TbBrandJavascript} from 'react-icons/tb'
import {RiBootstrapLine} from 'react-icons/ri'
import {FaReact} from 'react-icons/fa'
import {FaNodeJs} from 'react-icons/fa'
import {SiMongodb} from 'react-icons/si'
import {FaPhp} from 'react-icons/fa'
import {GrMysql} from 'react-icons/gr'
import {TbBrandPython} from 'react-icons/tb'

const Experience = () => {
  return (
    <section id='experience'>
      <h5>The Skills I have</h5>
      <h2>My Experience</h2>

      <div className="container experience_container">
        <div className="experience_frontend">
          <h3>Frontend Development</h3>
          <div className="experience_content">

            <article className="experience_details">
              <AiOutlineHtml5 className='experience_details-icon'/>
              <div>
                <h4>HTML</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>

            <article className="experience_details">
              <TbBrandCss3 className='experience_details-icon'/>
              <div>
                <h4>CSS</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>

            <article className="experience_details">
              <TbBrandJavascript className='experience_details-icon'/>
              <div>
                <h4>JavaScript</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>

            <article className="experience_details">
              <RiBootstrapLine className='experience_details-icon'/>
              <div>
                <h4>Bootstrap</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>

            <article className="experience_details">
              <FaReact className='experience_details-icon'/>
              <div>
                <h4>React</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>

          </div>
        </div>
        {/*   END OF FRONTEND   */}

        <div className="experience_backend">
          <h3>Backend Development</h3>
          <div className="experience_content">

            <article className="experience_details">
              <FaNodeJs className='experience_details-icon'/>
              <div>
                <h4>Node JS</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>

            <article className="experience_details">
              <SiMongodb className='experience_details-icon'/>
              <div>
                <h4>MongoDB</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>

            <article className="experience_details">
              <FaPhp className='experience_details-icon'/>
              <div>
                <h4>PHP</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>

            <article className="experience_details">
              <GrMysql className='experience_details-icon'/>
              <div>
                <h4>MySQL</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>

            <article className="experience_details">
              <TbBrandPython className='experience_details-icon'/>
              <div>
                <h4>Python</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>

          </div>
        </div>

      </div>
    </section>
  )
}

export default Experience