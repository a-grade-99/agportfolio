import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/project1.jpg'
import IMG2 from '../../assets/project2.jpg'
import IMG3 from '../../assets/project3.jpg'
import IMG4 from '../../assets/project4.jpg'
import IMG5 from '../../assets/project5.jpg'
import IMG6 from '../../assets/project6.jpg'


const data = [
  {
    id: 1,
    image: IMG1,
    title:"Project 1",
    gitHub: "https://github.com/",
    demo: "https://github.com/"
  },
  {
    id: 2,
    image: IMG2,
    title:"Project 2",
    gitHub: "https://github.com/",
    demo: "https://github.com/"
  },
  {
    id: 3,
    image: IMG3,
    title:"Project 3",
    gitHub: "https://github.com/",
    demo: "https://github.com/"
  },
  {
    id: 4,
    image: IMG4,
    title:"Project 4",
    gitHub: "https://github.com/",
    demo: "https://github.com/"
  },
  {
    id: 5,
    image: IMG5,
    title:"Project 5",
    gitHub: "https://github.com/",
    demo: "https://github.com/"
  },
  {
    id: 6,
    image: IMG6,
    title:"Project 6",
    gitHub: "https://github.com/",
    demo: "https://github.com/"
  }
]


const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio_container">
        
        {
          data.map(({id, image, title, gitHub,demo}) => {
            return (
              <article key={id} className='portfolio_item'>
                <div className="portfolio_item-image">
                  <img src={image} alt={title} />
                </div>
                <h3>{title}</h3>
                <div className="portfolio_item-cta">
                  <a href={gitHub} className='btn'>GitHub</a>
                  <a href={demo} className='btn btn-primary' target='_blank' rel="noreferrer">Live Demo</a>
                </div>
              </article>
            )
          })
        }

      </div>
    </section>
  )
}

export default Portfolio