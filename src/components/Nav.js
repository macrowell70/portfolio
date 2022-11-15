import React, { useState } from 'react'

import { navLinks } from '../constants'
import { menu, close } from '../assets'

const Nav = (props) => {
  const [menuOpen, setMenuOpen] = useState(false)
  const { matches } = props

  const handleMenuOpen = () => {
    setMenuOpen(prev => !prev)
  }

  return (
    <nav id='nav'>
      {matches && 
      <ul className='navLinks'>
        {navLinks.map(link => (
          <li className='navLink' key={link.id}>
            <a href={`#${link.id}`}>{link.title}</a>
          </li>
        ))}
      </ul>}
      {!matches &&
      <div className='mobile-nav-container'>
        <img 
          src={!menuOpen ? menu : close} 
          alt="menu icon" 
          onClick={handleMenuOpen} 
        />
        {menuOpen &&
          <ul className='navLinks-mobile'>
          {navLinks.map(link => (
            <li className='navLink-mobile' key={link.id}>
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          ))}
        </ul>}
      </div>}
    </nav>
  )
}

export default Nav