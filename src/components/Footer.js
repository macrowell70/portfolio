import React from 'react'

import { github, linkedin } from '../assets'

const Footer = () => {
  return (
    <div id='footer'>
      <div className='contacts-container'>
        <a href='https://www.linkedin.com/in/macrowell/' target='_blank'><img src={linkedin} alt='LinkedIn ' /></a>
          <div className='contacts'>
            <span>macrowell@yahoo.com</span>
            <span>{'(248) 860-9852'}</span>
          </div>
        <a href='https://github.com/macrowell70' target='_blank'><img src={github} alt='GitHub' /></a>
      </div>
    </div>
  )
}

export default Footer