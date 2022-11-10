import React from 'react'
import { Link } from 'react-router-dom'

import { navLinks } from '../constants'

const Nav = () => {
  return (
    <nav id='nav'>
      <ul className='navLinks'>
        {navLinks.map(link => (
          <li className='navLink' key={link.id}>
            <a href={`#${link.id}`}>{link.title}</a>
          </li>
        ))}
      </ul> 
    </nav>
  )
}

export default Nav