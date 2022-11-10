import React from 'react'

import { paragraphs } from '../constants'

const About = () => {
  return (
    <div id='about'>
      <h2>About Me</h2>
      <div className='text-container'>
        {paragraphs.map(text => (
          <p>{text}</p>
        ))}
      </div>
    </div>
  )
}

export default About