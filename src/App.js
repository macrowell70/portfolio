import React, { useState, useEffect } from 'react'
import './App.scss';

import { Nav, Home, Projects, About, Contact, Footer } from './components';

const mediaMatch = window.matchMedia("(min-width: 768px)")

function App() {
  const [matches, setMatches] = useState(mediaMatch.matches)

  useEffect(() => {
    mediaMatch.addEventListener('change', evt => setMatches(evt.matches))
  }, [])

  return (
    <div id='main'>
      <div className='home-container'>
        <Nav matches={matches} />
        <Home />
        <Projects />
        <About />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

export default App;
