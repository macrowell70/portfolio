import React from 'react'
import { paragraphs } from '../constants'

const About = () => {
  return (
    <div id='about'>
      <h2>About Me</h2>
      <div className='text-container'>
        {paragraphs.map(paragraph => (
          <p key={paragraph.id}>{paragraph.text}</p>
        ))}
      </div>
    </div>
  )
}

export default About